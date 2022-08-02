/// <reference types="cypress" />

describe('Catalog API', () => {
  beforeEach(() => {
    cy.visit('/docs/api-reference/catalog')
  })

  it('Check rapidoc-mini', () => {
    const title = 'Get Product and SKU IDs'

    cy.get('rapi-doc-mini').shadow().find('.title').should('have.text', title)
  })
})
