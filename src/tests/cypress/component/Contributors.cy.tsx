/// <reference types="cypress" />
import Contributors from '../../../components/contributors'
import * as messages from '../../../utils/get-messages'

describe('Contributors Component', () => {
  const mockContributors = [
    {
      name: 'John Doe',
      login: 'johndoe',
      avatar: 'https://github.com/johndoe.png',
      userPage: 'https://github.com/johndoe'
    },
    {
      name: 'Jane Smith',
      login: 'janesmith',
      avatar: 'https://github.com/janesmith.png',
      userPage: 'https://github.com/janesmith'
    }
  ]

  beforeEach(() => {
    const mockMessages = {
      'api_guide_documentation_page_contributors.title': 'Contributors',
      'api_guide_documentation_page_contributors.toggleText': 'Show less'
    }
    cy.stub(messages, 'getMessages').returns(mockMessages)
    cy.mount(<Contributors contributors={mockContributors} />)
  })

  it('renders all contributors', () => {
    cy.get('[data-cy="contributors-container"]').should('exist')
    cy.get('[data-cy="contributors-container"] a').should('have.length', 2)
  })

  it('displays contributor avatars', () => {
    cy.get('[data-cy="contributors-container"] img').should('have.length', 2)
    cy.get('[data-cy="contributors-container"] img').first()
      .should('have.attr', 'alt', 'Photo of the contributor')
      .and('have.attr', 'src').should('include', 'johndoe.png')
  })

  it('links to contributor GitHub profiles', () => {
    cy.get('[data-cy="contributors-container"] a').first()
      .should('have.attr', 'href', 'https://github.com/johndoe')
  })
})