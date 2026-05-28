/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { visitPageAllowingLoadTimeout } from '../support/network'

const API_REFERENCE_TEST_URL =
  '/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs/-importId-'
const API_REFERENCE_VISIT_TIMEOUT_MS = 15000
const API_REFERENCE_READY_TIMEOUT_MS = 30000

const assertRapiDocReady = () => {
  cy.get('rapi-doc', {
    timeout: API_REFERENCE_READY_TIMEOUT_MS,
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

const visitApiReferencePage = (url) =>
  visitPageAllowingLoadTimeout(url, {
    timeout: API_REFERENCE_VISIT_TIMEOUT_MS,
  }).then(() => {
    cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should('exist')
  })

describe('API reference documentation page', () => {
  before(() => {
    cy.task('setUrl', API_REFERENCE_TEST_URL)
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.task('getUrl').then((url) => visitApiReferencePage(url))
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
    cy.location().then(({ pathname, hash }) => {
      const currentRoute = `${pathname}${hash}`

      cy.get('[data-cy="sidebar-section"] a[href*="/docs/api-reference/"]')
        .then(($links) => {
          const candidateLinks = $links.toArray().filter((link) => {
            const href = link.getAttribute('href')
            const normalizedHref = href
              ? new URL(href, Cypress.config('baseUrl'))
              : null

            return (
              Boolean(normalizedHref) &&
              Cypress.$(link).is(':visible') &&
              `${normalizedHref.pathname}${normalizedHref.hash}` !==
                currentRoute
            )
          })

          expect(
            candidateLinks,
            'visible API reference links different from the current page'
          ).to.have.length.greaterThan(0)

          return cy.wrap(Cypress._.sample(candidateLinks))
        })
        .scrollIntoView()
        .click({ force: true })

      cy.location().then(({ pathname: nextPathname, hash: nextHash }) => {
        const nextRoute = `${nextPathname}${nextHash}`

        expect(nextRoute).to.match(/\/docs\/api-reference\/./)
        expect(nextRoute).not.to.eq(currentRoute)
        cy.task('setUrl', nextRoute)
      })
    })
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
