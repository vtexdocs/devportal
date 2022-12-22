/* eslint-disable @typescript-eslint/no-explicit-any */
import octokit from 'utils/octokitConfig'

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
  const contributors: ContributorsType[] = []
  const response = await octokit.rest.repos.listCommits({
    owner,
    repo,
    sha: ref,
    path,
  })

  response.data.forEach((commitData: any) => {
    if (!contributors.find((e) => e.login === commitData.author.login)) {
      contributors.push({
        name: commitData.commit.author.name,
        login: commitData.author.login,
        avatar: commitData.author.avatar_url,
        userPage: commitData.author.html_url,
      })
    }
  })

  return contributors
}
