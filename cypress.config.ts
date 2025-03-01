import { defineConfig } from 'cypress'
import clipboardy from 'clipboardy'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  fixturesFolder: 'src/tests/cypress/fixtures',
  downloadsFolder: 'src/tests/cypress/downloads',
  chromeWebSecurity: false,
  numTestsKeptInMemory: 10,
  experimentalMemoryManagement: true,
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      on('task', {
        setUrl: (url) => {
          global.url = url
          return null
        },
        getUrl: () => {
          return global.url
        },
        getClipboard: () => {
          return clipboardy.readSync()
        },
      })
    },
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000',
  },
})
