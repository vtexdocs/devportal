import Head from 'next/head'
import { useEffect, useContext } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import ArticlePagination from 'components/article-pagination'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import { remarkCodeHike } from '@code-hike/mdx'
import remarkImages from 'utils/remark_plugins/plaiceholder'

import { Box, Flex, Text } from '@vtex/brand-ui'

import APIGuideContextProvider from 'utils/contexts/api-guide'

import type { Item } from '@vtexdocs/components'
import Contributors from 'components/contributors'
import { MarkdownRenderer } from '@vtexdocs/components'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import { TableOfContents } from '@vtexdocs/components'
import Breadcrumb from 'components/breadcrumb'

import getHeadings from 'utils/getHeadings'
import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getDocsPaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import { PreviewContext } from 'utils/contexts/preview'

import styles from 'styles/documentation-page'
import getFileContributors, {
  ContributorsType,
} from 'utils/getFileContributors'

import { getLogger } from 'utils/logging/log-util'
import {
  findBreadcrumbTrail,
  extractMarkdownEntries,
  getKeyByValue,
  flattenJSON,
} from 'utils/navigation-utils'
import { LibraryContext } from '@vtexdocs/components'
import ReactMarkdown from 'react-markdown'
import { slugify } from 'utils/string-utils'

const docsPathsGLOBAL = await getDocsPaths()

interface Props {
  sectionSelected: string
  breadcrumbList: { slug: string; name: string; type: string }[]
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
  contributors: ContributorsType[]
  path: string
  headingList: Item[]
  seeAlsoData: {
    url: string
    title: string
    category: string
  }[]
  pagination: {
    previousDoc: { slug: string | null; name: string | null }
    nextDoc: { slug: string | null; name: string | null }
  }
  isListed: boolean
  branch: string
  hideTOC: boolean
}

const DocumentationPage: NextPage<Props> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  slug,
  serialized,
  path,
  headingList,
  contributors,
  seeAlsoData,
  pagination,
  isListed,
  breadcrumbList,
  branch,
  sectionSelected,
  hideTOC,
}) => {
  const headings: Item[] = headingList
  const hidden =
    sectionSelected === '' || serialized.frontmatter.hidden === true
  const { setBranchPreview } = useContext(PreviewContext)
  const { setActiveSidebarElement } = useContext(LibraryContext)
  useEffect(() => {
    setActiveSidebarElement(slug)
    setBranchPreview(branch)
  }, [serialized.frontmatter])
  return (
    <>
      <Head>
        <title>{serialized.frontmatter?.title as string}</title>
        <meta name="docsearch:doctype" content={sectionSelected} />
        <meta
          name="docsearch:doctitle"
          content={serialized.frontmatter?.title as string}
        />
        {hidden && <meta name="robots" content="noindex" />}
        {serialized.frontmatter?.excerpt && (
          <meta
            property="og:description"
            content={serialized.frontmatter?.excerpt as string}
          />
        )}
      </Head>
      <APIGuideContextProvider headings={headings}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.articleBox}>
            <Box sx={styles.contentContainer}>
              <article>
                <header>
                  <Breadcrumb breadcumbList={breadcrumbList} />
                  <Text sx={styles.documentationTitle} className="title">
                    {serialized.frontmatter?.title}
                  </Text>
                  <Box sx={styles.documentationExcerpt}>
                    <ReactMarkdown>
                      {serialized.frontmatter?.excerpt as string}
                    </ReactMarkdown>
                  </Box>
                </header>
                <MarkdownRenderer serialized={serialized} />
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
            </Box>

            <FeedbackSection docPath={path} slug={slug} />
            {isListed && (
              <ArticlePagination
                hidePaginationNext={
                  Boolean(serialized.frontmatter?.hidePaginationNext) || false
                }
                hidePaginationPrevious={
                  Boolean(serialized.frontmatter?.hidePaginationPrevious) ||
                  false
                }
                pagination={pagination}
              />
            )}
            {serialized.frontmatter?.seeAlso && (
              <SeeAlsoSection docs={seeAlsoData} />
            )}
          </Box>
          {!hideTOC && (
            <Box sx={styles.rightContainer}>
              <Contributors contributors={contributors} />
              <TableOfContents headingList={headingList} />
            </Box>
          )}
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

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  const slug = params?.slug as string
  const docsPaths =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? docsPathsGLOBAL
      : await getDocsPaths(branch)

  const logger = getLogger('Guides')

  const path = docsPaths[slug]
  if (!path) {
    return {
      notFound: true,
    }
  }

  let documentationContent = await getGithubFile(
    'vtexdocs',
    'dev-portal-content',
    branch,
    path
  )

  const contributors = await getFileContributors(
    'vtexdocs',
    'dev-portal-content',
    branch,
    path
  )

  let format: 'md' | 'mdx' = 'mdx'
  try {
    if (path.endsWith('.md')) {
      const { result } = escapeCurlyBraces(documentationContent)
      documentationContent = result
      documentationContent = replaceHTMLBlocks(documentationContent)
      documentationContent = await replaceMagicBlocks(documentationContent)
    }
  } catch (error) {
    logger.error(`${error}`)
    format = 'md'
  }

  try {
    const headingList: Item[] = []
    let serialized = await serialize(documentationContent, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          [
            remarkCodeHike,
            {
              autoImport: false,
              showCopyButton: true,
              lineNumbers: true,
              skipLanguages: ['mermaid'],
              staticMediaQuery: 'not screen, (max-width: 850px)',
              theme: 'poimandres',
            },
          ],
          remarkGFM,
          remarkImages,
          [getHeadings, { headingList }],
          remarkBlockquote,
          remarkMermaid,
        ],
        rehypePlugins: [
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ],
        useDynamicImport: true,
        format,
      },
    })

    const sidebarfallback = await getNavigation()
    serialized = JSON.parse(JSON.stringify(serialized))

    logger.info(`Processing ${slug}`)
    const seeAlsoData: {
      url: string
      title: string
      category: string
    }[] = []
    const seeAlsoUrls = serialized.frontmatter?.seeAlso
      ? JSON.parse(JSON.stringify(serialized.frontmatter.seeAlso as string))
      : []
    await Promise.all(
      seeAlsoUrls.map(async (seeAlsoUrl: string) => {
        const seeAlsoPath = docsPaths[seeAlsoUrl.split('/')[3]]
        if (seeAlsoPath) {
          try {
            const documentationContent = await getGithubFile(
              'vtexdocs',
              'dev-portal-content',
              'main',
              seeAlsoPath
            )
            const serialized = await serialize(documentationContent, {
              parseFrontmatter: true,
            })
            seeAlsoData.push({
              url: seeAlsoUrl,
              title: serialized.frontmatter?.title
                ? (serialized.frontmatter.title as string)
                : seeAlsoUrl.split('/')[3],
              category: serialized.frontmatter?.category
                ? (serialized.frontmatter.category as string)
                : seeAlsoUrl.split('/')[2],
            })
          } catch (error) {}
        } else if (seeAlsoUrl.startsWith('/docs')) {
          seeAlsoData.push({
            url: seeAlsoUrl,
            title: seeAlsoUrl.split('/')[3],
            category: seeAlsoUrl.split('/')[2],
          })
        }
      })
    )

    const hideTOC = serialized.frontmatter?.hideTOC === true

    const flattenedSidebar = flattenJSON(sidebarfallback)

    const keyPath =
      getKeyByValue(flattenedSidebar, slug) ||
      getKeyByValue(flattenedSidebar, `guides/${slug}`)
    const navigationSlug = keyPath ? flattenedSidebar[keyPath] : ''
    const isListed = Boolean(keyPath)

    /* Section Selected */
    const sectionSelected = keyPath
      ? flattenedSidebar[`${keyPath[0]}.documentation`]
      : []

    const sidebarIndex = isListed
      ? sidebarfallback.findIndex(
          (item: { documentation: string }) =>
            item.documentation === sectionSelected
        )
      : 0
    /****/

    /* Breadcrumbs */
    const breadcrumbList: { slug: string; name: string; type: string }[] = [
      {
        slug: sidebarIndex
          ? `/docs/${slugify(sidebarfallback[sidebarIndex].documentation)}`
          : '/docs/guides',
        name: sectionSelected,
        type: 'markdown',
      },
    ]

    if (isListed) {
      const breadcrumbs = findBreadcrumbTrail(
        sidebarfallback[sidebarIndex].categories,
        navigationSlug
      )
      breadcrumbList.push(...(breadcrumbs ?? []))
    }
    /****/

    /* Navigation */
    const parentsArray: string[] = isListed
      ? breadcrumbList?.map((item) => item.slug) ?? []
      : []

    /* Pagination */
    const entries = extractMarkdownEntries(sidebarfallback[sidebarIndex])
    const entryIndex = entries.findIndex(
      (entry) => entry.slug === `/docs/guides/${slug}`
    )
    const pagination = {
      previousDoc: {
        slug: entries[entryIndex - 1]
          ? `/${entries[entryIndex - 1].slug}`
          : null,
        name: entries[entryIndex - 1] ? entries[entryIndex - 1].name : null,
      },
      nextDoc: {
        slug: entries[entryIndex + 1]
          ? `/${entries[entryIndex + 1].slug}`
          : null,
        name: entries[entryIndex + 1] ? entries[entryIndex + 1].name : null,
      },
    }
    /****/

    return {
      props: {
        sectionSelected,
        parentsArray,
        slug,
        serialized,
        sidebarfallback,
        headingList,
        contributors,
        path,
        seeAlsoData,
        pagination,
        isListed,
        breadcrumbList,
        branch,
        hideTOC,
      },
    }
  } catch (error) {
    logger.error(`Error while processing ${path}\n${error}`)
    return {
      notFound: true,
    }
  }
}

export default DocumentationPage
