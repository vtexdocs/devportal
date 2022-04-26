/// <reference types="cypress" />

describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Documentation categories', () => {
    cy.get('.css-1z6gvg a').should('have.length', 5)
    cy.get('.css-1z6gvg a').eq(0).click()
    cy.url().should('include', '/docs/api-guides')
  })

  it('Docs dropdown menu', () => {
    cy.viewport(1200, 660)
    cy.get('.css-zh4k82').click()

    cy.get('.css-zlwkgn').eq(0).contains('API Guides')
    cy.get('.css-zlwkgn').eq(0).click()

    cy.url().should('include', '/docs/api-guides')
  })

  it('Search', () => {
    const typedText = 'SKU'

    cy.viewport(1200, 660)
    cy.get('.searchComponent').type(typedText).type('{enter}')
    cy.url().should('include', `/search?keyword=${typedText}`)
  })
})
