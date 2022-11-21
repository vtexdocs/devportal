/// <reference types="cypress" />

describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Documentation categories', () => {
    cy.get('[data-cy="documentation-section-card-list"] a')
      .should('have.length', 5)
      .eq(0)
      .click()
    cy.url().should('include', '/docs/api-guides')
  })

  it('Docs dropdown menu', () => {
    cy.viewport(1200, 660)
    cy.get('[data-cy="docs-dropdown"]').click()

    cy.get('[data-cy="dropdown-menu-first-section"] a')
      .eq(0)
      .contains('API Guides')
      .click()

    cy.url().should('include', '/docs/api-guides')
  })
})
