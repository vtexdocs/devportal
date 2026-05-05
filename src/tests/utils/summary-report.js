/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const logPath = './cypress.log'
const samplePath = './cypress-sample.json'
const log = fs.readFileSync(logPath, { encoding: 'utf8' })

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

let count = 0
const errors = []
const sampleMetadata = loadSampleMetadata()

printSampleMetadata(sampleMetadata)

log.split('\n').forEach((line) => {
  if (line.startsWith('#') || line.endsWith('#')) {
    const title = line.substring(1, line.length - 1)
    errors.push({ title, tests: [] })
  } else if (line) {
    count++
    errors[errors.length - 1].tests.push(line)
  }
})

if (!count) {
  console.log('All tests were successful!')
} else {
  console.log(`A total of **${count} tests failed**!\n`)

  errors.forEach(({ title, tests }) => {
    if (tests.length) {
      console.log(`## ${title}\n`)
      console.log(`**${tests.length} failing tests**:\n`)
      tests.forEach((test) => console.log(` * ${test}`))
      console.log()
    }
  })

  console.log('For more information, open the cypress action summary page.')
}
