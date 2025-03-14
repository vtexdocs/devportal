/* eslint-disable @typescript-eslint/no-explicit-any */
import octokit from 'utils/octokitConfig'
import { getLogger } from 'utils/logging/log-util'
import { isRateLimitError, retryWithRateLimit } from './github-utils'

const logger = getLogger('getFileContributors')

export interface ContributorsType {
  name: string
  login: string
  avatar: string
  userPage: string
}

export default async function getFileContributors(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<unknown> {
  try {
    const contributors: ContributorsType[] = []
    const response = await retryWithRateLimit(() =>
      octokit.rest.repos.listCommits({
        owner,
        repo,
        sha: ref,
        path,
      })
    )

    response.data.forEach((commitData: any) => {
      if (commitData?.author)
        if (!contributors.find((e) => e.login === commitData?.author?.login)) {
          contributors.push({
            name: commitData.commit.author?.name,
            login: commitData.author?.login,
            avatar: commitData.author?.avatar_url,
            userPage: commitData.author?.html_url,
          })
        }
    })

    return contributors
  } catch (error: any) {
    if (isRateLimitError(error)) {
      logger.info(
        'GitHub API rate limit exceeded for contributors request, returning empty list'
      )
      return [] // Return empty list when rate limited instead of failing
    }
    throw error
  }
}
