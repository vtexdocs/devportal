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

interface CommitAuthor {
  login: string
  avatar_url: string
  html_url: string
}

interface CommitData {
  commit: {
    author: {
      name: string
    }
  }
  author: CommitAuthor
}

interface ListCommitsResponse {
  data: CommitData[]
}

export default async function getFileContributors(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<ContributorsType[]> {
  try {
    const contributors: ContributorsType[] = []
    const response = await retryWithRateLimit<ListCommitsResponse>(() =>
      octokit.rest.repos.listCommits({
        owner,
        repo,
        sha: ref,
        path,
      })
    )

    response.data.forEach((commitData) => {
      if (
        commitData?.author &&
        !contributors.find((e) => e.login === commitData.author.login)
      ) {
        contributors.push({
          name: commitData.commit.author?.name,
          login: commitData.author.login,
          avatar: commitData.author.avatar_url,
          userPage: commitData.author.html_url,
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
