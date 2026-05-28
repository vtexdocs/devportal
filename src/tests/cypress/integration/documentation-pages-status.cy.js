/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { getPageSample, NAVIGATION_SOURCE } from '../../utils/select-pages.js'

const MAX_INFRA_REQUEST_RETRIES = 3
const PAGE_VISIT_TIMEOUT_MS = 30000
const PAGE_SPECIFIC_VISIT_TIMEOUTS_MS = {
  // Netlify preview intermittently keeps this FastStore guide loading longer than the
  // generic 30 s cap even when the content itself is healthy.
  'docs/guides/faststore/molecules-order-summary': 60000,
}

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

const getPageVisitTimeoutMs = (page) =>
  PAGE_SPECIFIC_VISIT_TIMEOUTS_MS[page] ?? PAGE_VISIT_TIMEOUT_MS

const writeInfraFailure = (page, type, message) =>
  writeLog({
    spec: Cypress.spec.name,
    title: `Checks page ${page}`,
    type,
    message,
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
          // Preview infra failures are reported in the summary comment, not as blocking regressions.
          writeInfraFailure(page, 'http', `HTTP ${response.status}`)
          return
        }

        // If it's a PDF, consider it a valid response and skip further checks
        if (response.headers['content-type']?.includes('application/pdf')) {
          return
        }

        let sawLoadTimeout = false

        Cypress.once('fail', (error) => {
          if (
            error.message.includes('Timed out after waiting') &&
            error.message.includes('remote page to load')
          ) {
            sawLoadTimeout = true
            writeInfraFailure(page, 'load_timeout', 'load timeout')
            return false
          }

          throw error
        })

        cy.visit(page, {
          retryOnNetworkFailure: true,
          retryOnStatusCodeFailure: true,
          timeout: getPageVisitTimeoutMs(page),
        })
        cy.then(() => {
          if (sawLoadTimeout) {
            return
          }

          failureType = 'dom'
          failureMessage = ''
        })
        cy.then(() => {
          if (sawLoadTimeout) {
            return
          }

          cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should(
            'be.visible'
          )
        })
      })
    })
  )
})
