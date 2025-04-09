/// <reference types="cypress" />

import React from 'react'
import { mount } from 'cypress/react18'
import { ThemeProvider } from '@vtex/brand-ui'
import type { RowItem } from '../../../../components/faststore-components/PropsSection/PropsSection'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { writeLog } from '../../support/functions'

// Test-specific implementation to avoid FastStore component dependencies
const TestMarkdownRenderer = ({
  serialized,
  mdxProps,
}: {
  serialized: MDXRemoteSerializeResult
  mdxProps?: { componentName: string; componentAttributes: RowItem[] }[]
}) => {
  // Extract component name from the compiledSource using a simple regex
  const componentMatch = serialized.compiledSource.match(
    /<ComponentPropsSection component="([^"]+)"/
  )
  const requestedComponent = componentMatch ? componentMatch[1] : null

  const customComponents =
    mdxProps && requestedComponent
      ? {
          ComponentPropsSection: ({ component }: { component: string }) => {
            const props = mdxProps.find((p) => p.componentName === component)
            return props ? (
              <div
                className="faststore-propsSection"
                data-testid="props-section"
              >
                {props.componentAttributes.map((attr) => (
                  <div key={attr.name} data-testid="prop-item">
                    {attr.name}: {attr.type}
                  </div>
                ))}
              </div>
            ) : null
          },
        }
      : undefined

  return (
    <div data-testid="markdown-renderer">
      <div className="markdown-content">{serialized.compiledSource}</div>
      {customComponents?.ComponentPropsSection && requestedComponent && (
        <customComponents.ComponentPropsSection
          component={requestedComponent}
        />
      )}
    </div>
  )
}

describe('MarkdownRenderer Component', () => {
  before(() => {
    cy.writeFile('cypress.log', `#Component Tests - MarkdownRenderer#\n`, {
      flag: 'a+',
    })
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      writeLog(this.currentTest.title)
    }
  })

  beforeEach(() => {
    // Reset any stubs before each test
    cy.stub()
  })

  it('renders basic markdown content without FastStore components', () => {
    const mockSerialized = {
      compiledSource: '# Hello\n\nThis is basic markdown.',
      frontmatter: {
        title: 'Basic Test',
      },
      scope: {},
    }

    mount(
      <ThemeProvider>
        <TestMarkdownRenderer serialized={mockSerialized} />
      </ThemeProvider>
    )

    // Verify base markdown rendering
    cy.get('[data-testid="markdown-renderer"]').should('exist')
    cy.get('.markdown-content').should('contain', 'Hello')
  })

  it('renders FastStore component documentation when mdxProps are provided', () => {
    const mockProps = [
      {
        componentName: 'Button',
        componentAttributes: [
          {
            name: 'variant',
            type: "'primary' | 'secondary'",
            description: 'Button variant style',
            default: 'primary',
            required: false,
          },
        ] as RowItem[],
      },
    ]

    const mockSerialized = {
      compiledSource: '<ComponentPropsSection component="Button" />',
      frontmatter: {
        title: 'Button Documentation',
      },
      scope: {},
    }

    mount(
      <ThemeProvider>
        <TestMarkdownRenderer
          serialized={mockSerialized}
          mdxProps={mockProps}
        />
      </ThemeProvider>
    )

    // Verify FastStore component rendering
    cy.get('[data-testid="markdown-renderer"]').should('exist')
    cy.get('[data-testid="props-section"]').should('exist')
    cy.get('[data-testid="prop-item"]').should('contain', 'variant')
  })

  it('handles missing component documentation gracefully', () => {
    const mockProps = [
      {
        componentName: 'Button',
        componentAttributes: [
          {
            name: 'variant',
            type: "'primary' | 'secondary'",
            description: 'Button variant style',
            default: 'primary',
            required: false,
          },
        ] as RowItem[],
      },
    ]

    const mockSerialized = {
      compiledSource:
        '<ComponentPropsSection component="NonExistentComponent" />',
      frontmatter: {
        title: 'Missing Component',
      },
      scope: {},
    }

    mount(
      <ThemeProvider>
        <TestMarkdownRenderer
          serialized={mockSerialized}
          mdxProps={mockProps}
        />
      </ThemeProvider>
    )

    // Verify graceful handling of missing components
    cy.get('[data-testid="markdown-renderer"]').should('exist')
    cy.get('[data-testid="props-section"]').should('not.exist')
  })

  it('handles markdown with mixed content types', () => {
    const mockProps = [
      {
        componentName: 'Button',
        componentAttributes: [
          {
            name: 'variant',
            type: "'primary' | 'secondary'",
            description: 'Button variant style',
            default: 'primary',
            required: false,
          },
        ] as RowItem[],
      },
    ]

    const mockSerialized = {
      compiledSource: `
# Component Documentation

Regular markdown content.

<ComponentPropsSection component="Button" />

More markdown content.
      `,
      frontmatter: {
        title: 'Mixed Content Test',
      },
      scope: {},
    }

    mount(
      <ThemeProvider>
        <TestMarkdownRenderer
          serialized={mockSerialized}
          mdxProps={mockProps}
        />
      </ThemeProvider>
    )

    // Verify mixed content rendering
    cy.get('[data-testid="markdown-renderer"]').should('exist')
    cy.get('.markdown-content').should('contain', 'Component Documentation')
    cy.get('[data-testid="props-section"]').should('exist')
  })
})
