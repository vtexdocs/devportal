import { serialize } from 'next-mdx-remote/serialize'
import getGithubFile from './getGithubFile'
import replaceHTMLBlocks from './replaceHTMLBlocks'
import replaceMagicBlocks from './replaceMagicBlocks'
import { TroubleshootingCardsElements } from './typings/types'
import { getLogger } from 'utils/logging/log-util'
import getTroubleshootingPaths from './getTroubleshootingPaths'

export type ITroubleshootingFrontmatter = {
  linkTitle: string
  slug: string
  title: string
  createdAt: string
  excerpt: string
  tags?: string[]
  domainFilters?: string[]
  symptomFilters?: string[]
}

async function getFrontmatter(releaseContent: string) {
  const response = await serialize(releaseContent, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
    },
  })
  return response.frontmatter as Record<string, unknown>
}

export default async function getTroubleshootingData(branch = 'main') {
  const docs = await getTroubleshootingPaths(branch)
  const troubleshooting = Object.values(docs)
  const troubleshootingContent: string[] = []
  const troubleshootingFrontmatter: ITroubleshootingFrontmatter[] = []
  const troubleshootingData: TroubleshootingCardsElements[] = []

  await Promise.all(
    troubleshooting.map(async (release) => {
      try {
        troubleshootingContent.push(
          await replaceMagicBlocks(
            replaceHTMLBlocks(
              await getGithubFile(
                'vtexdocs',
                'dev-portal-content',
                branch,
                release
              )
            )
          )
        )
      } catch (error) {
        const logger = getLogger('getTroubleshootingData')
        logger.error(`Error getting data from release: ${release}\n${error}`)
      }
    })
  )

  await Promise.all(
    troubleshootingContent.map(async (releaseContent) => {
      const response: Record<string, unknown> | undefined = await getFrontmatter(
        releaseContent
      )
      troubleshootingFrontmatter.push(
        response as unknown as ITroubleshootingFrontmatter
      )
    })
  )

  troubleshootingFrontmatter.map((frontmatter) => {
    const domainFilters = frontmatter?.domainFilters ?? []
    const symptomFilters = frontmatter?.symptomFilters ?? []
    const tags =
      frontmatter?.tags ?? Array.from(new Set([...symptomFilters, ...domainFilters]))

    troubleshootingData.push({
      slug: frontmatter?.slug,
      title: frontmatter?.title,
      createdAt: frontmatter?.createdAt,
      description: frontmatter?.excerpt,
      linkTitle: frontmatter?.linkTitle,
      tags,
      domainFilters,
      symptomFilters,
    })
  })

  return JSON.parse(JSON.stringify(troubleshootingData))
}
