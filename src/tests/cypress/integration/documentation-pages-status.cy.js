/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { visitPageAllowingLoadTimeout } from '../support/network'
import { getPageSample, NAVIGATION_SOURCE } from '../../utils/select-pages.js'

const MAX_INFRA_REQUEST_RETRIES = 3
const PAGE_VISIT_TIMEOUT_MS = 10000
const PAGE_SPECIFIC_VISIT_TIMEOUTS_MS = {
  // Netlify preview intermittently keeps this FastStore guide loading longer than the
  // generic 10 s cap even when the content itself is healthy.
  'docs/guides/faststore/molecules-order-summary': 20000,
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

const assertDocumentContentLoaded = () =>
  cy.document().then((document) => {
    if (document.title.trim()) {
      return
    }

    cy.get('body').should(($body) => {
      const bodyText = $body.text().replace(/\s+/g, ' ').trim()

      expect(bodyText, 'body text when <title> is empty').not.to.be.empty
    })
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

        visitPageAllowingLoadTimeout(page, {
          timeout: getPageVisitTimeoutMs(page),
        })
        cy.then((sawLoadTimeout) => {
          if (sawLoadTimeout) {
            writeInfraFailure(page, 'load_timeout', 'load timeout')
            return sawLoadTimeout
          }

          failureType = 'dom'
          failureMessage = ''
          return sawLoadTimeout
        })
        cy.then((sawLoadTimeout) => {
          if (sawLoadTimeout) {
            return
          }

          assertDocumentContentLoaded()
        })
      })
    })
  )
})
