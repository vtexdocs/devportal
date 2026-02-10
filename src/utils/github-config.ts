/**
 * GitHub API and repository configuration
 * All values can be overridden using environment variables
 */

export const githubConfig = {
  // Rate limiting and retry configuration
  maxRetries: Number(process.env.GITHUB_MAX_RETRIES || '5'),
  maxRetryDelay: Number(process.env.GITHUB_MAX_RETRY_DELAY || '60000'), // 60 seconds
  useExponentialBackoff: process.env.GITHUB_USE_EXP_BACKOFF !== 'false', // true by default
  defaultRetryDelay: Number(process.env.GITHUB_DEFAULT_RETRY_DELAY || '5000'), // 5 seconds

  // Default repository configuration
  defaultOrg: process.env.GITHUB_DEFAULT_ORG || 'vtexdocs',
  defaultRepo: process.env.GITHUB_DEFAULT_REPO || 'devportal',
  defaultBranch: process.env.GITHUB_DEFAULT_BRANCH || 'main',

  // OpenAPI schemas repository configuration (public)
  openapiOrg: process.env.GITHUB_OPENAPI_ORG || 'vtex',
  openapiRepo: process.env.GITHUB_OPENAPI_REPO || 'openapi-schemas',
  openapiBranch: process.env.GITHUB_OPENAPI_BRANCH || 'master',

  // OpenAPI schemas repository configuration (internal/private)
  openapiInternalOrg: process.env.GITHUB_OPENAPI_INTERNAL_ORG || 'vtex',
  openapiInternalRepo: process.env.GITHUB_OPENAPI_INTERNAL_REPO || 'openapi-schemas-internal',
  openapiInternalBranch: process.env.GITHUB_OPENAPI_INTERNAL_BRANCH || 'master',

  // API configuration
  appId: process.env.GITHUB_APPID,
  privateKey: process.env.GITHUB_PRIVATEKEY,
  installationId: process.env.GITHUB_INSTALLATIONID,

  // Cache settings
  cacheTTL: Number(process.env.GITHUB_CACHE_TTL || '3600'), // 1 hour in seconds
}
