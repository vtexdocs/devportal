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
      let branchExists = false
      try {
        branchExists = !!(await getGithubBranch(
          'vtexdocs',
          'dev-portal-content',
          branch
        ))
      } catch (error) {
        console.error(
          `Preview branch "${branch}" was not found or is inaccessible:`,
          error
        )
      }
      if (!branchExists) {
        return res.status(404).json({
          error: `Branch "${branch}" was not found in vtexdocs/dev-portal-content`,
        })
      }
      res.setPreviewData({
        branch: `${branch}`,
      })
    }
    res.redirect('/')
  } else {
    // Relative callback keeps http/https aligned with NEXTAUTH_URL.
    // Encoding preserves ?branch= so it is not parsed as a separate query param.
    const callbackUrl = req.url ?? '/'
    res.redirect(
      `/api/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`
    )
  }
}
