import { useContext, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import remarkGFM from 'remark-gfm'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import path from 'path'
import jp from 'jsonpath'

import { getComponentPropsFrom } from 'components/faststore-components/utilities/propsSection'

import { PreviewContext } from 'utils/contexts/preview'
import getFastStorePaths from 'utils/getFastStorePaths'
import getGithubFile from 'utils/getGithubFile'
import getHeadings from 'utils/getHeadings'
import { flattenJSON, getKeyByValue, getParents } from 'utils/navigation-utils'
import getFileContributors from 'utils/getFileContributors'
import getNavigation from 'utils/getNavigation'

import { visit } from 'unist-util-visit'
import { Node } from 'unist-util-visit/lib'
import { serialize } from 'next-mdx-remote/serialize'
import { getLogger } from 'utils/logging/log-util'
import { Item, LibraryContext } from '@vtexdocs/components'
import { remarkCodeHike } from '@code-hike/mdx'
import ArticleRender, { MarkDownProps } from 'components/article-render'

const docsPathsGLOBAL = await getFastStorePaths()

const FastStorePage: NextPage<MarkDownProps> = ({
  slug,
  serialized,
  filePath,
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
    <ArticleRender
      serialized={serialized}
      breadcumbList={breadcumbList}
      sectionSelected={sectionSelected}
      filePath={filePath}
      hideTOC={hideTOC}
      mdxProps={mdxProps}
      contributors={contributors}
      headingList={headingList}
      seeAlsoData={seeAlsoData}
      slug={slug}
      pagination={pagination}
      isListed={isListed}
      branch={branch}
    />
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

  const breadcumbList: { slug: string; name: string; type: string }[] = [
    {
      slug: '/docs/storefront-development',
      name: 'Storefront development',
      type: 'markdown',
    },
  ]
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
