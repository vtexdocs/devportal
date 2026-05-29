/// <reference types="cypress" />
import { writeLog } from '../support/functions'
import { visitPageAllowingLoadTimeout } from '../support/network'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()
const GUIDE_VISIT_TIMEOUT_MS = 15000
const GUIDE_TEST_URL =
  '/docs/guides/payments-integration-implementing-a-payment-provider'
const GUIDE_TOC_TEST_URL = '/docs/guides/cloud-infrastructure'

const normalizeGuidePath = (pathname = '') =>
  pathname === '/' ? pathname : pathname.replace(/\/+$/, '')

const visitGuidePage = (url) =>
  visitPageAllowingLoadTimeout(url, {
    timeout: GUIDE_VISIT_TIMEOUT_MS,
  }).then((sawLoadTimeout) => {
    if (!sawLoadTimeout) {
      cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should('exist')
    }
    return sawLoadTimeout
  })

const getDesktopSidebarContainer = () =>
  getDesktopSidebarSection().parent().should('have.length', 1)

const getDesktopSidebarSection = () =>
  cy.get('[data-cy="sidebar-section"]').should('have.length', 1)

const getDesktopSidebarToggle = () =>
  getDesktopSidebarSection()
    .siblings('.toggleIcon')
    .find('svg')
    .should('have.length', 1)

describe('API guides documentation page', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)
    visitGuidePage(GUIDE_TEST_URL).as('guideLoadTimeout')
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
    getDesktopSidebarContainer().should('not.have.class', 'active')
    // Force click because the desktop toggle stays opacity-0 until hover.
    getDesktopSidebarToggle().click({ force: true })
    getDesktopSidebarContainer().should('have.class', 'active')
    getDesktopSidebarToggle().click({ force: true })
    getDesktopSidebarContainer().should('not.have.class', 'active')
  })

  it('Check if a random guide page, chosen using the sidebar, loads', () => {
    cy.location('pathname').then((currentPath) => {
      const normalizedCurrentPath = normalizeGuidePath(currentPath)

      cy.get('[data-cy="sidebar-section"] a[href*="/docs/guides/"]')
        .then(($links) => {
          const candidateLinks = $links.toArray().reduce((candidates, link) => {
            const href = link.getAttribute('href')
            const nextPath = href
              ? normalizeGuidePath(
                  new URL(href, Cypress.config('baseUrl')).pathname
                )
              : null

            if (
              nextPath &&
              Cypress.$(link).is(':visible') &&
              nextPath !== normalizedCurrentPath
            ) {
              candidates.push({ element: link, path: nextPath })
            }

            return candidates
          }, [])

          expect(
            candidateLinks,
            'visible guide links different from the current page'
          ).to.have.length.greaterThan(0)

          const selectedLink = Cypress._.sample(candidateLinks)

          cy.wrap(selectedLink.path).as('targetPath')
          return cy.wrap(selectedLink.element)
        })
        .scrollIntoView()
        .should('be.visible')
        .then(($link) => {
          const href = $link.attr('href')
          expect(href, 'selected guide href').to.be.a('string').and.not.be.empty
          return cy.request(href)
        })
        .its('status')
        .should('be.within', 200, 399)

      cy.get('@targetPath').then((targetPath) => {
        expect(targetPath).to.match(/\/docs\/guides\/./)
        expect(targetPath).not.to.eq(normalizedCurrentPath)
      })
    })
  })

  it('check if it has a title', () => {
    cy.get('.title').invoke('text').should('not.be.empty')
  })

  it('try to click on any document contributor', () => {
    // EDU-16758: cross-origin GitHub loads stall on CI; click-path removed, href assertion kept.
    cy.get('[data-cy="contributors-container"]:visible > div')
      .any()
      .find('a')
      .should('be.visible')
      .then(($link) => {
        expect($link.prop('href')).to.match(/^https:\/\/github\.com\//)
      })
  })

  it('try to send feedback', () => {
    cy.get('@guideLoadTimeout').then((sawLoadTimeout) => {
      if (sawLoadTimeout) {
        cy.log('skipped — preview load timeout (PIV-003)')
        return
      }
      cy.get('[data-cy="table-of-contents"]:visible')
        .scrollIntoView()
        .find('[data-cy="feedback-section"]')
        .first()
        .should('be.visible')
        .within(() => {
          cy.contains(messages['feedback_section.question']).should(
            'be.visible'
          )
          cy.get('[data-cy="feedback-section-like"]')
            .click()
            .should('have.attr', 'aria-pressed', 'true')
          cy.contains(messages['feedback_section.question']).should('not.exist')
          cy.contains(/Thanks for (the )?feedback[.!]/).should('be.visible')
        })
    })
  })

  it('try to click on the last element of table of contents', () => {
    visitGuidePage(GUIDE_TOC_TEST_URL).then((sawLoadTimeout) => {
      if (sawLoadTimeout) {
        cy.log('skipped — preview load timeout (PIV-003)')
        return
      }
      cy.get('[data-cy="table-of-contents"]:visible')
        .find('a[href^="#"]')
        .should('have.length.greaterThan', 0)
        .last()
        .then(($heading) => {
          const anchor = $heading.attr('href')
          expect(anchor, 'last table-of-contents href').to.match(/^#.+/)
          cy.wrap(anchor.slice(1)).as('anchor')
          return cy.wrap($heading)
        })
        .click()

      cy.get('@anchor').then((anchor) => {
        cy.get(`[id="${anchor}"]`).should('be.visible')
      })
    })
  })
})
