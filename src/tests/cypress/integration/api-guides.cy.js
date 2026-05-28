/// <reference types="cypress" />
import { writeLog } from '../support/functions'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()
const GUIDE_VISIT_TIMEOUT_MS = 30000
const GUIDE_TEST_URL = '/docs/guides/integration-flow'

const visitGuidePage = (url) => {
  // Netlify previews sometimes never fire `load`; 30 s keeps this spec under the CI fail-fast budget.
  cy.visit(url, {
    retryOnNetworkFailure: true,
    retryOnStatusCodeFailure: true,
    timeout: GUIDE_VISIT_TIMEOUT_MS,
  })
  // 10 s: fail-fast guard so a stalled visit doesn't consume the full CI budget (EDU-16758).
  cy.get('[data-cy="sidebar-section"]', { timeout: 10000 }).should('exist')
}

const getDesktopSidebarToggle = () =>
  cy
    .get('[data-cy="sidebar-section"]:visible')
    .siblings('.toggleIcon')
    .should('have.length', 1)

describe('API guides documentation page', () => {
  before(() => {
    cy.task('setUrl', GUIDE_TEST_URL)
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.task('getUrl').then((url) => visitGuidePage(url))
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
    cy.get('[data-cy="sidebar-section"]:visible').should('be.visible')
    // Force click because the desktop toggle stays opacity-0 until hover.
    getDesktopSidebarToggle().click({ force: true })
    cy.get('[data-cy="sidebar-section"]').should('not.be.visible')
    getDesktopSidebarToggle().click({ force: true })
    cy.get('[data-cy="sidebar-section"]:visible').should('be.visible')
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
        .then((element) => {
          const hasButton = element.find('button').length
          cy.wrap(element.find('button').length).as('hasButton')
          if (hasButton) return cy.wrap(element).find('button')
          return cy.wrap(element).find('a')
        })
        .click({ force: true })

      cy.get('@hasButton').then((hasButton) => {
        if (hasButton) {
          cy.get('.css-1450tp')
            .eq(idx + 2)
            .find('a')
            .click({ force: true })
        }
      })
    })

    cy.url({ timeout: 10000 })
      .should('match', /(\/guides\/.)/)
      .then((url) => cy.task('setUrl', url))
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
    visitGuidePage(GUIDE_TEST_URL)

    cy.get('[data-cy="table-of-contents"]:visible')
      .scrollIntoView()
      .find('[data-cy="feedback-section"]')
      .first()
      .should('be.visible')
      .within(() => {
        cy.contains(messages['feedback_section.question']).should('be.visible')
        cy.get('[data-cy="feedback-section-like"]')
          .click()
          .should('have.attr', 'aria-pressed', 'true')
        cy.contains(messages['feedback_section.question']).should('not.exist')
        cy.contains(/Thanks for (the )?feedback[.!]/).should('be.visible')
      })
  })

  it('try to click on the last element of table of contents', () => {
    visitGuidePage(GUIDE_TEST_URL)

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
