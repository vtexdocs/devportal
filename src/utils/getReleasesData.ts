import { serialize } from 'next-mdx-remote/serialize'
import getReleasePaths from './getReleasePaths'
import getGithubFile from './getGithubFile'
import replaceHTMLBlocks from './replaceHTMLBlocks'
import replaceMagicBlocks from './replaceMagicBlocks'
import { UpdateElement } from './typings/types'
import { ActionType } from 'components/last-updates-card/functions'
import { getLogger } from 'utils/logging/log-util'

type IReleasesFrontmatter = {
  slug: string
  title: string
  createdAt: string
  hidden: string
  type: string
  excerpt: string
}

async function getFrontmatter(releaseContent: string) {
  const response = await serialize(releaseContent, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
    },
  })
  return response.frontmatter
}

export default async function getReleasesData(branch = 'main') {
  const docs = await getReleasePaths()
  const releases = Object.values(docs)
  const releasesContent: string[] = []
  const releasesFrontmatter: IReleasesFrontmatter[] = []
  const releasesData: UpdateElement[] = []

  await Promise.all(
    releases.map(async (release) => {
      try {
        releasesContent.push(
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
        const logger = getLogger('getReleasesData')
        logger.error(`Error getting data from release: ${release}\n${error}`)
      }
    })
  )

  await Promise.all(
    releasesContent.map(async (releaseContent) => {
      const response: Record<string, string> | undefined = await getFrontmatter(
        releaseContent
      )
      releasesFrontmatter.push(response as unknown as IReleasesFrontmatter)
    })
  )

  releasesFrontmatter.map((frontmatter) => {
    releasesData.push({
      slug: frontmatter?.slug,
      title: frontmatter?.title,
      createdAt: frontmatter?.createdAt,
      hidden: frontmatter?.hidden as unknown as boolean,
      description: frontmatter?.excerpt,
      actionType: frontmatter?.type as ActionType,
    })
  })
  releasesData.sort(function (a, b) {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt)
  })

  return JSON.parse(JSON.stringify(releasesData))
}
