/* eslint-disable @typescript-eslint/no-explicit-any */
const referencePaths: { [slug: string]: string } = {}

import { getGithubTree } from './github-utils'
import { getLogger } from './logging/log-util'
import { githubConfig } from './github-config'
import { openapiMappings } from './constants'

export default async function getReferencePaths(
  branch: string = githubConfig.openapiBranch
) {
  const logger = getLogger('getReferencePaths')
  try {
    const repoTree = await getGithubTree(
      githubConfig.openapiOrg,
      githubConfig.openapiRepo,
      branch
    )
    repoTree.tree.forEach((node: { path: string; type: string }) => {
      const path = node.path
      const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
      if (!path.includes('/')) {
        if (node.type === 'blob') {
          const match = path.match(re)
          const filename = match?.groups?.filename
            ? match?.groups?.filename
            : ''
          const filetype = match?.groups?.filetype
            ? match?.groups?.filetype
            : ''
          if (filetype === 'json' || filetype === 'yaml') {
            // Use internal API route instead of jsDelivr
            const slug = openapiMappings[filename] || filename
            referencePaths[slug] = `/api/openapi/${slug}`
          }
        }
      }
    })
    return referencePaths
  } catch (error) {
    logger.error(`Failed to get reference paths: ${error}`)
    throw error
  }
}
