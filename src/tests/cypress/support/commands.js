// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
  cy.wrap(subject).then((elementList) => {
    elementList = elementList.jquery ? elementList.get() : elementList
    elementList = Cypress._.sampleSize(elementList, size)
    elementList = elementList.length > 1 ? elementList : elementList[0]
    cy.wrap(elementList)
  })
})

Cypress.Commands.add('randomize', { prevSubject: 'element' }, (subject) => {
  // let index = 0
  cy.wrap(subject).then((obj) => {
    cy.wrap(obj)
      // .should('have.length.gt', 2)
      .its('length')
      .then((size) => Cypress._.random(0, size - 1))
      .then((randomIndex) => {
        // cy.log('randomIndex', randomIndex)
        // index = randomIndex
        return cy.wrap([obj.eq(randomIndex), randomIndex])
      })
  })
  // cy.wrap(subject)
  //   .as('aloha')
  //   .should('have.length.gt', 2)
  //   .its('length')
  //   .then((size) => Cypress._.random(0, size - 1))
  //   .then((randomIndex) => {
  //     // cy.log('randomIndex', randomIndex)
  //     // index = randomIndex
  //     return cy.wrap([cy.get('@aloha').eq(randomIndex), randomIndex])
  //   })
  // cy.log('ih', cy.get('@aloha'))
  // return cy.wrap([cy.get('@aloha').eq(index), index])
})
