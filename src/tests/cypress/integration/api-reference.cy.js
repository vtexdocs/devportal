/// <reference types="cypress" />

import { filterSidebarItems } from '../support/functions'

describe('API reference documentation page', () => {
  before(() => {
    cy.task('setUrl', '/docs/api-reference')
  })

  beforeEach(() => {
    cy.viewport(1366, 768)
    cy.task('getUrl').then((url) => cy.visit(url))
  })

  it('Check if an random endpoint page, chosen using the sidebar, load and have a non empty title', () => {
    cy.get('.sidebar-component').first().as('entireList')
    cy.get('@entireList')
      .children()
      .filter(filterSidebarItems)
      .anyWithIndex()
      .then(([category, index]) => {
        cy.wrap(index).as('idx')
        return cy.wrap(category)
      })
      .find('a')
      .click({ force: true })

    cy.get('@idx').then((idx) => {
      cy.get('@entireList', { timeout: 1000 })
        .children()
        .eq(idx * 3 + 1)
        .find('.sidebar-component > div')
        .filter(filterSidebarItems)
        .anyWithIndex()
        .then(([element, subItemidx]) => {
          cy.wrap(subItemidx).as('subItemsIdx')
          return cy.wrap(element.find('button'))
        })
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true })
    })

    cy.get('@idx').then((categoryIdx) => {
      cy.get('@subItemsIdx').then((subcategoryIdx) => {
        cy.get('@entireList', { timeout: 6000 })
          .children()
          .eq(categoryIdx * 3 + 1)
          .find('.sidebar-component > div', { timeout: 6000 })
          .eq(subcategoryIdx * 2 + 1)
          .find('.sidebar-component > div', { timeout: 6000 })
          .filter(filterSidebarItems)
          .anyWithIndex()
          .then(([endpoint]) => {
            return cy.wrap(endpoint)
          })
          .find('a')
          .scrollIntoView()
          .should('be.visible')
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
            cy.get('.resp-box')
              .first()
              .scrollIntoView()
              .should('be.visible')
              .click()
            cy.get('.resp-modal-content').first().should('be.visible')
            cy.get('.close-button').first().click()
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
