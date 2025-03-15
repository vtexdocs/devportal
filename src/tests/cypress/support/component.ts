import './commands'
import { mount } from 'cypress/react18'
import 'cypress-real-events'

// Augment the Cypress namespace to include type definitions for
// your custom command using module declaration merging
declare module 'cypress' {
  interface Chainable {
    mount: typeof mount
  }
}

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)
