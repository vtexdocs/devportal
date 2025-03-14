import octokit from 'utils/octokitConfig'
import { getLogger } from 'utils/logging/log-util'
import {
  fetchFromRawGithub,
  isRateLimitError,
  retryWithRateLimit,
} from './github-utils'

interface GetContentResponse {
  data: string
}

export default async function getGithubFile(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  const logger = getLogger('getGithubFile')

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
  } catch (error: any) {
    if (isRateLimitError(error)) {
      logger.info(
        'GitHub API rate limit exceeded, falling back to raw.githubusercontent.com'
      )
      return fetchFromRawGithub(owner, repo, ref, path)
    }
    throw error
  }
}
