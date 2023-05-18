/// <reference types="cypress" />

import { writeLog } from '../support/functions'

function isButtonActive(index) {
  cy.get('.css-1450tp')
    .eq(index)
    .find('button')
    .should('have.css', 'color', 'rgb(215, 29, 85)')
}

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
    cy.wait(6000)
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.task('getUrl').then((url) => {
        writeLog(`${this.currentTest.title} (${url})`)
      })
    }
  })

  it('Check if a random guide page, chosen using the sidebar, loads', () => {
    cy.get('.toggleIcon')
      .scrollIntoView({ offset: { top: -100 } })
      .should('not.be.visible')

    cy.get('.css-1450tp')
      .anyWithIndex()
      .then(([category, index]) => {
        cy.wrap(index).as('idx')
        return cy.wrap(category)
      })
      .scrollIntoView()
      .find('button')
      .should('be.visible')
      .then(($btn) => {
        $btn.trigger('click')
      })

    cy.get('@idx').then((idx) => {
      isButtonActive(idx)

      cy.get('.css-1450tp')
        .eq(idx + 1)
        .find('button')
        .scrollIntoView()
        .should('be.visible')
        .then(($btn) => {
          $btn.trigger('click')
        })

      isButtonActive(idx + 1)

      cy.get('.css-1450tp')
        .eq(idx + 2)
        .find('a')
        .scrollIntoView()
        .should('be.visible')
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
