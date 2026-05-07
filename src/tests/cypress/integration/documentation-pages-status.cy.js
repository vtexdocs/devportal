/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { getPageSample, NAVIGATION_SOURCE } from '../../utils/select-pages.js'

const MAX_INFRA_REQUEST_RETRIES = 3

const { pages, seed, seedLabel } = getPageSample({
  prob: Cypress.env('testProbability') || 1.0,
  seed: Cypress.env('sampleSeed'),
})

const isRetryableInfraStatus = (status) =>
  status >= 500 || status === 408 || status === 429

const requestPage = (page, attempt = 0) =>
  cy
    .request({
      failOnStatusCode: false,
      retryOnNetworkFailure: true,
      url: Cypress.config().baseUrl + page,
    })
    .then((response) => {
      if (
        isRetryableInfraStatus(response.status) &&
        attempt < MAX_INFRA_REQUEST_RETRIES
      ) {
        cy.log(
          `Retrying infrastructure failure for ${page} (${response.status})`
        )

        return requestPage(page, attempt + 1)
      }

      return response
    })

describe('Status of documentation pages', () => {
  before(() => {
    cy.writeFile(
      'cypress-sample.json',
      {
        seed,
        seedLabel,
        navigationSource: NAVIGATION_SOURCE,
        pages,
      },
      {
        log: false,
      }
    )

    // Handle React hydration errors and other expected errors
    Cypress.on('uncaught:exception', (err) => {
      // Return false to prevent Cypress from failing the test on expected errors
      if (
        err.message.includes('Minified React error #418') ||
        err.message.includes('Minified React error #423') ||
        err.message.includes('Hydration')
      ) {
        return false
      }
    })
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      writeLog({
        spec: Cypress.spec.name,
        title: this.currentTest.title,
        attempt: this.currentTest.currentRetry(),
        type: 'dom',
      })
    }
  })

  pages.forEach((page) =>
    it(`Checks page ${page}`, () => {
      requestPage(page).then((response) => {
        expect(
          response.status,
          `Expected a successful response for ${page}`
        ).to.be.within(200, 399)

        // If it's a PDF, consider it a valid response and skip further checks
        if (response.headers['content-type']?.includes('application/pdf')) {
          return
        }

        cy.visit(page, {
          retryOnNetworkFailure: true,
          retryOnStatusCodeFailure: true,
        })
        cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should(
          'be.visible'
        )
      })
    })
  )
})
