import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import octokit from 'utils/octokitConfig'
import { retryWithRateLimit } from 'utils/github-utils'
import { SessionStrategy } from 'next-auth/core/types'

import { authOptions } from './auth/[...nextauth]'

// Add caching to reduce API calls to GitHub
const branchCache = new Map()
const BRANCH_CACHE_TTL = 5 * 60 * 1000 // 5 minutes

async function getGithubBranch(org: string, repo: string, branch: string) {
  const cacheKey = `${org}/${repo}/${branch}`

  // Check cache first
  if (branchCache.has(cacheKey)) {
    const cachedData = branchCache.get(cacheKey)
    if (Date.now() - cachedData.timestamp < BRANCH_CACHE_TTL) {
      return cachedData.data
    }
  }

  // If not in cache or expired, fetch from GitHub
  const response = await retryWithRateLimit(() =>
    octokit.rest.repos.getBranch({
      owner: org,
      repo,
      branch,
    })
  )

  // Cache the result
  branchCache.set(cacheKey, {
    timestamp: Date.now(),
    data: response,
  })

  return response
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only check for authentication if we need to (when branch parameter is present)
  const branch = req.query.branch ? (req.query.branch as string) : 'main'

  // Only authenticate for non-main branches to reduce authentication checks
  const needsAuthentication = branch !== 'main'

  let isAuthenticated = false
  if (needsAuthentication) {
    try {
      // Using getServerSession correctly by passing it the properly typed options
      const session = await getServerSession(req, res, {
        ...authOptions,
        session: {
          strategy: 'jwt' as SessionStrategy,
          maxAge: 30 * 24 * 60 * 60, // 30 days
        },
      })
      isAuthenticated = !!session
    } catch (error) {
      console.error('Authentication error:', error)
      isAuthenticated = false
    }
  } else {
    isAuthenticated = true // Default to authenticated for main branch
  }

  if (isAuthenticated) {
    if (req.query.branch) {
      let branchExists
      try {
        branchExists = await getGithubBranch(
          'vtexdocs',
          'dev-portal-content',
          branch
        )
      } catch {
        branchExists = false
      }
      if (branchExists) {
        const customPreviewData = {
          branch: `${branch}`,
        }
        res.setPreviewData(customPreviewData)
      }
    }
    res.redirect('/')
  } else {
    const protocol = process.env.BUILD_ENV === 'dev' ? 'http' : 'https'
    const callbackUrl = `${protocol}://${req.headers.host}${req.url}`
    res.redirect(`/api/auth/signin?callbackUrl=${callbackUrl}`)
  }
}
