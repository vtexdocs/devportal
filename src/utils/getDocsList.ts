/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
const docsList = {
  'billing-options': 'docs/guides/Getting Started/catalog-overview.md',
}

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

export default async function getDocsList() {
  console.log('getDocsList')
  const repoTree = await getGithubTree(
    'vtexdocs',
    'dev-portal-content',
    'first-docs'
  )
  // @ts-ignore
  repoTree.tree.map((node: any) => {
    const path = node.path
    const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
    if (path.startsWith('docs')) {
      const match = path.match(re)
      const filename = match?.groups?.filename
      if (filename) {
        ;(docsList as any)[filename] = path
      }
    }
  })
  return docsList
}
