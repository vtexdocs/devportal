/* eslint-disable @typescript-eslint/no-explicit-any */
import preval from 'next-plugin-preval'
import { getGithubTree } from './github-utils'
import { getLogger } from './logging/log-util'

const docsList = {
  'billing-options': 'docs/guides/Getting Started/catalog-overview.md',
}

async function getDocsList() {
  const logger = getLogger('getDocsList')
  try {
    console.log('getDocsList')
    const repoTree = await getGithubTree(
      'vtexdocs',
      'dev-portal-content',
      'main'
    )
    repoTree.tree.forEach((node: { path: string; type: string }) => {
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
  } catch (error) {
    logger.error(`Failed to get docs list: ${error}`)
    throw error
  }
}

export default preval(getDocsList())
