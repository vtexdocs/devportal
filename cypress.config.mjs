import { defineConfig } from 'cypress'
import nodeEvents from './src/tests/cypress/plugins/index.mjs'

export default defineConfig({
  fixturesFolder: 'src/tests/cypress/fixtures',
  screenshotsFolder: 'src/tests/cypress/screenshots',
  videosFolder: 'src/tests/cypress/videos',
  downloadsFolder: 'src/tests/cypress/downloads',
  e2e: {
    setupNodeEvents(on, config) {
      return nodeEvents(on, config)
    },
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
    baseUrl: 'http://localhost:3000',
  },
})
