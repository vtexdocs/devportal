import Head from 'next/head'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import jp from 'jsonpath'

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
import Breadcrumb from 'components/breadcrumb'

import getHeadings from 'utils/getHeadings'
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
  contributors: ContributorsType[]
  path: string
  headingList: Item[]
}

const DocumentationPage: NextPage<Props> = ({
  serialized,
  path,
  sidebarfallback,
  headingList,
  contributors,
}) => {
  const [headings, setHeadings] = useState<Item[]>([])
  useEffect(() => {
    setHeadings(headingList)
  }, [serialized.frontmatter])

  const breadcumb = jp.paths(
    sidebarfallback,
    `$..*[?(@.slug=='${serialized.frontmatter?.slug}')]`
  )[0]
  let currentBreadcumb = sidebarfallback
  const breadcumbList: { slug: string; name: string; type: string }[] = []
  breadcumb?.forEach((el: string | number) => {
    if (typeof currentBreadcumb?.slug == 'string') {
      breadcumbList.push({
        slug: currentBreadcumb.slug,
        name: currentBreadcumb.name,
        type: currentBreadcumb.type,
      })
    }
    if (el != '$') {
      currentBreadcumb = currentBreadcumb[el]
    }
  })

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
                <Breadcrumb breadcumbList={breadcumbList} />
                <Text sx={styles.documentationTitle}>
                  {serialized.frontmatter?.title}
                </Text>
                <MarkdownRenderer serialized={serialized} />
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
            </Box>

            <FeedbackSection docPath={path} />
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

    const headingList: Item[] = []

    let serialized = await serialize(documentationContent, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkGFM,
          remarkImages,
          [getHeadings, { headingList }],
        ],
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
        headingList,
        contributors,
        path,
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
