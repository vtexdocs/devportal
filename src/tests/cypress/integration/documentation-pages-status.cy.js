/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { getPageSample, NAVIGATION_SOURCE } from '../../utils/select-pages.js'

const MAX_INFRA_REQUEST_RETRIES = 3
const PAGE_VISIT_TIMEOUT_MS = 30000

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

// Tracks the failure classification for the current test, consumed by afterEach.
let failureType = 'dom'
let failureMessage = ''

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

  beforeEach(() => {
    cy.viewport(1366, 768)
    failureType = 'dom'
    failureMessage = ''
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      writeLog({
        spec: Cypress.spec.name,
        title: this.currentTest.title,
        attempt: this.currentTest.currentRetry(),
        type: failureType,
        message: failureMessage,
      })
    }
  })

  pages.forEach((page) =>
    it(`Checks page ${page}`, () => {
      requestPage(page).then((response) => {
        if (response.status < 200 || response.status > 399) {
          failureType = 'http'
          failureMessage = `HTTP ${response.status}`
          throw new Error(`HTTP ${response.status} for ${page}`)
        }

        // If it's a PDF, consider it a valid response and skip further checks
        if (response.headers['content-type']?.includes('application/pdf')) {
          return
        }

        // Set type to load_timeout before cy.visit; reset to dom once visit
        // succeeds so that a subsequent sidebar failure is correctly classified.
        failureType = 'load_timeout'
        cy.visit(page, {
          retryOnNetworkFailure: true,
          retryOnStatusCodeFailure: true,
          timeout: PAGE_VISIT_TIMEOUT_MS,
        })
        cy.then(() => {
          failureType = 'dom'
        })
        cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should(
          'be.visible'
        )
      })
    })
  )
})
