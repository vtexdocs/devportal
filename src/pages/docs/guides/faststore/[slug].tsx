import { useContext, useEffect } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import remarkGFM from 'remark-gfm'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import path from 'path'
import jp from 'jsonpath'

import Breadcrumb from 'components/breadcrumb'
import Contributors from 'components/contributors'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import { getComponentPropsFrom } from 'components/faststore-components/utilities/propsSection'

import { PreviewContext } from 'utils/contexts/preview'
import APIGuideContextProvider from 'utils/contexts/api-guide'
import getFastStorePaths from 'utils/getFastStorePaths'
import getGithubFile from 'utils/getGithubFile'
import getHeadings from 'utils/getHeadings'
import { flattenJSON, getKeyByValue, getParents } from 'utils/navigation-utils'
import getFileContributors, {
  ContributorsType,
} from 'utils/getFileContributors'
import getNavigation from 'utils/getNavigation'

import styles from 'styles/documentation-page'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'
import ArticlePagination from 'components/article-pagination'
import { visit } from 'unist-util-visit'
import { Node } from 'unist-util-visit/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getLogger } from 'utils/logging/log-util'
import { Item, LibraryContext, TableOfContents } from '@vtexdocs/components'
import MarkdownRenderer from 'components/faststore-components/markdown-renderer'
import { remarkCodeHike } from '@code-hike/mdx'
import ReactMarkdown from 'react-markdown'

const docsPathsGLOBAL = await getFastStorePaths()

interface Props {
  serialized: MDXRemoteSerializeResult
  frontmatter: {
    title: string
    slug: string
    description: string
    excerpt: string
    keywords: string[]
    seeAlso?: {
      url: string
      title: string
      category: string
    }[]
    sidebar_custom_props?: {
      image: string
    }
    hidePaginationNext: boolean
    hidePaginationPrevious: boolean
  }
  sectionSelected: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarfallback: any
  parentsArray: string[]
  breadcumbList: { slug: string; name: string; type: string }[]
  slug: string
  filePath: string
  headingList: Item[]
  seeAlsoData: {
    url: string
    title: string
    category: string
  }[]
  contributors: ContributorsType[]
  code: string
  mdxProps: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
  branch: string
  pagination: {
    previousDoc: { slug: string | null; name: string | null }
    nextDoc: { slug: string | null; name: string | null }
  }
  isListed: boolean
  hideTOC: boolean
}

const FastStorePage: NextPage<Props> = ({
  slug,
  serialized,
  filePath,
  frontmatter,
  headingList,
  contributors,
  pagination,
  sectionSelected,
  isListed,
  breadcumbList,
  mdxProps,
  branch,
  seeAlsoData,
  hideTOC,
}) => {
  const { setBranchPreview } = useContext(PreviewContext)
  const { setActiveSidebarElement } = useContext(LibraryContext)
  useEffect(() => {
    setActiveSidebarElement(slug)
    setBranchPreview(branch)
  }, [serialized.frontmatter])
  return (
    <>
      <Head>
        <title>{serialized.frontmatter?.title}</title>
        <meta name="docsearch:doctype" content={sectionSelected} />
        <meta
          name="docsearch:doctitle"
          content={serialized.frontmatter?.title as string}
        />
        {serialized.frontmatter?.excerpt && (
          <meta
            property="og:description"
            content={serialized.frontmatter?.excerpt as string}
          />
        )}
      </Head>
      <APIGuideContextProvider headings={headingList}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.articleBox}>
            <Box sx={styles.contentContainer}>
              <article>
                <header>
                  <Breadcrumb breadcumbList={breadcumbList} />
                  <Text sx={styles.documentationTitle} className="title">
                    {frontmatter.title}
                  </Text>
                  <Box sx={styles.documentationExcerpt}>
                    <ReactMarkdown>
                      {frontmatter?.excerpt as string}
                    </ReactMarkdown>
                  </Box>
                </header>
                <MarkdownRenderer serialized={serialized} mdxProps={mdxProps} />
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
            </Box>

            <FeedbackSection docPath={filePath} slug={slug} />
            {isListed && (
              <ArticlePagination
                hidePaginationNext={
                  Boolean(frontmatter?.hidePaginationNext) || false
                }
                hidePaginationPrevious={
                  Boolean(frontmatter?.hidePaginationPrevious) || false
                }
                pagination={pagination}
              />
            )}
            {frontmatter?.seeAlso && <SeeAlsoSection docs={seeAlsoData} />}
          </Box>
          {!hideTOC && (
            <Box sx={styles.rightContainer}>
              <Contributors contributors={contributors} />
              <TableOfContents />
            </Box>
          )}
          <OnThisPage />
        </Flex>
      </APIGuideContextProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(await getFastStorePaths())
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
  const simplifiedSlug = params?.slug as string
  const slug = `faststore/${simplifiedSlug}`
  const branch = preview ? previewBranch : 'main'

  const docsPaths =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? docsPathsGLOBAL
      : await getFastStorePaths(branch)

  const logger = getLogger('FastStore')

  const filePath = docsPaths[simplifiedSlug]
  if (!filePath) {
    return {
      notFound: true,
    }
  }

  let documentationContent = await getGithubFile(
    'vtexdocs',
    'dev-portal-content',
    branch,
    filePath
  )

  const contributors = await getFileContributors(
    'vtexdocs',
    'dev-portal-content',
    branch,
    filePath
  )
  documentationContent = documentationContent.replace(
    /site\/components/g,
    'components/faststore-components'
  )
  documentationContent = documentationContent.replace(
    /site\/mocks/g,
    'components/faststore-components/mocks'
  )
  documentationContent = documentationContent.replace(
    /.*getComponentPropsFrom.*/g,
    ''
  )

  const parentsArray: string[] = []
  const parentsArrayName: string[] = []
  const parentsArrayType: string[] = []
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Storefront Development'
  const flattenedSidebar = flattenJSON(sidebarfallback)
  const keyPath = getKeyByValue(flattenedSidebar, `faststore/${simplifiedSlug}`)
  const isListed: boolean = keyPath ? true : false
  if (keyPath) {
    getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
    parentsArray.push(slug)
    getParents(keyPath, 'name', flattenedSidebar, parentsArrayName)
    getParents(keyPath, 'type', flattenedSidebar, parentsArrayType)
  }

  const breadcumbList: { slug: string; name: string; type: string }[] = []
  parentsArrayName.forEach((_el: string, idx: number) => {
    breadcumbList.push({
      slug: `/docs/guides/${parentsArray[idx]}`,
      name: parentsArrayName[idx],
      type: parentsArrayType[idx],
    })
  })
  function transformer(ast: Node) {
    visit(ast, 'element', visitor)

    function visitor(node: { tagName: string }) {
      if (node.tagName === 'p') {
        node.tagName = 'text'
      }
    }
  }

  const changeParagraphTag = () => transformer

  try {
    logger.info(`Processing ${slug}`)

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
          changeParagraphTag,
        ],
        useDynamicImport: true,
        format: 'mdx',
      },
    })
    serialized = JSON.parse(JSON.stringify(serialized))
    const componentsFiles = serialized.frontmatter?.components
      ? JSON.parse(JSON.stringify(serialized.frontmatter.components as string))
      : []

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
        const category = seeAlsoUrl.includes('api-reference')
          ? 'API Reference'
          : seeAlsoUrl.includes('/faststore/')
          ? 'Storefront Development'
          : seeAlsoUrl.includes('/apps/')
          ? 'VTEX IO Apps'
          : 'Guides'
        if (seeAlsoUrl.startsWith('/docs')) {
          try {
            const response = await fetch(
              `https://developers.vtex.com${seeAlsoUrl}`
            )
            if (response.ok) {
              const html = await response.text()
              const titleMatch = html.match(/<title>(.*?)<\/title>/i)
              const pageTitle = titleMatch ? titleMatch[1] : 'Untitled'
              seeAlsoData.push({
                url: seeAlsoUrl,
                title: pageTitle,
                category: category,
              })
            }
          } catch (error) {}
        }
      })
    )

    const mdxPath = filePath.split('/')

    const componentPath = mdxPath
      .slice(mdxPath.length - 2, mdxPath.length)
      .join('/')

    const mdxProps = getComponentPropsFrom(componentPath, componentsFiles).map(
      (component: object, index) =>
        (component = {
          componentName: componentsFiles[index].replace('.tsx', ''),
          componentAttributes: component,
        })
    )

    const hideTOC = serialized.frontmatter?.hideTOC === true

    const docsListSlug = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..slug`
    )
    const docsListName = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..name`
    )
    const indexOfSlug = docsListSlug.indexOf(`faststore/${simplifiedSlug}`)
    const pagination = {
      previousDoc: {
        slug: docsListSlug[indexOfSlug - 1]
          ? `/docs/guides/${docsListSlug[indexOfSlug - 1]}`
          : null,
        name: docsListName[indexOfSlug - 1]
          ? docsListName[indexOfSlug - 1]
          : null,
      },
      nextDoc: {
        slug: docsListSlug[indexOfSlug + 1]
          ? `/docs/guides/${docsListSlug[indexOfSlug + 1]}`
          : null,
        name: docsListName[indexOfSlug + 1]
          ? docsListName[indexOfSlug + 1]
          : null,
      },
    }

    return {
      props: {
        sectionSelected,
        sidebarfallback,
        parentsArray,
        slug,
        serialized,
        headingList,
        seeAlsoData,
        contributors,
        filePath,
        pagination,
        isListed,
        breadcumbList,
        branch,
        frontmatter: serialized.frontmatter,
        mdxProps,
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

export default FastStorePage
