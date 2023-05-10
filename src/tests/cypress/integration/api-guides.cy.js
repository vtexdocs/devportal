/// <reference types="cypress" />
import { writeLog } from '../support/functions'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()
describe('API guides documentation page', () => {
  before(() => {
    cy.task('setUrl', '/docs/guides')
    cy.writeFile('cypress.log', `#API guides documentation page#\n`, {
      flag: 'a+',
    })
  })

  beforeEach(() => {
    cy.task('getUrl').then((url) => cy.visit(url))
    cy.viewport(1366, 768)
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.task('getUrl').then((url) => {
        writeLog(`${this.currentTest.title} (${url})`)
      })
    }
  })

  it('Check if the sidebar collapse button works', () => {
    cy.get('.toggleIcon')
      .scrollIntoView({ offset: { top: -100 } })
      .should('not.be.visible')
      .click()
    cy.get('[data-cy="sidebar-section"]').should('not.be.visible')
    cy.get('.toggleIcon')
      .scrollIntoView({ offset: { top: -100 } })
      .should('be.visible')
      .click()
    cy.get('[data-cy="sidebar-section"]').should('be.visible')
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
    cy.get('[data-cy="contributors-container"]:visible > div')
      .any()
      .find('a')
      .should('be.visible')
      .click()

    cy.origin('https://github.com/', () => {
      cy.location('href').should('match', /github/)
    })
  })

  it('try to send feedback', () => {
    cy.visit('/docs/guides/brands')

    cy.get('[data-cy="feedback-section"]').scrollIntoView()

    cy.get('[data-cy="feedback-section"] > div')
      .first()
      .invoke('text')
      .should('equal', messages['feedback_section.question'])

    cy.get('[data-cy="feedback-section-like"]').click()

    cy.get('[data-cy="feedback-modal"]')
      .scrollIntoView()
      .children()
      .first()
      .scrollIntoView()
      .should('be.visible')
      .invoke('text')
      .should('equal', messages['feedback_modal.title'])

    cy.get('[data-cy="feedback-modal"]').find('textarea').type('cypress-test')

    cy.get('[data-cy="feedback-modal"]')
      .find('button')
      .then((sendFeedbackButton) => {
        cy.wrap(sendFeedbackButton)
          .invoke('text')
          .should('equal', 'Send Feedback')
        return cy.wrap(sendFeedbackButton)
      })
      .click()

    cy.get('[data-cy="feedback-section"] > div')
      .first()
      .invoke('text')
      .should('equal', messages['feedback_section.response'])
  })

  it('try to click on the last element of table of contents', () => {
    if (Cypress.$('[data-cy="table-of-contents"]').children().length > 0) {
      cy.get('h2')
        .its('length')
        .then((length) => {
          cy.get('[data-cy="table-of-contents"]:visible > div').should(
            'have.length',
            length
          )
        })

      cy.get('[data-cy="table-of-contents"]:visible > div')
        .last()
        .then((heading) => {
          const anchor = heading.find('a').attr('href')
          cy.wrap(anchor.substring(anchor.indexOf('#') + 1)).as('anchor')
          return cy.wrap(heading)
        })
        .click()

      cy.get('@anchor').then((anchor) => {
        cy.get(`[id=${anchor}]`).should('be.visible')
      })
    } else {
      cy.log('The table is empty')
    }
  })
})
