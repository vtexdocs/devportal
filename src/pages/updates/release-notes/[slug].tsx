import Head from 'next/head'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'

import remarkImages from 'utils/remark_plugins/plaiceholder'

import { Box, Flex, Text } from '@vtex/brand-ui'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'

import APIGuideContextProvider from 'utils/contexts/api-guide'

import type { Item } from 'components/table-of-contents'
import Contributors from 'components/contributors'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'
import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getDocsPaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
// import getDocsListPreval from 'utils/getDocsList.preval'
import { getReleaseDate } from 'components/release-note/functions'
import { ActionType, getAction } from 'components/last-updates-card/functions'

import styles from 'styles/documentation-page'

const docsPathsGLOBAL = await getDocsPaths()

const contributors = 'ABCDEFGHIJKL'.split('')

const documentationCards = [
  {
    title: 'Billing Options',
    description: 'API Guides',
    link: '/docs/api-guides/billing-options',
    Icon: APIGuidesIcon,
  },
  {
    title:
      'Catalog API - A long documentation title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'API Reference',
    link: '/docs/api-reference/catalog',
    Icon: APIReferenceIcon,
  },
]

interface Props {
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
}

const DocumentationPage: NextPage<Props> = ({ serialized }) => {
  const [headings, setHeadings] = useState<Item[]>([])
  useEffect(() => {
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
        <meta name="docsearch:doctype" content="API Guides" />
      </Head>
      <APIGuideContextProvider headings={headings}>
        <Flex sx={styles.mainContainer}>
          <Box sx={styles.articleBox}>
            <Box sx={styles.contentContainer}>
              <article>
                {actionValue ? (
                  <Box sx={styles.releaseAction}>
                    <actionValue.Icon />
                    <Text>{actionValue?.title}</Text>
                  </Box>
                ) : null}
                <h1>{serialized.frontmatter?.title}</h1>
                <Text>
                  {getReleaseDate(serialized.frontmatter?.createdAt || '')}
                </Text>
                <MarkdownRenderer serialized={serialized} />
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
            </Box>

            <FeedbackSection />
            <SeeAlsoSection cards={documentationCards} />
          </Box>
          <Box sx={styles.rightContainer}>
            <Contributors contributors={contributors} />
            <TableOfContents />
          </Box>
          <OnThisPage />
        </Flex>
      </APIGuideContextProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(await getDocsPaths())
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))
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
    'readme-docs',
    path
  )

  try {
    if (path.startsWith('docs/release-notes')) {
      if (path.endsWith('.md')) {
        documentationContent = escapeCurlyBraces(documentationContent)
        documentationContent = replaceHTMLBlocks(documentationContent)
        documentationContent = await replaceMagicBlocks(documentationContent)
      }

      let serialized = await serialize(documentationContent, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGFM, remarkImages],
          rehypePlugins: [
            [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
          ],
          format: 'mdx',
        },
      })

      const sidebarfallback = await getNavigation()
      serialized = JSON.parse(JSON.stringify(serialized))

      return {
        props: {
          serialized,
          sidebarfallback,
        },
      }
    } else {
      return {
        notFound: true,
      }
    }
  } catch (error) {
    console.error('`\x1b[33m Error while processing \x1b[0m', path)
    console.error(`\x1b[33m${error}\x1b[0m`)

    return {
      notFound: true,
    }
  }
}

export default DocumentationPage
