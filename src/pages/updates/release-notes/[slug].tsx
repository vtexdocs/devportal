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

import { Box, Flex } from '@vtex/brand-ui'

import APIGuideContextProvider from 'utils/contexts/api-guide'

import type { Item } from 'components/table-of-contents'
import Contributors from 'components/contributors'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'
import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getDocsPaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
// import getDocsListPreval from 'utils/getDocsList.preval'

import styles from 'styles/documentation-page'
import getFileContributors, {
  ContributorsType,
} from 'utils/getFileContributors'

const docsPathsGLOBAL = await getDocsPaths()

interface Props {
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
  contributors: ContributorsType[]
  path: string
}

const DocumentationPage: NextPage<Props> = ({
  serialized,
  contributors,
  path,
}) => {
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
                <h1>{serialized.frontmatter?.title}</h1>
                <MarkdownRenderer serialized={serialized} />
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
            </Box>

            <FeedbackSection docPath={path} />
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

  const contributors = await getFileContributors(
    'vtexdocs',
    'dev-portal-content',
    'readme-docs',
    path
  )

  try {
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
        path,
        serialized,
        sidebarfallback,
        contributors,
      },
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
