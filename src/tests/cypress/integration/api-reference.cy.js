/// <reference types="cypress" />

import { filterSidebarItems } from '../support/functions'

describe('API reference documentation page', () => {
  before(() => {
    cy.task('setUrl', '/docs/api-reference')
  })

  beforeEach(() => {
    cy.task('getUrl').then((url) => cy.visit(url))
    cy.viewport(1366, 768)
  })

  it('Check if an random endpoint page, chosen using the sidebar, load and have a non empty title', () => {
    cy.get('.sidebar-component > div')
      .as('entireList')
      .filter(filterSidebarItems)
      .anyWithIndex()
      .then(([category, index]) => {
        cy.wrap(index).as('idx')
        return cy.wrap(category)
      })
      .find('a')
      .click({ force: true })

    cy.get('@idx', { timeout: 1000 }).then((idx) => {
      cy.get('.sidebar-component > div', { timeout: 1000 })
        .eq(idx * 3 + 1)
        .find('.sidebar-component > div')
        .filter(filterSidebarItems)
        .anyWithIndex()
        .then(([element, index]) => {
          cy.wrap(index).as('subItemsIdx')
          cy.wrap(element.next()).as('aff')
          return cy.wrap(element.find('button'))
        })
        .should('be.visible')
        .click({ force: true })
    })

    cy.get('@idx', { timeout: 1000 }).then((categoryIdx) => {
      cy.get('@subItemsIdx', { timeout: 1000 }).then((subcategoryIdx) => {
        cy.get('.sidebar-component > div')
          .should('be.visible')
          .eq(categoryIdx * 3 + 1)
          .find('.sidebar-component > div')
          .eq(subcategoryIdx * 2 + 1)
          .find('.sidebar-component > div')
          .filter(filterSidebarItems)
          .anyWithIndex()
          .then(([endpoint]) => {
            return cy.wrap(endpoint)
          })
          .find('a')
          .click()
      })
    })

    cy.get('rapi-doc')
      .shadow()
      .within(() => {
        cy.get('h2').invoke('text').should('not.be.empty')
      })

    cy.url().then((url) => cy.task('setUrl', url))
  })

  it('Check, in the same endpoint page, if the response card is clickable and, after, if the response modal is visible', () => {
    cy.get('rapi-doc')
      .shadow()
      .within(() => {
        cy.get('api-response')
          .shadow()
          .within(() => {
            cy.get('.resp-box').should('be.visible').click()
            cy.get('.resp-modal-content').should('be.visible')
            cy.get('.close-button').click()
          })
      })
  })

  it('check if the copy component works fine', () => {
    cy.get('rapi-doc')
      .shadow()
      .within(() => {
        cy.get('content-copy-button')
          .shadow()
          .within(() => {
            cy.get('.content-copy-container')
              .first()
              .children()
              .eq(0)
              .as('input2Copy')
              .click()

            cy.get('@input2Copy').invoke('text').as('defaultText')

            cy.get('@defaultText').then((text) => {
              cy.task('getClipboard').should('eq', text)
            })
          })
      })
  })
})
