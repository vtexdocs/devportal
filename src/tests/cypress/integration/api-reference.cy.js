/// <reference types="cypress" />

import { writeLog } from '../support/functions'

describe('API reference documentation page', () => {
  before(() => {
    cy.task('setUrl', '/docs/api-reference')
    cy.writeFile('cypress.log', `#API reference documentation page#\n`, {
      flag: 'a+',
    })
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.task('getUrl').then((url) => cy.visit(url))
    cy.wait(10000)
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
