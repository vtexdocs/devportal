import Head from 'next/head'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'

import remarkImages from 'utils/remark_plugins/plaiceholder'
import { getLogger } from 'utils/logging/log-util'

import { Box, Flex, Text } from '@vtex/brand-ui'

import APIGuideContextProvider from 'utils/contexts/api-guide'

import type { Item } from 'components/table-of-contents'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'
import { flattenJSON, getKeyByValue, getParents } from 'utils/navigation-utils'
import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getReleasePaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import { getReleaseDate } from 'components/release-note/functions'
import { ActionType, getAction } from 'components/last-updates-card/functions'

import styles from 'styles/documentation-page'

const docsPathsGLOBAL = await getDocsPaths()

interface Props {
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
}

const DocumentationPage: NextPage<Props> = ({ serialized }) => {
  const [headings, setHeadings] = useState<Item[]>([])
  useEffect(() => {
    if (headings) setHeadings([])
    document.querySelectorAll('h2, h3').forEach((heading) => {
      const item = {
        title: removeHTML(heading.innerHTML).replace(':', ''),
        slug: heading.id,
      }

      setHeadings((headings) => {
        if (heading.tagName === 'H2') {
          return [...headings, { ...item, children: [] }]
        }

        const { title, slug, children } = headings[headings.length - 1] || {
          title: '',
          slug: '',
          children: [],
        }

        return [
          ...headings.slice(0, -1),
          { title, slug, children: [...children, item] },
        ]
      })
    })
  }, [])
  const actionType: ActionType = serialized.frontmatter?.type as ActionType
  const actionValue = actionType ? getAction(actionType) : null

  return (
    <>
      <Head>
        <title>{serialized.frontmatter?.title}</title>
        <meta name="docsearch:doctype" content="Release Notes" />
      </Head>
      <APIGuideContextProvider headings={headings}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.articleBox}>
            <Box sx={styles.contentContainer}>
              <article>
                {actionValue ? (
                  <Box sx={styles.releaseAction}>
                    <actionValue.Icon />
                    <Text>{actionValue?.title}</Text>
                  </Box>
                ) : null}
                <Text sx={styles.documentationTitle}>
                  {serialized.frontmatter?.title}
                </Text>
                <Text sx={{ marginTop: '10px' }}>
                  {getReleaseDate(serialized.frontmatter?.createdAt || '')}
                </Text>
                <Box sx={styles.divider}></Box>
                <MarkdownRenderer serialized={serialized} />
              </article>
            </Box>
            <FeedbackSection suggestEdits={false} />
          </Box>
          <Box sx={styles.rightContainer}>
            <TableOfContents />
          </Box>
          <OnThisPage />
        </Flex>
      </APIGuideContextProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const slugs = Object.keys(await getDocsPaths())
  // const paths = slugs.map((slug) => ({
  //   params: { slug },
  // }))
  const paths: never[] = []
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const docsPaths =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? docsPathsGLOBAL
      : await getDocsPaths()

  const path = docsPaths[slug]
  if (!path) {
    return {
      notFound: true,
    }
  }

  let documentationContent = await getGithubFile(
    'vtexdocs',
    'dev-portal-content',
    'main',
    path
  )
  const logger = getLogger('Release-Notes')

  try {
    if (path.endsWith('.md')) {
      documentationContent = escapeCurlyBraces(documentationContent)
      documentationContent = replaceHTMLBlocks(documentationContent)
      documentationContent = await replaceMagicBlocks(documentationContent)
    }

    let serialized = await serialize(documentationContent, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGFM, remarkImages, remarkBlockquote],
        rehypePlugins: [
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ],
        format: 'mdx',
      },
    })

    const sidebarfallback = await getNavigation()
    serialized = JSON.parse(JSON.stringify(serialized))

    const sectionSelected = 'Release Notes'
    const flattenedSidebar = flattenJSON(sidebarfallback)
    const keyPath = getKeyByValue(flattenedSidebar, slug)
    const parentsArray: string[] = []
    if (keyPath) {
      getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
      parentsArray.push(slug)
    }
    return {
      props: {
        parentsArray,
        serialized,
        sidebarfallback,
        sectionSelected,
      },
      revalidate: 600,
    }
  } catch (error) {
    logger.error(`Error while processing ${path}\n${error}`)

    return {
      notFound: true,
    }
  }
}

export default DocumentationPage
