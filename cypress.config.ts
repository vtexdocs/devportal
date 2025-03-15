import { defineConfig } from 'cypress'
import path from 'path'

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
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            components: path.resolve(__dirname, './src/components'),
            utils: path.resolve(__dirname, './src/utils'),
            styles: path.resolve(__dirname, './src/styles')
          }
        },
        module: {
          rules: [
            {
              test: /\.[jt]sx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  configFile: path.resolve(__dirname, '.babelrc.cypress.js')
                }
              }
            }
          ]
        }
      }
    },
    specPattern: 'src/tests/cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/tests/cypress/support/component.ts',
    indexHtmlFile: 'cypress/support/component-index.html'
  },
  e2e: {
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
    defaultCommandTimeout: 20000,
    baseUrl: 'http://localhost:3000',
  },
})
