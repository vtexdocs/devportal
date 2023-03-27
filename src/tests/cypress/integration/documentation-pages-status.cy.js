/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import navigation from '../fixtures/navigation.json'

describe('Status of documentation pages', () => {
  before(() => {
    cy.writeFile('cypress.log', `#Status of documentation pages#\n`, {
      flag: 'a+',
    })
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      writeLog(this.currentTest.title)
    }
  })

  const visitDocumentationPages = (slugPrefix) => {
    const visitPages = ({ slug, type, children }) => {
      const page = `${slugPrefix}/${slug}`
      const prob = Cypress.env('testProbability') || 1.0
      const shouldVisitPage = Math.random() < prob

      if ((type === 'markdown' || type === 'openapi') && shouldVisitPage)
        it(`Checks page ${page}`, () => cy.visit(page))

      if (type !== 'openapi') children.forEach(visitPages)
      else if (shouldVisitPage) {
        let found = false
        let childIndex = -1
        let currChildren = children

        while (!found && currChildren.length > 0) {
          childIndex = Math.floor(Math.random() * currChildren.length)
          if (currChildren[childIndex].method) found = true
          else currChildren = currChildren[childIndex].children
        }

        if (found) {
          const { method, endpoint } = currChildren[childIndex]
          const endpointPage = `${page}#${method.toLowerCase()}-${endpoint}`
          it(`Checks page ${endpointPage}`, () => cy.visit(endpointPage))
        }
      }
    }

    return visitPages
  }

  navigation.navbar.forEach(({ slugPrefix, categories }) => {
    categories.forEach(
      visitDocumentationPages(
        slugPrefix.endsWith('/')
          ? slugPrefix.slice(0, slugPrefix.length - 1)
          : slugPrefix
      )
    )
  })
})
