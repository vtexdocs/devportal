/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const jsonlPath = './cypress-failures.jsonl'
const samplePath = './cypress-sample.json'

const loadSampleMetadata = () => {
  if (!fs.existsSync(samplePath)) return null

  try {
    return JSON.parse(fs.readFileSync(samplePath, { encoding: 'utf8' }))
  } catch {
    return null
  }
}

const loadFailures = (path = jsonlPath) => {
  if (!fs.existsSync(path)) return []

  const lines = fs.readFileSync(path, { encoding: 'utf8' }).split('\n')
  const records = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    try {
      records.push(JSON.parse(trimmed))
    } catch {
      // skip malformed lines
    }
  }
  return records
}

// Groups records by spec then title, keeping the highest-attempt record per title.
// Returns Map<spec, Map<title, { maxAttempt, type, message }>>.
const collapseFailures = (records) => {
  const specs = new Map()
  for (const record of records) {
    const spec = record.spec ?? 'unknown'
    const title = record.title ?? 'unknown'
    const attempt = record.attempt ?? 0
    const type = record.type ?? 'dom'
    const message = record.message ?? ''
    if (!specs.has(spec)) specs.set(spec, new Map())
    const specMap = specs.get(spec)
    const current = specMap.get(title)
    if (!current || attempt > current.maxAttempt) {
      specMap.set(title, { maxAttempt: attempt, type, message })
    }
  }
  return specs
}

const countDistinct = (collapsed) => {
  let total = 0
  for (const tests of collapsed.values()) total += tests.size
  return total
}

const specDisplayName = (spec) => {
  const basename = spec.split(/[\\/]/).pop() ?? spec
  return basename.replace(/\.cy\.(js|ts|tsx)$/, '')
}

// Splits collapsed failures into content regressions, infra failures, and other.
// Each bucket is Map<spec, Map<title, { maxAttempt, type, message }>>.
const partitionByType = (collapsed) => {
  const content = new Map()
  const infra = new Map()
  const other = new Map()

  for (const [spec, tests] of collapsed) {
    for (const [title, entry] of tests) {
      let bucket
      if (entry.type === 'dom') bucket = content
      else if (entry.type === 'http' || entry.type === 'load_timeout')
        bucket = infra
      else bucket = other

      if (!bucket.has(spec)) bucket.set(spec, new Map())
      bucket.get(spec).set(title, entry)
    }
  }

  return { content, infra, other }
}

const renderSpecTests = (specMap, showMessage = false) => {
  for (const [spec, tests] of specMap) {
    console.log(`### ${specDisplayName(spec)}\n`)
    console.log(`**${tests.size} failing tests**:\n`)
    for (const [title, { maxAttempt, type, message }] of tests) {
      let suffix = maxAttempt > 0 ? ` (retried ${maxAttempt}x)` : ''
      if (showMessage) {
        suffix += message ? ` — ${message}` : ` — ${type.replace('_', ' ')}`
      }
      console.log(` * ${title}${suffix}`)
    }
    console.log()
  }
}

module.exports = {
  loadFailures,
  collapseFailures,
  countDistinct,
  specDisplayName,
  partitionByType,
}

if (require.main === module) {
  const sampleMetadata = loadSampleMetadata()
  const records = loadFailures()
  const collapsed = collapseFailures(records)
  const { content, infra, other } = partitionByType(collapsed)

  const contentCount = countDistinct(content)
  const infraCount = countDistinct(infra)
  const otherCount = countDistinct(other)

  const seedLabel =
    sampleMetadata?.seedLabel || sampleMetadata?.seed?.slice(0, 7)
  console.log(
    seedLabel
      ? `# End-to-end tests (seed \`${seedLabel}\`)\n`
      : '# End-to-end tests\n'
  )

  console.log('## Content regressions\n')
  if (contentCount === 0) {
    console.log('No content regressions.\n')
  } else {
    console.log(`**${contentCount} tests failed**:\n`)
    renderSpecTests(content)
  }

  console.log('## Preview infrastructure\n')
  if (infraCount === 0) {
    console.log('No infrastructure failures.\n')
  } else {
    console.log(
      `**${infraCount} infrastructure failures** (HTTP errors and load timeouts — not content regressions)\n`
    )
    renderSpecTests(infra, true)
  }

  console.log('## Other\n')
  if (otherCount === 0) {
    console.log('None.\n')
  } else {
    renderSpecTests(other, true)
  }

  if (contentCount > 0 || infraCount > 0 || otherCount > 0) {
    console.log('For more information, open the cypress action summary page.\n')
  }

  if (sampleMetadata?.pages?.length) {
    console.log('## Sampled pages\n')
    if (sampleMetadata.navigationSource) {
      console.log(
        `Navigation source: \`${sampleMetadata.navigationSource}\` from this branch.\n`
      )
    }
    sampleMetadata.pages.forEach((page) => console.log(`- \`${page}\``))
    console.log()
  }
}
