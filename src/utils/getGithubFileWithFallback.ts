import octokit from 'utils/octokitConfig'

export default async function getGithubFileWithFallback(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  try {
    const response = (await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      ref,
      mediaType: {
        format: 'raw',
      },
    })) as { data: string }

    return response.data
  } catch (error) {
    // If Octokit request fails (including after retries), fallback to raw GitHub URL
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
