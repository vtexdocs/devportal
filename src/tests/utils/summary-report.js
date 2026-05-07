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

const printSampleMetadata = (sampleMetadata) => {
  if (!sampleMetadata?.pages?.length) return

  const seedLabel = sampleMetadata.seedLabel || sampleMetadata.seed?.slice(0, 7)
  console.log(`## Sampled pages (seed \`${seedLabel}\`)\n`)

  if (sampleMetadata.navigationSource) {
    console.log(
      `Navigation source: \`${sampleMetadata.navigationSource}\` from this branch.\n`
    )
  }

  sampleMetadata.pages.forEach((page) => console.log(`- \`${page}\``))
  console.log()
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

// Groups records by spec then title, tracking the max attempt per title.
// Returns Map<spec, Map<title, maxAttempt>>.
const collapseFailures = (records) => {
  const specs = new Map()
  for (const record of records) {
    const spec = record.spec ?? 'unknown'
    const title = record.title ?? 'unknown'
    const attempt = record.attempt ?? 0
    if (!specs.has(spec)) specs.set(spec, new Map())
    const specMap = specs.get(spec)
    const current = specMap.get(title) ?? -1
    if (attempt > current) specMap.set(title, attempt)
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

module.exports = {
  loadFailures,
  collapseFailures,
  countDistinct,
  specDisplayName,
}

if (require.main === module) {
  const sampleMetadata = loadSampleMetadata()
  const records = loadFailures()
  const collapsed = collapseFailures(records)
  const total = countDistinct(collapsed)

  console.log('# End-to-end tests\n')

  if (total === 0) {
    console.log('All tests were successful!')
  } else {
    console.log(`A total of **${total} tests failed**!\n`)

    for (const [spec, tests] of collapsed) {
      console.log(`## ${specDisplayName(spec)}\n`)
      console.log(`**${tests.size} failing tests**:\n`)
      for (const [title, maxAttempt] of tests) {
        const suffix = maxAttempt > 0 ? ` (retried ${maxAttempt}x)` : ''
        console.log(` * ${title}${suffix}`)
      }
      console.log()
    }

    console.log('For more information, open the cypress action summary page.')
  }

  printSampleMetadata(sampleMetadata)
}
