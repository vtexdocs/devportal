import octokit from 'utils/octokitConfig'

export default async function getGithubFile(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  const response = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repo,
    path: path,
    ref: ref,
    mediaType: {
      format: 'raw',
    },
  }) // eslint-disable-line
  // @ts-ignore // eslint-disable-line
  return response.data // eslint-disable-line
}
