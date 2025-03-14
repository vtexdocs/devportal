/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLogger } from 'utils/logging/log-util'
import octokit from 'utils/octokitConfig'

const logger = getLogger('github-utils')

// Sleep utility that works with async/await
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchFromRawGithub(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  logger.info(
    `Fetching from raw.githubusercontent.com: ${owner}/${repo}/${ref}/${path}`
  )
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`
  const response = await fetch(rawUrl)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from raw.githubusercontent.com: ${response.status} ${response.statusText}`
    )
  }

  return await response.text()
}

export interface GitHubErrorResponse {
  status?: number
  response?: {
    headers?: {
      'x-ratelimit-remaining'?: string
      'x-ratelimit-reset'?: string
    }
    data?: {
      message?: string
    }
  }
  name?: string
}

interface TreeResponse {
  data: {
    tree: Array<{
      path: string
      type: string
    }>
  }
}

export function isRateLimitError(error: GitHubErrorResponse): boolean {
  return (
    // Check for RateLimitError from throttling plugin
    error?.name === 'RateLimitError' ||
    // Check for direct API rate limit response
    (error?.status === 403 &&
      (error?.response?.headers?.['x-ratelimit-remaining'] === '0' ||
        (error?.response?.data?.message || '').includes(
          'API rate limit exceeded'
        )))
  )
}

function getRetryDelay(error: GitHubErrorResponse): number {
  // Try to get reset time from headers first
  const resetTime = error?.response?.headers?.['x-ratelimit-reset']
  if (resetTime) {
    const resetDate = new Date(Number(resetTime) * 1000)
    const now = new Date()
    const delayMs = resetDate.getTime() - now.getTime()
    return delayMs > 0 ? delayMs : 5000 // Use 5s if reset time is in the past
  }

  // Default delay of 5 seconds if we can't determine reset time
  return 5000
}

// Generic retry function for GitHub API requests that hit rate limits
export async function retryWithRateLimit<T>(
  operation: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  let retryCount = 0

  while (true) {
    try {
      return await operation()
    } catch (error) {
      if (isRateLimitError(error as GitHubErrorResponse)) {
        if (retryCount >= maxRetries) {
          throw new Error(
            `Maximum retries (${maxRetries}) exceeded for rate-limited request`
          )
        }

        const delayMs = getRetryDelay(error as GitHubErrorResponse)
        logger.info(
          `Rate limit hit, waiting ${delayMs / 1000}s before retry ${
            retryCount + 1
          }/${maxRetries}`
        )
        await sleep(delayMs)
        retryCount++
        continue
      }
      throw error
    }
  }
}

export async function getGithubTree(org: string, repo: string, ref: string) {
  return retryWithRateLimit<TreeResponse>(() =>
    octokit.request('GET /repos/{org}/{repo}/git/trees/{ref}?recursive=true', {
      org,
      repo,
      ref,
    })
  ).then((response) => response.data)
}
