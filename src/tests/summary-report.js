/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const logPath = './cypress.log'
const log = fs.readFileSync(logPath, { encoding: 'utf8' })

let count = 0
const errors = []

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
