/// <reference types="cypress" />

import { writeLog } from '../support/functions'
import { selectRandomPages } from '../../utils/select-pages.js'

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

  const pages = selectRandomPages({
    prob: Cypress.env('testProbability') || 1.0,
  })

  pages.forEach((page) => it(`Checks page ${page}`, () => cy.visit(page)))
})
