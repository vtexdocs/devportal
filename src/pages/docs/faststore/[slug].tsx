import { useContext, useEffect } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { bundleMDX } from 'mdx-bundler'
import remarkGFM from 'remark-gfm'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import path from 'path'
import jp from 'jsonpath'

import type { Item } from 'components/table-of-contents'
import Breadcrumb from 'components/breadcrumb'
import MarkdownRenderer from 'components/markdown-renderer'
import Contributors from 'components/contributors'
import FeedbackSection from 'components/feedback-section'
import TableOfContents from 'components/table-of-contents'
import OnThisPage from 'components/on-this-page'
import { getComponentPropsFrom } from 'components/faststore-components/utilities/propsSection'

import { PreviewContext } from 'utils/contexts/preview'
import { SidebarContext } from 'utils/contexts/sidebar'
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

interface Props {
  frontmatter: {
    title: string
    slug: string
    description: string
    excerpt: string
    keywords: string[]
    sidebar_custom_props?: {
      image: string
    }
    hidePaginationNext: boolean
    hidePaginationPrevious: boolean
  }
  sectionSelected: string
  parentsArray: string[]
  breadcumbList: { slug: string; name: string; type: string }[]
  slug: string
  filePath: string
  headingList: Item[]
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
}

const docsPathsGLOBAL = await getFastStorePaths('main')

const FastStorePage: NextPage<Props> = ({
  frontmatter,
  sectionSelected,
  breadcumbList,
  slug,
  filePath,
  headingList,
  contributors,
  code,
  mdxProps,
  branch,
  pagination,
  isListed,
}) => {
  const { setBranchPreview } = useContext(PreviewContext)
  const { setActiveSidebarElement } = useContext(SidebarContext)
  useEffect(() => {
    setActiveSidebarElement(slug)
    setBranchPreview(branch)
  }, [])
  return (
    <>
      <Head>
        <title>FastStore</title>
        <meta name="docsearch:doctype" content={sectionSelected} />
        <meta name="docsearch:doctitle" content={'FastStore Doc'} />
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
                  <Text sx={styles.documentationExcerpt}>
                    {frontmatter.excerpt
                      ? frontmatter.excerpt
                      : frontmatter.description}
                  </Text>
                </header>
                <MarkdownRenderer
                  serialized={null}
                  code={code}
                  mdxProps={mdxProps}
                />
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
  const slug = params?.slug as string
  const branch = preview ? previewBranch : 'feat/faststore-docs'

  const docsPaths =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? docsPathsGLOBAL
      : await getFastStorePaths(branch)

  const filePath = docsPaths[slug]
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

  const sidebarfallback = await getNavigation()
  const flattenedSidebar = flattenJSON(sidebarfallback)
  const isListed: boolean = getKeyByValue(flattenedSidebar, slug) ? true : false
  const cleanSlug = getKeyByValue(flattenedSidebar, slug)
  const keyPath = cleanSlug
    ? getKeyByValue(flattenedSidebar, slug)
    : getKeyByValue(flattenedSidebar, `faststore/${slug}`)

  const parentsArray: string[] = []
  const parentsArrayName: string[] = []
  const parentsArrayType: string[] = []
  const sectionSelected = 'FastStore'

  if (keyPath) {
    getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
    cleanSlug ? parentsArray.push(slug) : parentsArray.push(`guides/${slug}`)
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

  try {
    const headingList: Item[] = []
    const { code, frontmatter } = await bundleMDX({
      source: documentationContent,
      cwd: path.join(process.cwd(), 'src'),
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkGFM,
          remarkImages,
          [getHeadings, { headingList }],
          remarkBlockquote,
          remarkMermaid,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ]
        return options
      },
      esbuildOptions(options) {
        options.outdir = path.join(process.cwd(), '.next')
        options.write = true
        return options
      },
    })

    const componentsFiles = frontmatter.components ?? []

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

    const docsListSlug = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..slug`
    )
    const docsListName = jp.query(
      sidebarfallback,
      `$..[?(@.type=='markdown')]..name`
    )
    const indexOfSlug = docsListSlug.indexOf(slug)

    const pagination = {
      previousDoc: {
        slug: docsListSlug[indexOfSlug - 1]
          ? `/docs/faststore/${docsListSlug[indexOfSlug - 1]}`
          : null,
        name: docsListName[indexOfSlug - 1]
          ? docsListName[indexOfSlug - 1]
          : null,
      },
      nextDoc: {
        slug: docsListSlug[indexOfSlug + 1]
          ? `/docs/faststore/${docsListSlug[indexOfSlug + 1]}`
          : null,
        name: docsListName[indexOfSlug + 1]
          ? docsListName[indexOfSlug + 1]
          : null,
      },
    }

    return {
      props: {
        sectionSelected,
        parentsArray,
        slug,
        filePath,
        contributors,
        frontmatter,
        code,
        mdxProps,
        breadcumbList,
        headingList,
        branch,
        isListed,
        pagination,
      },
    }
  } catch (error) {
    console.error(`Error while processing ${path}\n${error}`)
    return {
      notFound: true,
    }
  }
}

export default FastStorePage
