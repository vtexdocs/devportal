import { useEffect, useContext } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { serializeWithFallback } from 'utils/serializeWithFallback'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import type { Item } from '@vtexdocs/components'

import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getDocsPaths'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import { PreviewContext } from 'utils/contexts/preview'

import getFileContributors, {
  ContributorsType,
} from 'utils/getFileContributors'

import { getLogger } from 'utils/logging/log-util'
import {
  findBreadcrumbTrail,
  extractMarkdownEntries,
  getKeyByValue,
  flattenJSON,
  findNavEntryBySlug,
  buildNavUrl,
  CategoryNavEntry,
} from 'utils/navigation-utils'
import { LibraryContext } from '@vtexdocs/components'
import { slugify } from 'utils/string-utils'
import ArticleRender from 'components/article-render'
import ArticleIndexing from 'components/article-indexing'
import { serialize } from 'next-mdx-remote/serialize'

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
  isCategoryCover?: boolean
  category?: CategoryNavEntry
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
  isCategoryCover,
  category,
}) => {
  const { setBranchPreview } = useContext(PreviewContext)
  const { setActiveSidebarElement } = useContext(LibraryContext)
  useEffect(() => {
    setActiveSidebarElement(isCategoryCover && category ? category.slug : slug)
    setBranchPreview(branch)
  }, [slug, serialized?.frontmatter])

  if (isCategoryCover && category) {
    return (
      <ArticleIndexing category={category} breadcrumbList={breadcrumbList} />
    )
  }

  const hidden =
    sectionSelected === '' || serialized.frontmatter.hidden === true
  return (
    <ArticleRender
      serialized={serialized}
      breadcumbList={breadcrumbList}
      sectionSelected={sectionSelected}
      filePath={path}
      hideTOC={hideTOC}
      contributors={contributors}
      headingList={headingList}
      seeAlsoData={seeAlsoData}
      slug={slug}
      pagination={pagination}
      isListed={isListed}
      branch={branch}
      hidden={hidden}
    />
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSidebarContext = (sidebarfallback: any, slug: string) => {
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

  const { breadcrumbList, parentsArray } = buildBreadcrumbs(
    sidebarfallback,
    sidebarIndex,
    sectionSelected,
    isListed ? navigationSlug : null
  )

  return {
    sectionSelected,
    sidebarIndex,
    isListed,
    breadcrumbList,
    parentsArray,
  }
}

const buildBreadcrumbs = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarfallback: any,
  sidebarIndex: number,
  sectionSelected: string,
  navigationSlug: string | null
) => {
  const breadcrumbList: { slug: string; name: string; type: string }[] = [
    {
      slug: sidebarIndex
        ? `/docs/${slugify(sidebarfallback[sidebarIndex].documentation)}`
        : '/docs/guides',
      name: sectionSelected,
      type: 'markdown',
    },
  ]

  if (navigationSlug !== null) {
    const breadcrumbs = findBreadcrumbTrail(
      sidebarfallback[sidebarIndex].categories,
      navigationSlug
    )
    breadcrumbList.push(...(breadcrumbs ?? []))
  }

  /* Navigation */
  const parentsArray: string[] =
    navigationSlug !== null
      ? breadcrumbList?.map((item) => item.slug) ?? []
      : []

  return { breadcrumbList, parentsArray }
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
    const sidebarfallback = await getNavigation()
    const category = findNavEntryBySlug(sidebarfallback, slug)

    if (!category || category.children.length === 0) {
      return {
        notFound: true,
      }
    }

    const sectionSelected: string =
      sidebarfallback[category.sectionIndex].documentation
    const { breadcrumbList, parentsArray } = buildBreadcrumbs(
      sidebarfallback,
      category.sectionIndex,
      sectionSelected,
      category.slug
    )

    // Breadcrumb only links items typed as markdown, and every ancestor of a
    // category cover is itself a category with its own cover page.
    const slugPrefix = sidebarfallback[category.sectionIndex].slugPrefix ?? ''
    const coverBreadcrumbList = breadcrumbList.map((item, index) =>
      index === 0
        ? item
        : {
            ...item,
            slug: buildNavUrl(slugPrefix, item.slug),
            type: 'markdown',
          }
    )

    return {
      props: {
        isCategoryCover: true,
        category,
        sectionSelected,
        parentsArray,
        slug,
        sidebarfallback,
        breadcrumbList: coverBreadcrumbList,
        branch,
      },
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

  try {
    if (path.endsWith('.md')) {
      const { result } = escapeCurlyBraces(documentationContent)
      documentationContent = result
      documentationContent = replaceHTMLBlocks(documentationContent)
      documentationContent = await replaceMagicBlocks(documentationContent)
    }
  } catch (error) {
    logger.error(`${error}`)
  }

  try {
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
    serialized = JSON.parse(JSON.stringify(serialized))

    logger.info(`Processing ${slug}`)
    const seeAlsoData: {
      url: string
      title: string
      category: string
    }[] = []
    const seeAlsoUrls = serialized?.frontmatter?.seeAlso
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

    const hideTOC = serialized?.frontmatter?.hideTOC === true

    const {
      sectionSelected,
      sidebarIndex,
      isListed,
      breadcrumbList,
      parentsArray,
    } = getSidebarContext(sidebarfallback, slug)

    /* Pagination */
    const entries = extractMarkdownEntries(sidebarfallback[sidebarIndex])
    const entryIndex = entries.findIndex(
      (entry) => entry.slug === `/docs/guides/${slug}`
    )
    const pagination = {
      previousDoc: {
        slug: entries[entryIndex - 1] ? entries[entryIndex - 1].slug : null,
        name: entries[entryIndex - 1] ? entries[entryIndex - 1].name : null,
      },
      nextDoc: {
        slug: entries[entryIndex + 1] ? entries[entryIndex + 1].slug : null,
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
