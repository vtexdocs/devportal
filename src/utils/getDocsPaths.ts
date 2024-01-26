/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
const docsPaths: { [slug: string]: string } = {}

import octokit from 'utils/octokitConfig'

async function getGithubTree(org: string, repo: string, ref: string) {
  const response = octokit.request(
    'GET /repos/{org}/{repo}/git/trees/{ref}?recursive=true',
    {
      org: org,
      repo: repo,
      ref: ref,
    }
  )

  return (await response).data
}

//https://api.github.com/repos/vtexdocs/devportal/commits?path=README.md

export default async function getDocsPaths(branch = 'main') {
  const repoTree = await getGithubTree('vtexdocs', 'dev-portal-content', branch)
  // @ts-ignore
  repoTree.tree.map((node: any) => {
    const path = node.path
    const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
    if (
      path.startsWith('docs') &&
      !path.startsWith('docs/release-notes') &&
      !path.startsWith('docs/faststore')
    ) {
      const match = path.match(re)
      const filename = match?.groups?.filename ? match?.groups?.filename : ''
      const filetype = match?.groups?.filetype ? match?.groups?.filetype : ''
      if (filetype === 'md' || filetype === 'mdx') {
        ;(docsPaths as any)[filename] = path
      }
    }
  })
  return docsPaths
}
