import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'src/tests/cypress/fixtures',
  screenshotsFolder: 'src/tests/cypress/screenshots',
  videosFolder: 'src/tests/cypress/videos',
  downloadsFolder: 'src/tests/cypress/downloads',
  e2e: {
    specPattern: 'src/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/index.js',
    baseUrl: 'http://localhost:3000',
  },
  chromeWebSecurity: false,
})
