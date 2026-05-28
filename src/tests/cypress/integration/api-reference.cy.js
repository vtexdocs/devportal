/// <reference types="cypress" />

import { writeLog } from '../support/functions'

const API_REFERENCE_TEST_URL =
  '/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation'
const API_REFERENCE_VISIT_TIMEOUT_MS = 60000

const assertRapiDocReady = () => {
  cy.get('rapi-doc', {
    timeout: API_REFERENCE_VISIT_TIMEOUT_MS,
  }).should(($rapiDoc) => {
    const rapiDoc = $rapiDoc.get(0)

    expect(rapiDoc, 'rapi-doc element').to.exist
    expect(rapiDoc?.resolvedSpec, 'resolved OpenAPI spec').to.exist
    expect(rapiDoc?.scrollToPath, 'scrollToPath method').to.be.a('function')
  })
}

const getDesktopSidebarSection = () =>
  cy.get('[data-cy="sidebar-section"]').should('have.length', 1)

const getDesktopSidebarToggle = () =>
  getDesktopSidebarSection().siblings('.toggleIcon').should('have.length', 1)

describe('API reference documentation page', () => {
  before(() => {
    cy.task('setUrl', API_REFERENCE_TEST_URL)
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.task('getUrl').then((url) =>
      cy.visit(url, {
        retryOnNetworkFailure: true,
        retryOnStatusCodeFailure: true,
        timeout: API_REFERENCE_VISIT_TIMEOUT_MS,
      })
    )
    assertRapiDocReady()
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.task('getUrl').then((url) => {
        writeLog({
          spec: Cypress.spec.name,
          title: this.currentTest.title,
          attempt: this.currentTest.currentRetry(),
          type: 'dom',
          message: url,
        })
      })
    }
  })

  it('Check if the sidebar collapse button works', () => {
    getDesktopSidebarSection().should('not.have.class', 'sidebarHide')
    // Force click because the opacity-0 toggle still owns the collapse handler.
    getDesktopSidebarToggle().click({ force: true })
    getDesktopSidebarSection().should('have.class', 'sidebarHide')
    getDesktopSidebarToggle().click({ force: true })
    getDesktopSidebarSection().should('not.have.class', 'sidebarHide')
  })

  it('Check if a random guide page, chosen using the sidebar, loads', () => {
    cy.get('.css-1450tp')
      .anyWithIndex()
      .then(([category, index]) => {
        cy.wrap(index).as('idx')
        return cy.wrap(category)
      })
      .scrollIntoView()
      .find('button')
      .click({ force: true })

    cy.get('@idx').then((idx) => {
      cy.get('.css-1450tp')
        .eq(idx + 1)
        .find('button')
        .click({ force: true })

      cy.get('.css-1450tp')
        .eq(idx + 2)
        .find('a')
        .click({ force: true })
    })

    cy.url()
      .should('match', /(\/api-reference\/.)/)
      .then((url) => cy.task('setUrl', url))
  })

  it('Check if it has a title', () => {
    cy.get('rapi-doc')
      .shadow()
      .within(() => {
        cy.get('h2').invoke('text').should('not.be.empty')
      })
  })

  it('Check if the response tab is clickable and, after it, if the response appeared', () => {
    cy.get('rapi-doc')
      .shadow()
      .within(() => {
        cy.get('api-response')
          .shadow()
          .within(() => {
            cy.get('.resp-box')
              .first()
              .scrollIntoView()
              .should('be.visible')
              .click()
            cy.get('.resp-content').first().should('be.visible')
          })
      })
  })
})
