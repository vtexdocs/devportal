/// <reference types="cypress" />

describe('API reference documentation page', () => {
  beforeEach(() => {
    cy.visit('/docs/api-reference')
    cy.viewport(1366, 768)
  })

  // it.only('Navigating through sidebar element', () => {
  //   cy.get('.sidebar-component > div')
  //     .filter((index, sidebarElement) => {
  //       return (
  //         sidebarElement.childNodes.length > 0 &&
  //         sidebarElement.firstChild.tagName != 'HR'
  //       )
  //     })
  //     .any()
  //     .find('a')
  //     .click({ force: true })

  //   cy.get('rapi-doc')
  //     .shadow()
  //     .within(($list) => {
  //       $list.find('#api-title')
  //       cy.log(cy.get('#api-title'))
  //       cy.get('#api-title').invoke('text').should('not.be.empty')
  //     })
  // })

  function filterSidebarItems(index, sidebarElement) {
    return (
      sidebarElement.childNodes.length > 0 &&
      sidebarElement.firstChild.tagName != 'HR'
    )
  }

  it.only('try', () => {
    cy.get('.sidebar-component > div')
      .as('entireList')
      .filter(filterSidebarItems)
      .randomize()
      .then(([element, index]) => {
        cy.wrap(index).as('idx')
        return cy.wrap(element)
      })
      .find('a')
      .click({ force: true })

    cy.get('@idx', { timeout: 1000 }).then((idx) => {
      cy.get('.sidebar-component > div', { timeout: 1000 })
        .eq(idx * 3 + 1)
        .find('.sidebar-component > div')
        .filter(filterSidebarItems)
        .randomize()
        .then(([element, index]) => {
          cy.wrap(index).as('subItemsIdx')
          return cy.wrap(element.find('button'))
        })
        .should('be.visible')
        .click({ force: true })
    })
  })
})
