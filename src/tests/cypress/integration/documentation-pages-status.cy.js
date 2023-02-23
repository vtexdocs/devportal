/// <reference types="cypress" />

import navigation from '../fixtures/navigation.json'

describe('Status of documentation pages', () => {
  const visitDocumentationPages = (slugPrefix) => {
    const visitPages = ({ slug, type, children }) => {
      const page = `${slugPrefix}/${slug}`
      if (type === 'markdown' || type === 'openapi')
        it(`Checks page ${page}`, () => cy.visit(page))

      children.forEach(visitPages)
    }

    return visitPages
  }

  navigation.navbar.forEach(({ slugPrefix, categories }) => {
    categories.forEach(visitDocumentationPages(slugPrefix))
  })
})
