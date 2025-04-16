import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import octokit from '../../../utils/octokitConfig'
import { retryWithRateLimit } from '../../../utils/github-utils'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        await retryWithRateLimit(() =>
          octokit.rest.repos.checkCollaborator({
            owner: 'vtexdocs',
            repo: 'dev-portal-content',
            username: profile.login,
          })
        )
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },
  },
  // Add session cache and optimization settings
  session: {
    // Use JWT strategy for reduced database load
    strategy: 'jwt',
    // Extend the maxAge of the session to reduce refresh frequency
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // JWT configuration with longer lifetime
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
}

// Implement more aggressive request throttling for the session endpoint
const sessionEndpointCache = new Map()
const SESSION_CACHE_TTL = 5 * 60 * 1000 // 5 minutes (increased from 1 minute)
const PUBLIC_PAGES_PATTERN = /^\/(?!editor|api\/preview).*/ // Match all pages except /editor/* and /api/preview

async function authHandler(req, res) {
  // Add a Vary header to ensure caching works correctly
  res.setHeader('Vary', 'Cookie, Authorization')

  // For public pages (non-editor, non-preview API), return a default unauthenticated session
  // to avoid unnecessary session checks for public content
  const referer = req.headers.referer || ''
  const isPublicPageRequest = PUBLIC_PAGES_PATTERN.test(
    new URL(referer, 'https://example.com').pathname
  )

  if (
    req.method === 'GET' &&
    req.query.nextauth?.includes('session') &&
    isPublicPageRequest
  ) {
    // For public pages, return a standard unauthenticated response
    // This prevents serverless function calls for public page visits
    const defaultUnauthenticatedResponse = { user: null, expires: null }
    return res.status(200).json(defaultUnauthenticatedResponse)
  }

  // Only implement caching for GET /api/auth/session requests
  if (req.method === 'GET' && req.query.nextauth?.includes('session')) {
    const sessionKey =
      req.cookies['next-auth.session-token'] || 'unauthenticated'

    // Check if we have a cached response
    if (sessionEndpointCache.has(sessionKey)) {
      const cachedData = sessionEndpointCache.get(sessionKey)
      if (Date.now() - cachedData.timestamp < SESSION_CACHE_TTL) {
        // Return cached response if it's still valid
        // Add cache control headers for downstream caching
        res.setHeader('Cache-Control', 'private, max-age=300') // 5 min client cache
        return res.status(200).json(cachedData.data)
      }
    }

    // Process request with NextAuth
    const response = await NextAuth(authOptions)(req, res)

    // Cache the result if it's a completed response (not a redirect)
    if (
      res.statusCode === 200 &&
      res.hasHeader('content-type') &&
      res.getHeader('content-type').includes('application/json')
    ) {
      sessionEndpointCache.set(sessionKey, {
        timestamp: Date.now(),
        data: JSON.parse(JSON.stringify(response)), // Create a clean copy
      })
    }

    return response
  }

  // For all other auth endpoints, just pass through to NextAuth
  return NextAuth(authOptions)(req, res)
}

export default authHandler
