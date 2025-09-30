import octokit from 'utils/octokitConfig'

type GitHubFile = {
  name: string
  path: string
  sha: string
  size: number
  type: 'file' | 'dir' | 'symlink' | 'submodule'
  download_url: string | null
  html_url: string
}

export async function listFilesWithinFolder(
  path: string
): Promise<GitHubFile[]> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: 'vtex',
      repo: 'vtex-courses',
      path: path,
      ref: 'master',
    })

    if (Array.isArray(data)) {
      return data
        .filter((item) => item.type === 'file')
        .map((item) => ({
          name: item.name,
          path: item.path,
          sha: item.sha,
          size: item.size,
          type: item.type as GitHubFile['type'],
          download_url: item.download_url,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          html_url: item.html_url!,
        }))
    }
    return []
  } catch {
    return []
  }
}
