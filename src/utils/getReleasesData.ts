import { serialize } from 'next-mdx-remote/serialize'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import escapeCurlyBraces from './escapeCurlyBraces'
import getReleasePaths from './getReleasePaths'
import getGithubFile from './getGithubFile'
import replaceHTMLBlocks from './replaceHTMLBlocks'
import replaceMagicBlocks from './replaceMagicBlocks'
import remarkGFM from 'remark-gfm'
import { UpdateElement } from './typings/types'
import { ActionType } from 'components/last-updates-card/functions'

const docsGLOBAL = await getReleasePaths()

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
      remarkPlugins: [remarkGFM],
      format: 'mdx',
    },
  })
  return response.frontmatter
}

export default async function getReleasesData() {
  const docs =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? docsGLOBAL
      : await getReleasePaths()
  const paths = Object.values(docs)
  const releases: string[] = []
  const releasesContent: string[] = []
  const releasesFrontmatter: IReleasesFrontmatter[] = []
  const releasesData: UpdateElement[] = []

  paths.map((path) => {
    if (path.startsWith('docs/release-notes') && path.endsWith('.md')) {
      releases.push(path)
    }
  })

  await Promise.all(
    releases.map(async (release) => {
      releasesContent.push(
        await replaceMagicBlocks(
          replaceHTMLBlocks(
            escapeCurlyBraces(
              await getGithubFile(
                'vtexdocs',
                'dev-portal-content',
                'readme-docs',
                release
              )
            )
          )
        )
      )
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

  return JSON.parse(JSON.stringify(releasesData))
}
