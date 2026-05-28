const NON_ESSENTIAL_THIRD_PARTY_GETS = [
  'https://www.googletagmanager.com/**',
  'https://www.google-analytics.com/**',
  'https://docs.google.com/**',
  'https://avatars.githubusercontent.com/**',
  'https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/**',
  '/_next/image*',
]

beforeEach(() => {
  // Preview E2E is sensitive to slow third-party assets that are unrelated to the docs UI under test.
  NON_ESSENTIAL_THIRD_PARTY_GETS.forEach((url) => {
    cy.intercept('GET', url, {
      statusCode: 204,
      body: '',
    })
  })
})
