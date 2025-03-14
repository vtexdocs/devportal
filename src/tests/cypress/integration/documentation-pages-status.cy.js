/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { selectRandomPages } from '../../utils/select-pages.js'

describe('Status of documentation pages', () => {
  before(() => {
    cy.writeFile('cypress.log', `#Status of documentation pages#\n`, {
      flag: 'a+',
    })

    // Handle React hydration errors
    Cypress.on('uncaught:exception', (err) => {
      // Return false to prevent Cypress from failing the test on hydration errors
      if (
        err.message.includes('Minified React error #418') ||
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

  const pages = selectRandomPages({
    prob: Cypress.env('testProbability') || 1.0,
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
        cy.visit(page)
        // Wait for page to be fully hydrated
        cy.wait(2000) // Give time for initial hydration
        cy.get('body').should('be.visible')
        // Wait for any dynamic content to load
        cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should(
          'exist'
        )
      }
    )
  )
})
