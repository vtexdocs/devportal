import octokit from 'utils/octokitConfig'
import { getLogger } from 'utils/logging/log-util'
import {
  fetchFromRawGithub,
  isRateLimitError,
  retryWithRateLimit,
  GitHubErrorResponse,
} from './github-utils'

const logger = getLogger('getGithubFileWithFallback')

interface GetContentResponse {
  data: string
}

export default async function getGithubFileWithFallback(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  try {
    const response = await retryWithRateLimit<GetContentResponse>(() =>
      octokit.rest.repos.getContent({
        owner,
        repo,
        path,
        ref,
        mediaType: {
          format: 'raw',
        },
      })
    )
    return response.data
  } catch (error) {
    const err = error as GitHubErrorResponse
    if (isRateLimitError(err)) {
      logger.info(
        'GitHub API rate limit exceeded, falling back to raw.githubusercontent.com'
      )
      return fetchFromRawGithub(owner, repo, ref, path)
    }

    // For other errors, try raw GitHub URL as fallback
    logger.info(
      `Octokit request failed, falling back to raw.githubusercontent.com: ${
        err.response?.data?.message || 'Unknown error'
      }`
    )
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`
    const response = await fetch(rawUrl)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch file from both Octokit and raw GitHub URL: ${path}`
      )
    }

    return response.text()
  }
}
