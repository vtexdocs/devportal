const NON_ESSENTIAL_THIRD_PARTY_GETS = [
  'https://www.googletagmanager.com/**',
  'https://www.google-analytics.com/**',
  'https://cdn.jsdelivr.net/**',
  'https://community.vtex.com/**',
  'https://developers.vtex.com/**',
  'https://docs.google.com/**',
  'https://avatars.githubusercontent.com/**',
  'https://github.com/**',
  'https://help.vtex.com/**',
  'https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/**',
  '/_next/image*',
]

export const isRemotePageLoadTimeout = (error) =>
  error.message.includes('Timed out after waiting') &&
  error.message.includes('remote page to load')

export const visitPageAllowingLoadTimeout = (
  url,
  {
    retryOnNetworkFailure = true,
    retryOnStatusCodeFailure = true,
    timeout,
  } = {}
) => {
  let sawLoadTimeout = false

  // Detaching inside the handler is what prevents a leak: a swallowed load
  // timeout aborts the command queue, so the happy-path cleanup below never
  // runs. Removing the handler here guarantees it can't bleed into later tests.
  const failHandler = (error) => {
    Cypress.off('fail', failHandler)

    if (isRemotePageLoadTimeout(error)) {
      sawLoadTimeout = true
      return false
    }

    throw error
  }

  Cypress.on('fail', failHandler)

  cy.visit(url, {
    retryOnNetworkFailure,
    retryOnStatusCodeFailure,
    timeout,
  })

  return cy.then(() => {
    Cypress.off('fail', failHandler)
    return sawLoadTimeout
  })
}

beforeEach(() => {
  // Preview E2E is sensitive to slow third-party assets that are unrelated to the docs UI under test.
  NON_ESSENTIAL_THIRD_PARTY_GETS.forEach((url) => {
    cy.intercept('GET', url, {
      statusCode: 204,
      body: '',
    })
  })
})
