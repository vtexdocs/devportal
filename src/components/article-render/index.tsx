import Head from 'next/head'
import { Box, Text, Flex, Link } from '@vtex/brand-ui'
import Breadcrumb from 'components/breadcrumb'

import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import { Item, MarkdownRenderer, TableOfContents } from '@vtexdocs/components'
import FSMarkdownRenderer from 'components/faststore-components/markdown-renderer'

import styles from 'styles/documentation-page'
import ArticlePagination from 'components/article-pagination'
import Contributors from 'components/contributors'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ContributorsType } from 'utils/getFileContributors'
import APIGuideContextProvider from 'utils/contexts/api-guide'
import ReactMarkdown from 'react-markdown'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'
import FeedbackModal from 'components/feedback-modal'
import { useState } from 'react'
import AskAIMenu from 'components/ask-ai'
import EditIcon from 'components/icons/edit-icon'

export interface MarkDownProps {
  slug: string
  branch: string
  serialized: MDXRemoteSerializeResult
  contributors: ContributorsType[]
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
  breadcumbList: { slug: string; name: string; type: string }[]
  sectionSelected: string
  filePath: string
  hideTOC: boolean
  mdxProps?: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
  isListed: boolean
  hidden?: boolean
}

const ArticleRender = ({
  sectionSelected,
  serialized,
  headingList,
  breadcumbList,
  contributors,
  seeAlsoData,
  pagination,
  slug,
  filePath,
  hideTOC,
  mdxProps,
  hidden = false,
  isListed,
}: MarkDownProps) => {
  const { frontmatter } = serialized
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pagePath =
    sectionSelected === 'Troubleshooting' ? 'troubleshooting' : 'guides'
  const urlToEdit = `https://github.com/vtexdocs/dev-portal-content/edit/main/${filePath}`

  return (
    <>
      <Head>
        <title>{frontmatter?.title}</title>
        <meta name="docsearch:doctype" content={sectionSelected} />
        <meta
          name="docsearch:doctitle"
          content={frontmatter?.title as string}
        />
        {hidden && <meta name="robots" content="noindex" />}
        {frontmatter?.excerpt && (
          <meta
            property="og:description"
            content={frontmatter?.excerpt as string}
          />
        )}
      </Head>
      <APIGuideContextProvider headings={headingList}>
        <Flex sx={styles.innerContainer}>
          <Box sx={styles.articleBox}>
            <Box sx={styles.contentContainer}>
              <article>
                <header>
                  <Flex sx={{ justifyContent: 'space-between' }}>
                    <Breadcrumb breadcumbList={breadcumbList} />
                  </Flex>
                  <Box sx={styles.documentationTitle}>
                    <ReactMarkdown className="title">
                      {frontmatter?.title as string}
                    </ReactMarkdown>
                  </Box>
                  <Box sx={styles.documentationExcerpt}>
                    <ReactMarkdown>
                      {frontmatter?.excerpt as string}
                    </ReactMarkdown>
                  </Box>
                </header>
                {mdxProps ? (
                  <FSMarkdownRenderer
                    serialized={serialized}
                    mdxProps={mdxProps}
                  />
                ) : (
                  <MarkdownRenderer serialized={serialized} />
                )}
              </article>
            </Box>

            <Box sx={styles.bottomContributorsContainer}>
              <Box sx={styles.bottomContributorsDivider} />
              <Contributors contributors={contributors} />
              <FeedbackSection docPath={filePath} slug={slug} />
            </Box>
            {hideTOC && <FeedbackSection docPath={filePath} slug={slug} />}
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
              <TableOfContents headingList={headingList}>
                <Box sx={styles.divider}>
                  <FeedbackSection
                    sectionSelected={pagePath}
                    docPath={filePath}
                    slug={slug}
                    small={true}
                    suggestEdits={false}
                  />
                  <Box
                    as="button"
                    onClick={() => setIsModalOpen(true)}
                    sx={styles.button}
                  >
                    <i className="fa-regular fa-comment"></i> Send feedback
                  </Box>
                </Box>
                <Box sx={styles.divider}>
                  <FeedbackModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialMessage={`https://developers.vtex.com/docs/${pagePath}/${slug}`}
                  />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={urlToEdit}
                    sx={styles.editContainer}
                  >
                    <EditIcon size={18} />
                    <Text>Suggest edits (GitHub)</Text>
                  </Link>
                  <AskAIMenu slug={slug} filePath={filePath} />
                </Box>
              </TableOfContents>
            </Box>
          )}
          <OnThisPage />
        </Flex>
      </APIGuideContextProvider>
    </>
  )
}

export default ArticleRender
