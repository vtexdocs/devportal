/// <reference types="cypress" />

describe('Catalog API', () => {
  beforeEach(() => {
    cy.visit('/docs/api-reference/catalog#overview')
  })

  it('API search', () => {
    const typedText = 'Create SKU Service Value'

    cy.getRapidocElement('#nav-bar-search').type(`${typedText}{enter}`)

    cy.getRapidocElement('.nav-scroll').children('div').should('have.length', 5)

    cy.getRapidocElement('.nav-scroll')
      .children('.nav-bar-tag-and-paths')
      .should('have.length', 1)
      .children('div')
      .should('have.length', 2)

    cy.getRapidocElement('.nav-scroll')
      .find('.nav-bar-tag-and-paths > div')
      .eq(0)
      .should('contain', 'SKU Service Value')

    cy.getRapidocElement('.nav-scroll')
      .find('.nav-bar-tag-and-paths > div')
      .eq(1)
      .contains(typedText)
      .click()

    cy.getRapidocElement('h2').should('contain', `${typedText}`)
  })
})
