import getGithubFileWithFallback from './getGithubFileWithFallback'

export default async function getGithubFile(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  return getGithubFileWithFallback(owner, repo, ref, path)
}
