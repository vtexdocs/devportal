/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
const docsPaths: { [slug: string]: string } = {}

import { getGithubTree } from './github-utils'

export default async function getFastStorePaths(branch = 'main') {
  const repoTree = await getGithubTree('vtexdocs', 'dev-portal-content', branch)
  // @ts-ignore
  repoTree.tree.map((node: any) => {
    const path = node.path
    const re = /^(?<path>.+\/)*(?<folder>.+)\/(?<filename>.+)\.(?<filetype>.+)$/
    if (path.startsWith('docs/faststore')) {
      const match = path.match(re)
      const filename = match?.groups?.filename ? match?.groups?.filename : ''
      const folder = match?.groups?.folder ? match?.groups?.folder : ''
      const filetype = match?.groups?.filetype ? match?.groups?.filetype : ''
      if (filetype === 'md' || filetype === 'mdx') {
        ;(docsPaths as any)[`${folder}-${filename}`] = path
      }
    }
  })
  return docsPaths
}
