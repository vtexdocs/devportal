import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { Box, Text } from '@vtex/brand-ui'

import { serializeWithFallback } from 'utils/serializeWithFallback'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getLogger } from 'utils/logging/log-util'

import type { Item } from '@vtexdocs/components'
import { LibraryContext } from '@vtexdocs/components'

import {
  extractMarkdownEntries,
  findBreadcrumbTrail,
  flattenJSON,
  getKeyByValue,
  getParents,
} from 'utils/navigation-utils'
import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getReleasePaths from 'utils/getReleasePaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import { getReleaseNoteDateFromSlug } from 'components/release-note/functions'
import { ActionType, getAction } from 'components/last-updates-card/functions'
import getFileContributors, {
  ContributorsType,
} from 'utils/getFileContributors'
import { PreviewContext } from 'utils/contexts/preview'
import ArticleRender from 'components/article-render'

import styles from 'styles/documentation-page'

const docsPathsGLOBAL = await getReleasePaths()

interface Props {
  sectionSelected: string
  breadcumbList: { slug: string; name: string; type: string }[]
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
  contributors: ContributorsType[]
  path: string
  headingList: Item[]
  pagination: {
    previousDoc: {
      slug: string | null
      name: string | null
      createdAt?: string | null
    }
    nextDoc: {
      slug: string | null
      name: string | null
      createdAt?: string | null
    }
  }
  isListed: boolean
  branch: string
  hideTOC: boolean
  slug: string
}

const DocumentationPage: NextPage<Props> = ({
  slug,
  serialized,
  path,
  headingList,
  contributors,
  pagination,
  isListed,
  breadcumbList,
  branch,
  sectionSelected,
  hideTOC,
}) => {
  const { setBranchPreview } = useContext(PreviewContext)
  const { setActiveSidebarElement } = useContext(LibraryContext)
  useEffect(() => {
    setActiveSidebarElement(slug)
    setBranchPreview(branch)
  }, [serialized.frontmatter])

  const actionType: ActionType = serialized.frontmatter?.type as ActionType
  const actionValue = actionType ? getAction(actionType) : null

  return (
    <>
      {actionType && (
        <Head>
          <meta name="docsearch:actiontype" content={actionType} />
        </Head>
      )}
      <ArticleRender
        serialized={serialized}
        breadcumbList={breadcumbList}
        sectionSelected={sectionSelected}
        filePath={path}
        hideTOC={hideTOC}
        contributors={contributors}
        headingList={headingList}
        seeAlsoData={[]}
        slug={slug}
        pagination={pagination}
        isListed={isListed}
        branch={branch}
        showCreatedAt
        showSuggestEdits={false}
        showContributors={false}
      >
        {actionValue ? (
          <Box sx={styles.releaseAction}>
            <actionValue.Icon />
            <Text>{actionValue.title}</Text>
          </Box>
        ) : null}
      </ArticleRender>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: never[] = []
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
      : await getReleasePaths(branch)

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
  const logger = getLogger('Release-Notes')

  try {
    if (path.endsWith('.md')) {
      const { result } = escapeCurlyBraces(documentationContent)
      documentationContent = result
      documentationContent = replaceHTMLBlocks(documentationContent)
      documentationContent = await replaceMagicBlocks(documentationContent)
    }

    const headingList: Item[] = []
    let serialized = await serializeWithFallback({
      content: documentationContent,
      headingList,
      logger,
      path,
    })

    if (!serialized) {
      logger.warn(`Serialized result is null/invalid for ${slug} (${path})`)
      return { notFound: true }
    }

    const sidebarfallback = await getNavigation()
    serialized = JSON.parse(
      JSON.stringify(serialized)
    ) as MDXRemoteSerializeResult

    const sectionSelected = 'Release Notes'
    const flattenedSidebar = flattenJSON(sidebarfallback)
    const keyPath = getKeyByValue(flattenedSidebar, slug)
    const parentsArray: string[] = []
    if (keyPath) {
      getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
      parentsArray.push(slug)
    }
    const isListed: boolean = keyPath ? true : false
    const hideTOC = serialized?.frontmatter?.hideTOC === true

    const sidebarIndex = sidebarfallback.findIndex(
      (item: { documentation: string }) =>
        item.documentation === sectionSelected
    )
    const releaseNotesNav =
      sidebarIndex >= 0 ? sidebarfallback[sidebarIndex] : sidebarfallback[6]

    const breadcumbList: { slug: string; name: string; type: string }[] = [
      {
        slug: '/updates/release-notes',
        name: 'Release Notes',
        type: 'markdown',
      },
    ]
    if (isListed && releaseNotesNav) {
      const breadcrumbs = findBreadcrumbTrail(releaseNotesNav.categories, slug)
      breadcumbList.push(...(breadcrumbs ?? []))
    } else {
      breadcumbList.push({
        slug: `/updates/release-notes/${slug}`,
        name: (serialized.frontmatter?.title as string) || slug,
        type: 'markdown',
      })
    }

    /* Pagination */
    const entries = extractMarkdownEntries(releaseNotesNav)
    const entryIndex = entries.findIndex(
      (entry) => entry.slug === `/updates/release-notes/${slug}`
    )
    const previousEntry = entries[entryIndex + 1]
    const nextEntry = entries[entryIndex - 1]
    const pagination = {
      previousDoc: {
        slug: previousEntry ? previousEntry.slug : null,
        name: previousEntry ? previousEntry.name : null,
        createdAt: getReleaseNoteDateFromSlug(previousEntry?.slug),
      },
      nextDoc: {
        slug: nextEntry ? nextEntry.slug : null,
        name: nextEntry ? nextEntry.name : null,
        createdAt: getReleaseNoteDateFromSlug(nextEntry?.slug),
      },
    }
    /****/

    return {
      props: {
        parentsArray,
        pagination,
        isListed,
        serialized,
        sidebarfallback,
        sectionSelected,
        branch,
        slug,
        path,
        headingList,
        contributors,
        breadcumbList,
        hideTOC,
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
