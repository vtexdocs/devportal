/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { getPageSample, NAVIGATION_SOURCE } from '../../utils/select-pages.js'

const { pages, seed, seedLabel } = getPageSample({
  prob: Cypress.env('testProbability') || 1.0,
  seed: Cypress.env('sampleSeed'),
})

describe('Status of documentation pages', () => {
  before(() => {
    cy.writeFile('cypress.log', `#Status of documentation pages#\n`, {
      flag: 'a+',
    })
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
      writeLog(this.currentTest.title)
    }
  })

  pages.forEach((page) =>
    it(
      `Checks page ${page}`,
      {
        retries: {
          runMode: 3,
          openMode: 3,
        },
      },
      () => {
        // Handle PDF content-type gracefully
        cy.request(Cypress.config().baseUrl + page).then((response) => {
          // If it's a PDF, consider it a valid response and skip further checks
          if (response.headers['content-type']?.includes('application/pdf')) {
            return
          }

          // For HTML content, proceed with page navigation and checks
          cy.visit(page)
          // Wait for page to be fully hydrated
          cy.wait(2000) // Give time for initial hydration
          cy.get('body').should('be.visible')
          // Wait for any dynamic content to load
          cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should(
            'exist'
          )
        })
      }
    )
  )
})
