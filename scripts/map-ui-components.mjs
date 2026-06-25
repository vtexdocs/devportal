#!/usr/bin/env node
/**
 * Mapeamento de componentes de UI do devportal.
 *
 * Varre src/ (RapiDoc é ignorado), extrai imports e declarações de
 * componentes, classifica cada identificador por origem (este repo vs. repo
 * externo) e mede uso DENTRO deste repositório.
 *
 * Ressalva: o conteúdo MDX real vive no repo externo `vtexdocs/dev-portal-content`,
 * que NÃO está presente aqui. Portanto "usado" reflete apenas referências em
 * `devportal/src` — referências em conteúdo MDX externo não foram verificadas.
 *
 * Saída: component-mapping/ui-components.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SRC = path.join(REPO_ROOT, 'src')
const OUT_DIR = path.join(REPO_ROOT, 'component-mapping')
const OUT_JSON = path.join(OUT_DIR, 'ui-components.json')

const GENERATED_AT = process.env.MAP_DATE || new Date().toISOString().slice(0, 10)

// ----------------------------------------------------------------------------
// Mapa pacote -> repositório/metadados
// ----------------------------------------------------------------------------
const PACKAGE_REPOS = {
  '@vtex/brand-ui': { repository: 'github.com/vtexdocs/brand-ui', origin: 'external', label: 'design-system' },
  '@vtexdocs/components': { repository: 'github.com/vtexdocs/components (v6.0.33)', origin: 'external', label: 'docs-components' },
  '@faststore/ui': { repository: 'github.com/vtexdocs/faststore', origin: 'external', label: 'faststore' },
  '@faststore/sdk': { repository: 'github.com/vtexdocs/faststore', origin: 'external', label: 'faststore' },
  '@faststore/api': { repository: 'github.com/vtexdocs/faststore', origin: 'external', label: 'faststore' },
  '@faststore/components': { repository: 'github.com/vtexdocs/faststore', origin: 'external', label: 'faststore' },
}

// Bibliotecas de UI de terceiros (npm) que devem entrar no mapeamento. Demais
// dependências (auth, parsing, http, utils) NÃO são componentes de UI e são ignoradas.
const UI_THIRD_PARTY = {
  'react-paginate': 'npm: react-paginate',
  'react-toastify': 'npm: react-toastify',
  'react-animate-height': 'npm: react-animate-height',
  'react-markdown': 'npm: react-markdown',
  'reakit': 'npm: reakit',
  '@code-hike/mdx': 'npm: @code-hike/mdx',
}
// Exports de UI do Next.js que contam como componentes (o resto são hooks/utils).
const NEXT_UI_EXPORTS = new Set(['Image', 'Link', 'Head', 'Script', 'Document'])

// Primitivas/tipos/hooks conhecidos do brand-ui, para classificar `kind`.
const BRAND_UI_PRIMITIVES = new Set([
  'Box', 'Flex', 'Grid', 'Text', 'Link', 'Icon', 'Input', 'Checkbox', 'Button', 'Image',
])
const TYPE_NAMES = new Set([
  'SxStyleProp', 'SxProps', 'IconProps', 'TooltipProps', 'ToastProps', 'ImageElementData',
  'IStoreSelectedFacet',
])

// ----------------------------------------------------------------------------
// Coleta de arquivos
// ----------------------------------------------------------------------------
const SOURCE_EXT = new Set(['.ts', '.tsx', '.js', '.jsx'])
const IGNORE_DIRS = new Set(['node_modules', 'tests', '__tests__', 'cypress'])

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue
      walk(full, acc)
    } else if (SOURCE_EXT.has(path.extname(entry.name)) && !entry.name.endsWith('.d.ts')) {
      acc.push(full)
    }
  }
  return acc
}

const files = walk(SRC)
const fileContents = new Map()
for (const f of files) fileContents.set(f, fs.readFileSync(f, 'utf8'))

const rel = (p) => path.relative(REPO_ROOT, p).split(path.sep).join('/')

// ----------------------------------------------------------------------------
// Parser de imports
// ----------------------------------------------------------------------------
const IMPORT_RE = /import\s+(type\s+)?([^;]*?)\s+from\s+['"]([^'"]+)['"]/g

/** Extrai nomes importados de uma cláusula de import (entre `import` e `from`). */
function parseClause(clause) {
  const out = [] // { name, isType, isNamespace, isDefault }
  const rest = clause.trim()

  // namespace: * as Foo
  const ns = rest.match(/\*\s+as\s+([A-Za-z0-9_$]+)/)
  if (ns) out.push({ name: ns[1], isNamespace: true })

  // named: { A, B as C, type D }
  const braces = rest.match(/\{([\s\S]*?)\}/)
  if (braces) {
    for (let part of braces[1].split(',')) {
      part = part.trim()
      if (!part) continue
      let isType = false
      if (part.startsWith('type ')) { isType = true; part = part.slice(5).trim() }
      const asMatch = part.match(/^([A-Za-z0-9_$]+)\s+as\s+([A-Za-z0-9_$]+)$/)
      const name = asMatch ? asMatch[2] : part
      if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) out.push({ name, isType })
    }
  }

  // default: identificador isolado antes de qualquer { ou *
  const head = rest.split(/[{*]/)[0].replace(/,\s*$/, '').trim()
  if (head && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(head)) {
    out.push({ name: head, isDefault: true })
  }
  return out
}

// ----------------------------------------------------------------------------
// Resolução de imports locais -> arquivo de declaração
// ----------------------------------------------------------------------------
function resolveLocal(source, importerFile) {
  const candidates = []
  if (source.startsWith('.')) {
    candidates.push(path.resolve(path.dirname(importerFile), source))
  } else if (source.startsWith('@components-library/')) {
    candidates.push(path.join(REPO_ROOT, 'public', 'components', source.replace('@components-library/', '')))
  } else {
    // baseUrl: src  -> ex.: "components/header", "utils/foo"
    candidates.push(path.join(SRC, source))
  }
  for (const base of candidates) {
    for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
      if (fs.existsSync(base + ext)) return base + ext
    }
    for (const ext of ['index.tsx', 'index.ts', 'index.jsx', 'index.js']) {
      const idx = path.join(base, ext)
      if (fs.existsSync(idx)) return idx
    }
    if (fs.existsSync(base) && fs.statSync(base).isFile()) return base
  }
  return null
}

function isLocalSource(source) {
  return (
    source.startsWith('.') ||
    source.startsWith('@components-library/') ||
    source.startsWith('components/') ||
    source.startsWith('utils/') ||
    source.startsWith('styles/') ||
    source.startsWith('messages/') ||
    source.startsWith('pages/')
  )
}

function packageOf(source) {
  if (source.startsWith('@')) return source.split('/').slice(0, 2).join('/')
  return source.split('/')[0]
}

// Heurística: parece nome de componente React (PascalCase) — para separar de hooks/utils.
const isComponentName = (n) => /^[A-Z]/.test(n)
const isHookName = (n) => /^use[A-Z]/.test(n)

function classifyKind(name, source) {
  if (TYPE_NAMES.has(name)) return 'type'
  if (isHookName(name)) return 'hook'
  if (source === '@vtex/brand-ui' && BRAND_UI_PRIMITIVES.has(name)) return 'primitive'
  if (isComponentName(name)) return 'component'
  return 'other'
}

// ----------------------------------------------------------------------------
// Registro de componentes
// ----------------------------------------------------------------------------
/** @type {Map<string, any>} chave = name + '::' + (package|declarationFile) */
const registry = new Map()

function keyFor({ name, package: pkg, declarationFile }) {
  return `${name}::${pkg || declarationFile || 'local'}`
}

function getEntry(meta) {
  const k = keyFor(meta)
  if (!registry.has(k)) {
    registry.set(k, {
      name: meta.name,
      kind: meta.kind,
      origin: meta.origin, // local | external | third-party
      package: meta.package || null,
      repository: meta.repository,
      declarationFile: meta.declarationFile || null,
      importSource: meta.importSource || null,
      importedInFiles: new Set(),
      usedInFiles: new Set(),
      notes: meta.notes || '',
    })
  }
  return registry.get(k)
}

// ----------------------------------------------------------------------------
// 1) Inventário de componentes LOCAIS (mesmo que não importados)
// ----------------------------------------------------------------------------
const DEVPORTAL_REPO = 'github.com/vtexdocs/devportal (este repo)'
const componentsDir = path.join(SRC, 'components')

function toPascal(slug) {
  return slug
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

// 1a. pasta-por-componente: src/components/*/index.tsx (e arquivos .tsx soltos)
function inventoryLocalComponents() {
  for (const entry of fs.readdirSync(componentsDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === 'faststore-components') continue // tratado à parte
      const idx = ['index.tsx', 'index.ts'].map((f) => path.join(componentsDir, entry.name, f)).find(fs.existsSync)
      if (idx) {
        getEntry({
          name: toPascal(entry.name),
          kind: 'component',
          origin: 'local',
          repository: DEVPORTAL_REPO,
          declarationFile: rel(idx),
        })
      }
    } else if (entry.name.endsWith('.tsx')) {
      const file = path.join(componentsDir, entry.name)
      getEntry({
        name: toPascal(entry.name.replace(/\.tsx$/, '')),
        kind: 'component',
        origin: 'local',
        repository: DEVPORTAL_REPO,
        declarationFile: rel(file),
      })
    }
  }
}

// 1b. exports nomeados do barrel faststore-components/index.ts
function inventoryFaststoreBarrel() {
  const barrel = path.join(componentsDir, 'faststore-components', 'index.ts')
  if (!fs.existsSync(barrel)) return
  const content = fs.readFileSync(barrel, 'utf8')
  const re = /export\s+\{([^}]*)\}\s+from\s+['"]([^'"]+)['"]/g
  let m
  while ((m = re.exec(content))) {
    const names = m[1].split(',').map((s) => s.trim()).filter(Boolean)
    const fromPath = resolveLocal(m[2].startsWith('.') ? m[2] : './' + m[2], barrel)
    for (const nm of names) {
      const asMatch = nm.match(/^([A-Za-z0-9_$]+)\s+as\s+([A-Za-z0-9_$]+)$/)
      const name = asMatch ? asMatch[2] : nm.replace(/^default\s+as\s+/, '')
      getEntry({
        name,
        kind: 'component',
        origin: 'local',
        repository: DEVPORTAL_REPO,
        declarationFile: fromPath ? rel(fromPath) : `src/components/faststore-components/${m[2]}`,
        notes: 'Exportado por src/components/faststore-components/index.ts',
      })
    }
  }
}

inventoryLocalComponents()
inventoryFaststoreBarrel()

// ----------------------------------------------------------------------------
// 2) Varredura de imports em todos os arquivos
// ----------------------------------------------------------------------------
for (const file of files) {
  const content = fileContents.get(file)
  let m
  IMPORT_RE.lastIndex = 0
  while ((m = IMPORT_RE.exec(content))) {
    const isTypeImport = Boolean(m[1])
    const clause = m[2]
    const source = m[3]
    if (!clause.trim()) continue // side-effect import
    const names = parseClause(clause)

    if (isLocalSource(source)) {
      const decl = resolveLocal(source, file)
      for (const id of names) {
        if (!isComponentName(id.name) && !isHookName(id.name)) continue
        const e = getEntry({
          name: id.name,
          kind: classifyKind(id.name, source),
          origin: 'local',
          repository: DEVPORTAL_REPO,
          declarationFile: decl ? rel(decl) : `src/${source}`,
        })
        if (decl && rel(decl) !== rel(file)) e.usedInFiles.add(rel(file))
        e.importedInFiles.add(rel(file))
      }
      continue
    }

    // Externo / terceiro
    const pkg = packageOf(source)
    const known = PACKAGE_REPOS[pkg]
    const isNext = pkg === 'next'
    // Só mapeamos bibliotecas de UI. Outras dependências (auth, http, parsing) são ignoradas.
    if (!known && !UI_THIRD_PARTY[pkg] && !isNext) continue
    const origin = known ? known.origin : 'third-party'
    const repository = known ? known.repository : UI_THIRD_PARTY[pkg] || `npm: ${pkg}`
    for (const id of names) {
      // Para pacotes não-VTEX, só interessam componentes de UI (PascalCase), não hooks/utils.
      if (!known) {
        if (!isComponentName(id.name)) continue
        if (isNext && !NEXT_UI_EXPORTS.has(id.name)) continue
      } else if (!isComponentName(id.name) && !isHookName(id.name)) {
        continue
      }
      const kind = isTypeImport || id.isType ? 'type' : classifyKind(id.name, pkg)
      const e = getEntry({
        name: id.name,
        kind,
        origin,
        package: pkg,
        repository,
        importSource: source,
      })
      e.usedInFiles.add(rel(file))
      e.importedInFiles.add(rel(file))
    }
  }
}

// ----------------------------------------------------------------------------
// 3) Uso de componentes LOCAIS via JSX (confirma uso e cobre casos sem import).
// ----------------------------------------------------------------------------
for (const e of registry.values()) {
  if (e.origin !== 'local') continue
  const jsxRe = new RegExp(`<${e.name}[\\s/>]`)
  for (const file of files) {
    const r = rel(file)
    if (e.declarationFile === r) continue
    if (jsxRe.test(fileContents.get(file))) e.usedInFiles.add(r)
  }
}

// ----------------------------------------------------------------------------
// 4) Serialização
// ----------------------------------------------------------------------------
const components = [...registry.values()]
  .map((e) => ({
    name: e.name,
    kind: e.kind,
    origin: e.origin,
    package: e.package,
    repository: e.repository,
    declarationFile: e.declarationFile,
    importSource: e.importSource,
    used: e.usedInFiles.size > 0,
    usageCount: e.usedInFiles.size,
    usedInFiles: [...e.usedInFiles].sort(),
    notes: e.notes,
  }))
  .sort(
    (a, b) =>
      a.origin.localeCompare(b.origin) ||
      (a.package || '').localeCompare(b.package || '') ||
      a.name.localeCompare(b.name)
  )

const byOrigin = {}
const byRepo = {}
for (const c of components) {
  byOrigin[c.origin] = (byOrigin[c.origin] || 0) + 1
  byRepo[c.repository] = (byRepo[c.repository] || 0) + 1
}
const localUnused = components.filter((c) => c.origin === 'local' && !c.used).map((c) => c.name)

const output = {
  meta: {
    generatedAt: GENERATED_AT,
    repo: 'devportal',
    filesScanned: files.length,
    totalComponents: components.length,
    countsByOrigin: byOrigin,
    countsByRepository: byRepo,
    localUnusedCount: localUnused.length,
    caveat:
      'Uso medido apenas dentro de devportal/src (imports + JSX). O conteúdo MDX real vive no repo externo vtexdocs/dev-portal-content e NÃO foi verificado — componentes marcados como não usados podem ser consumidos por esse conteúdo.',
    packageRepositoryMap: Object.fromEntries(
      Object.entries(PACKAGE_REPOS).map(([k, v]) => [k, v.repository])
    ),
  },
  components,
}

fs.mkdirSync(OUT_DIR, { recursive: true })
fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2))

console.log(`✓ ${components.length} componentes mapeados em ${files.length} arquivos`)
console.log(`  por origem:`, byOrigin)
console.log(`  locais não usados (neste repo): ${localUnused.length}`)
console.log(`✓ JSON: ${rel(OUT_JSON)}`)
