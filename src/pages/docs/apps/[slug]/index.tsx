import { Fragment } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import getHeadings from 'utils/getHeadings'
import { serialize } from 'next-mdx-remote/serialize'
import type { Item } from '@vtexdocs/components'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import Breadcrumb from 'components/breadcrumb'
import ArticlePagination from 'components/article-pagination'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import jp from 'jsonpath'

import getAppReadme from 'utils/getAppReadme'
import { getLogger } from 'utils/logging/log-util'

import { MarkdownRenderer } from '@vtexdocs/components'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import APIGuideContextProvider from 'utils/contexts/api-guide'
import { Box, Flex, Text, IconVTEXSymbol, IconGlobe } from '@vtex/brand-ui'
import styles from 'styles/documentation-page'
import stylesApps from 'styles/apps-page'
import { TableOfContents } from '@vtexdocs/components'
import Head from 'next/head'
import SeeAlsoSection from 'components/see-also-section'
import { ParsedUrlQuery } from 'querystring'
import { flattenJSON, getKeyByValue, getParents } from 'utils/navigation-utils'
import { remarkCodeHike } from '@code-hike/mdx'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import { officialVendors } from 'utils/constants'
import FeedbackSection from 'components/feedback-section'

interface IParams extends ParsedUrlQuery {
  slug: string
}

interface Props {
  slug: string
  title: string
  vendor: string
  latestVersion: string
  currentVersion: string
  sectionSelected: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarfallback: any
  serialized: MDXRemoteSerializeResult
  headingList: Item[]
  childrenDocs: string[]
  breadcumbList: { slug: string; name: string; type: string }[]
  pagination: {
    previousDoc: { slug: string | null; name: string | null }
    nextDoc: { slug: string | null; name: string | null }
  }
  isListed: boolean
}

const AppReadmePage: NextPage<Props> = ({
  slug,
  serialized,
  headingList,
  vendor,
  latestVersion,
  currentVersion,
  title,
  childrenDocs,
  breadcumbList,
  pagination,
  isListed,
}) => {
  const headings: Item[] = headingList

  const seeAlsoData = [
    {
      url: 'https://apps.vtex.com/',
      title: 'VTEX App Store',
      category: 'VTEX IO Apps',
    },
  ]

  childrenDocs?.forEach((doc) =>
    seeAlsoData.push({
      url: `/${doc}`,
      title: `${doc.split('/').slice(-1)}`,
      category: 'VTEX IO Apps',
    })
  )
  return (
    <>
      <Head>
        <title>
          {title} by {vendor}
        </title>
        <meta name="docsearch:doctype" content="VTEX IO Apps" />
        <meta name="docsearch:doctitle" content={title} />
        {vendor != 'vtex' && <meta name="robots" content="noindex" />}
      </Head>
      <Fragment>
        <APIGuideContextProvider headings={headings}>
          <Flex sx={styles.innerContainer}>
            <Box sx={styles.articleBox}>
              <Box sx={styles.contentContainer}>
                <header>
                  <Breadcrumb breadcumbList={breadcumbList} />
                  <Text sx={styles.documentationTitle} className="title">
                    {title}
                  </Text>
                  <Flex sx={stylesApps.details}>
                    {officialVendors.includes(vendor) ? (
                      <Flex>
                        <IconVTEXSymbol size={24} sx={stylesApps.iconDetails} />
                        <Text>Official extension</Text>
                      </Flex>
                    ) : (
                      <Flex>
                        <IconGlobe size={20} sx={stylesApps.iconDetails} />
                        <Text>Community extension</Text>
                      </Flex>
                    )}
                    <Text>Version: {currentVersion}</Text>
                    <Text>Latest version: {latestVersion}</Text>
                  </Flex>
                </header>
                <article>
                  <MarkdownRenderer serialized={serialized} />
                </article>
              </Box>

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
              <SeeAlsoSection docs={seeAlsoData} />
            </Box>
            <Box sx={styles.rightContainer}>
              <TableOfContents headingList={headingList}>
                <FeedbackSection
                  slug={slug}
                  small={true}
                  suggestEdits={false}
                  sectionSelected="apps"
                />
              </TableOfContents>
            </Box>
          </Flex>
        </APIGuideContextProvider>
      </Fragment>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    { params: { slug: 'vtex.add-to-cart-button' } },
    { params: { slug: 'vtex.search' } },
    { params: { slug: 'vtex.rich-text' } },
  ]
  return {
    paths,
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const app = slug as string
  const logger = getLogger('Apps')
  const data = await getAppReadme(app)
  if (!data.markdown) {
    return {
      notFound: true,
    }
  }
  try {
    const sidebarfallback = await getNavigation()
    const sectionSelected = 'VTEX IO Apps'
    const vendor = data.vendor
    const title = data.title
    let markdown = JSON.parse(
      JSON.stringify(data?.markdown?.split('## Contributors')[0])
    )
    const latestVersion = data.latestVersion
    const currentVersion = data.currentVersion
    let specifiedVersion = app.split('@')[1]
      ? app.split('@')[1]
      : currentVersion

    if (specifiedVersion.endsWith('.')) {
      specifiedVersion += '0'
    }
    if (specifiedVersion.split('.').length === 1) {
      specifiedVersion += '.0'
    }
    if (specifiedVersion.split('.').length === 2) {
      specifiedVersion += '.0'
    }

    const childrenDocs = data.childrenDocs ?? ['']
    const headingList: Item[] = []
    const parentsArray: string[] = []
    const parentsArrayName: string[] = []
    const parentsArrayType: string[] = []
    const appName = slug.split('@')[0]
    const docsListSlug = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..slug`
    )
    const docsListName = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..name`
    )
    const indexOfSlug = docsListSlug.indexOf(`apps/${appName}`)
    const pagination = {
      previousDoc: {
        slug: docsListSlug[indexOfSlug - 1]
          ? `/docs/${docsListSlug[indexOfSlug - 1]}`
          : null,
        name: docsListName[indexOfSlug - 1]
          ? docsListName[indexOfSlug - 1]
          : null,
      },
      nextDoc: {
        slug: docsListSlug[indexOfSlug + 1]
          ? `/docs/${docsListSlug[indexOfSlug + 1]}`
          : null,
        name: docsListName[indexOfSlug + 1]
          ? docsListName[indexOfSlug + 1]
          : null,
      },
    }

    const flattenedSidebar = flattenJSON(sidebarfallback)

    const keyPath = getKeyByValue(flattenedSidebar, `apps/${appName}`)
    if (keyPath) {
      getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
      parentsArray.push(slug)
      getParents(keyPath, 'name', flattenedSidebar, parentsArrayName)
      getParents(keyPath, 'type', flattenedSidebar, parentsArrayType)
    }
    parentsArray.push(`apps/${appName}`)
    const isListed: boolean = keyPath ? true : false
    const breadcumbList: { slug: string; name: string; type: string }[] = [
      {
        slug: '/docs/vtex-io-apps',
        name: 'VTEX IO Apps',
        type: 'markdown',
      },
    ]
    parentsArrayName.forEach((_el: string, idx: number) => {
      breadcumbList.push({
        slug: `/docs/${parentsArray[idx]}`,
        name: parentsArrayName[idx],
        type: parentsArrayType[idx],
      })
    })
    if (markdown) {
      {
        specifiedVersion !== currentVersion
          ? (markdown =
              `>❗ The specified version of the app (**${specifiedVersion}**) does not exist. This page is about the latest stable version, which is **${currentVersion}**. \n\n` +
              markdown)
          : !specifiedVersion.includes('-') &&
            specifiedVersion !== latestVersion
          ? (markdown =
              `>❗ This page is about version **${currentVersion}** of the app, which is not the most recent version. The latest stable version is **${latestVersion}**. \n\n` +
              markdown)
          : ''
      }
      let format: 'md' | 'mdx' = 'mdx'
      try {
        const { result } = escapeCurlyBraces(markdown)
        markdown = result
        markdown = replaceHTMLBlocks(markdown)
        markdown = await replaceMagicBlocks(markdown)
      } catch (error) {
        logger.error(`${error}`)
        format = 'md'
      }
      let serialized = await serialize(markdown, {
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
      serialized = JSON.parse(JSON.stringify(serialized))
      return {
        props: {
          slug,
          title,
          vendor,
          latestVersion,
          currentVersion,
          sectionSelected,
          parentsArray,
          sidebarfallback,
          serialized,
          headingList,
          breadcumbList,
          childrenDocs,
          pagination,
          isListed,
        },
      }
    } else {
      return {
        notFound: true,
      }
    }
  } catch (error) {
    logger.error(`Error while processing ${slug}\n${error}`)
    return {
      notFound: true,
    }
  }
}

export default AppReadmePage
