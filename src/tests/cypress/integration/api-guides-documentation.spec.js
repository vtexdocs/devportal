/// <reference types="cypress" />

describe('API guides documentation page', () => {
  beforeEach(() => {
    cy.visit('/docs/api-guides/clients')
  })

  it.only('Navigating through see-also-section suggestion', () => {
    cy.get('[data-cy="see-also-section"] a').should('have.length', 2)

    cy.get('[data-cy="see-also-section"] a')
      .eq(0)
      .contains('Billing Options')
      .click()

    cy.url().should('include', '/docs/api-guides/billing-options')
  })
})
