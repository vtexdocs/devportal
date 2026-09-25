import React from 'react'
import { mount } from 'cypress/react18'
import { DropdownMenu } from '@vtexdocs/components'
import { ThemeProvider } from '@vtex/brand-ui'
import {
  documentationData,
  adminData,
  updatesData,
} from '../../../utils/constants'
import { writeLog } from '../support/functions'

describe('DropdownMenu Component', () => {
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      writeLog({
        spec: Cypress.spec.name,
        title: this.currentTest.title,
        attempt: this.currentTest.currentRetry(),
        type: 'dom',
      })
    }
  })

  it('renders documentation and updates sections when not in editor mode', () => {
    mount(
      <ThemeProvider>
        <DropdownMenu sections={[documentationData, updatesData]} />
      </ThemeProvider>
    )

    // Check for container existence
    cy.get('[data-cy="dropdown-menu"]').should('exist')

    // Test first section (documentation)
    cy.get('[data-cy="dropdown-menu-first-section"]').within(() => {
      documentationData.forEach((card) => {
        cy.contains(card.title).should('exist')
        cy.contains(card.description).should('exist')
      })
    })

    // Test second section (updates)
    cy.get('[data-cy="dropdown-menu-second-section"]').within(() => {
      updatesData.forEach((card) => {
        cy.contains(card.title).should('exist')
        cy.contains(card.description).should('exist')
      })
    })
  })

  it('renders only admin section when in editor mode', () => {
    mount(
      <ThemeProvider>
        <DropdownMenu sections={[adminData]} />
      </ThemeProvider>
    )

    // Check for container existence
    cy.get('[data-cy="dropdown-menu"]').should('exist')

    // Test first section (admin)
    cy.get('[data-cy="dropdown-menu-first-section"]').within(() => {
      adminData.forEach((card) => {
        cy.contains(card.title).should('exist')
        cy.contains(card.description).should('exist')
      })
    })

    // Second section should not exist in editor mode
    cy.get('[data-cy="dropdown-menu-second-section"]').should('not.exist')
  })

  it('applies correct styles to containers', () => {
    mount(
      <ThemeProvider>
        <DropdownMenu sections={[documentationData, updatesData]} />
      </ThemeProvider>
    )

    // Check outer container styles
    cy.get('[data-cy="dropdown-menu"]')
      .parent()
      .should('have.css', 'position', 'absolute')
      .and('have.css', 'z-index', '10')

    // Check inner container styles
    cy.get('[data-cy="dropdown-menu"]')
      .should('be.visible')
      .and('have.css', 'overflow-y', 'scroll')
  })

  it('renders DocumentationCard components with correct props', () => {
    mount(
      <ThemeProvider>
        <DropdownMenu sections={[documentationData, updatesData]} />
      </ThemeProvider>
    )

    // Check if first documentation card links to correct URL
    const firstCard = documentationData[0]
    cy.contains(firstCard.title)
      .closest('a')
      .should('have.attr', 'href', firstCard.link)
  })
})
