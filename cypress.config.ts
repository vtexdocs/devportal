import { defineConfig } from 'cypress'

interface Global {
  url?: string
}

declare const global: Global & typeof globalThis

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
    setupNodeEvents(on, _config) {
      on('task', {
        setUrl: (url) => {
          global.url = url
          return null
        },
        getUrl: () => {
          return global.url
        },
      })
    },
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
    defaultCommandTimeout: 20000, // Increased timeout for hydration
    baseUrl: 'http://localhost:3000',
  },
})
