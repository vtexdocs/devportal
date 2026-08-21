/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { visitPageAllowingLoadTimeout } from '../support/network'

const API_REFERENCE_TEST_URL =
  '/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs/-importId-'
const API_REFERENCE_VISIT_TIMEOUT_MS = 15000
const API_REFERENCE_READY_TIMEOUT_MS = 30000

const normalizeRoute = (pathname = '', hash = '') => {
  const normalizedPath =
    pathname === '/' ? pathname : pathname.replace(/\/+$/, '')

  return `${normalizedPath}${decodeURIComponent(hash || '')}`
}

const normalizeHrefRoute = (href) => {
  const { pathname, hash } = new URL(href, Cypress.config('baseUrl'))

  return normalizeRoute(pathname, hash)
}

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
  getDesktopSidebarSection()
    .siblings('.toggleIcon')
    .find('svg')
    .should('have.length', 1)

const visitApiReferencePage = (url) =>
  visitPageAllowingLoadTimeout(url, {
    timeout: API_REFERENCE_VISIT_TIMEOUT_MS,
  }).then(() => {
    cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should('exist')
  })

describe('API reference documentation page', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)
    visitApiReferencePage(API_REFERENCE_TEST_URL)
    assertRapiDocReady()
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.url().then((url) => {
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
      const currentRoute = normalizeRoute(pathname, hash)

      cy.get('[data-cy="sidebar-section"] a[href*="/docs/api-reference/"]')
        .then(($links) => {
          const candidateLinks = $links.toArray().reduce((candidates, link) => {
            const href = link.getAttribute('href')
            const nextRoute = href ? normalizeHrefRoute(href) : null

            if (
              nextRoute &&
              Cypress.$(link).is(':visible') &&
              nextRoute !== currentRoute
            ) {
              candidates.push({ element: link, route: nextRoute })
            }

            return candidates
          }, [])

          expect(
            candidateLinks,
            'visible API reference links different from the current page'
          ).to.have.length.greaterThan(0)

          const selectedLink = Cypress._.sample(candidateLinks)

          cy.wrap(selectedLink.route).as('targetRoute')
          return cy.wrap(selectedLink.element)
        })
        .scrollIntoView()
        .click({ force: true })

      cy.get('@targetRoute').then((targetRoute) => {
        cy.location({ timeout: 10000 }).should(({ pathname, hash }) => {
          expect(normalizeRoute(pathname, hash)).to.eq(targetRoute)
        })
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
              .filter(':visible')
              .first()
              .scrollIntoView()
              .should('be.visible')
              .click({ force: true })
            cy.get('.resp-content')
              .filter(':visible')
              .first()
              .should('be.visible')
          })
      })
  })
})
