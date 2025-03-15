import React from 'react'
import { mount } from 'cypress/react18'
import Tooltip from '../../../components/tooltip'
import { ThemeProvider } from '@vtex/brand-ui'

describe('Tooltip Component', () => {
  beforeEach(() => {
    cy.viewport(800, 600)
  })

  afterEach(() => {
    // Force cleanup any lingering tooltips
    cy.get('body').trigger('mouseout', { force: true })
  })

  it('shows and hides tooltip on hover', () => {
    mount(
      <ThemeProvider>
        <Tooltip label="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      </ThemeProvider>
    )

    // Initially no tooltip
    cy.contains('Test tooltip').should('not.exist')

    // Show tooltip
    cy.get('button').trigger('mouseover')
    cy.contains('Test tooltip').should('be.visible')

    // Hide tooltip
    cy.get('button').trigger('mouseout')
    // Force a repaint by triggering mousemove elsewhere
    cy.get('body').trigger('mousemove', { clientX: 0, clientY: 0 })
    cy.contains('Test tooltip').should('not.exist')
  })

  it('renders children correctly', () => {
    mount(
      <ThemeProvider>
        <Tooltip label="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      </ThemeProvider>
    )

    cy.get('button').should('exist').and('have.text', 'Hover me')
  })

  it('applies different placement positions', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const

    placements.forEach((placement) => {
      mount(
        <ThemeProvider>
          <Tooltip label="Test tooltip" placement={placement}>
            <button>Hover me</button>
          </Tooltip>
        </ThemeProvider>
      )

      cy.get('button').trigger('mouseover')
      cy.contains('Test tooltip').should('be.visible')

      cy.get('button').trigger('mouseout')
      cy.get('body').trigger('mousemove', { clientX: 0, clientY: 0 })
      cy.contains('Test tooltip').should('not.exist')
    })
  })

  it('renders as card when isCard prop is true', () => {
    mount(
      <ThemeProvider>
        <Tooltip label="Card tooltip" isCard>
          <button>Hover for card</button>
        </Tooltip>
      </ThemeProvider>
    )

    cy.get('button').trigger('mouseover')

    cy.contains('Card tooltip')
      .should('be.visible')
      .parent()
      .should('have.css', 'width')
      .and('not.eq', '0px')

    cy.get('button').trigger('mouseout')
  })

  it('applies custom styles through sx prop', () => {
    mount(
      <ThemeProvider>
        <Tooltip
          label="Styled tooltip"
          sx={{ backgroundColor: 'rgb(255, 0, 0)' }}
        >
          <button>Hover for styled tooltip</button>
        </Tooltip>
      </ThemeProvider>
    )

    cy.get('button').trigger('mouseover')

    cy.contains('Styled tooltip')
      .should('be.visible')
      .parent()
      .should('have.css', 'background-color')
      .and('not.eq', 'rgba(0, 0, 0, 0)')

    cy.get('button').trigger('mouseout')
  })
})
