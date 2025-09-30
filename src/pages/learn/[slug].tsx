import Head from 'next/head'
import { useEffect, useContext } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ArticlePagination from 'components/article-pagination'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import jp from 'jsonpath'

import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import { remarkCodeHike } from '@code-hike/mdx'
import { Box, Flex, Text } from '@vtex/brand-ui'

import { MarkdownRenderer } from '@vtexdocs/components'
import OnThisPage from 'components/on-this-page'
import Breadcrumb from 'components/breadcrumb'

import getGithubFile from 'utils/getGithubFile'
import getDocsPaths from 'utils/getDocsPaths'

import styles from 'styles/documentation-page'
import { LibraryContext } from '@vtexdocs/components'
import { serialize } from 'next-mdx-remote/serialize'
import getNavigation from 'utils/getNavigation'
import {
  extractMarkdownEntries,
  findBreadcrumbTrail,
  flattenJSON,
  getKeyByValue,
} from 'utils/navigation-utils'
import Link from 'next/link'
import { listFilesWithinFolder } from 'utils/listFilesWithinFolder'

interface Props {
  sectionSelected: string
  breadcrumbList: { slug: string; name: string; type: string }[]
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
  path: string
  seeAlsoData: {
    url: string
    title: string
    category: string
  }[]
  pagination: {
    previousDoc: { slug: string | null; name: string | null }
    nextDoc: { slug: string | null; name: string | null }
  }
  localizedLink: string
}

const DocumentationPage: NextPage<Props> = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  slug,
  localizedLink,
  serialized,
  pagination,
  breadcrumbList,
  sectionSelected,
}) => {
  const { setActiveSidebarElement } = useContext(LibraryContext)
  useEffect(() => {
    setActiveSidebarElement(slug)
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
        {serialized.frontmatter?.excerpt && (
          <meta
            property="og:description"
            content={serialized.frontmatter?.excerpt as string}
          />
        )}
      </Head>
      <Flex sx={styles.innerContainer}>
        <Box sx={styles.articleBox}>
          <Box sx={styles.contentContainer}>
            <article>
              <header>
                <Breadcrumb breadcumbList={breadcrumbList} />
                <Text sx={styles.documentationTitle} className="title">
                  {serialized.frontmatter?.title}
                </Text>
                <Box sx={styles.documentationExcerpt}></Box>
                <Link
                  href={localizedLink}
                  style={{ fontSize: '16px', marginBottom: '40px' }}
                >
                  <i className="fa-solid fa-language"></i> View in{' '}
                  {localizedLink.slice(-2) == 'en' ? 'English' : 'Portuguese'}
                </Link>
              </header>
              <Box
                className="styles_blockquote styles_blockquoteWarning"
                sx={{ mt: 3 }}
              >
                <Box>
                  This content was migrated from the{' '}
                  <Link href="https://learn.vtex.com/">
                    VTEX Learning Center
                  </Link>{' '}
                  and is no longer being actively maintained. For the most
                  accurate and up-to-date information, please check the{' '}
                  <Link href="https://developers.vtex.com/docs/app-development">
                    official documentation
                  </Link>
                  .
                </Box>
              </Box>
              <MarkdownRenderer serialized={serialized} />
            </article>
          </Box>
          <ArticlePagination
            hidePaginationNext={false}
            hidePaginationPrevious={false}
            pagination={pagination}
          />
        </Box>
        <OnThisPage />
      </Flex>
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
  const sidebarfallback = await getNavigation()
  const slug = params?.slug as string
  const slugEN = slug.replace('lang-pt', 'lang-en')

  const docs: string[] = jp.query(
    sidebarfallback,
    `$[?(@.documentation=="Learning Center")]..[?(@.type=='markdown')].slug`
  )
  if (!docs.includes(slugEN)) {
    return {
      notFound: true,
    }
  }

  const sectionSelected = 'Learning Center'
  const stepDoc = slug.includes('-step')
  const courseMatch = stepDoc
    ? slug.match(/course-(.*?)-step/)
    : slug.match(/course-(.*?)-lang/)
  const course = courseMatch ? courseMatch[1] : ''
  const language = slug.slice(-2) as 'en' | 'pt'

  let path: string | undefined
  let appendedContent = ''
  let answerSheetfiles: Array<{ path: string; name: string }> = []

  const localizedLink = `/learn/${
    language === 'en' ? slug.replace('-lang-en', '-lang-pt') : slugEN
  }`

  if (stepDoc) {
    const fileNameMatch = slug.split('-step')[1].split('-lang')[0]
    const fileName = fileNameMatch.substring(2).startsWith('-')
      ? fileNameMatch
      : fileNameMatch.substring(0, 2) + '_' + fileNameMatch.substring(2)

    path = `courses/${course}/steps/${fileName}/${language}.md`

    const answerSheetPath = `courses/${course}/steps/${fileName}/answersheet`
    answerSheetfiles = await listFilesWithinFolder(answerSheetPath)

    if (answerSheetfiles.length > 0) {
      const fileContents = await Promise.all(
        answerSheetfiles.map(async (file: { path: string; name: string }) => {
          const fileContent = await getGithubFile(
            'vtex',
            'vtex-courses',
            'master',
            file.path
          )
          const fileExtension = file.name.split('.').pop()

          return `<details>
<summary><strong>See answer sheet for <code>${file.name}</code></strong></summary>\n\n
\`\`\`${fileExtension} ${file.name}
${fileContent}
\`\`\`\n\n</details>`
        })
      )
      appendedContent = fileContents.join('\n\n')
    }
  } else {
    path = `courses/${course}/overview/${language}.md`

    const files = await listFilesWithinFolder(`courses/${course}`)
    if (files.some((file) => file.name === 'summary.json')) {
      const summaryRaw = await getGithubFile(
        'vtex',
        'vtex-courses',
        'master',
        `courses/${course}/summary.json`
      )
      const summary: Array<{
        folder: string
        title: { pt?: string; en?: string; es?: string }
        description: { pt?: string; en?: string; es?: string }
      }> = JSON.parse(summaryRaw)

      appendedContent = summary
        .map((item, index) => {
          const title = item.title?.[language] || item.title?.en || ''
          const description =
            item.description?.[language] || item.description?.en || ''
          const stepNumber = String(index + 1).padStart(1, '0')
          const folder = item.folder
          const slug = folder.replace('_', '')
          return `\n<WhatsNextCard key="${stepNumber}" title="Step ${stepNumber}: ${title}" description="${description}" linkTo="/learn/course-${course}-step${slug}-lang-${language}" />`
        })
        .join('\n')
    }
  }

  const rawContent = await getGithubFile('vtex', 'vtex-courses', 'master', path)
  const format: 'md' | 'mdx' = 'mdx'

  const titleMatch = rawContent.match(/^(#{1,6})\s+(.+)$/m)
  let documentationContent = titleMatch
    ? rawContent
        // remove o primeiro heading
        .replace(titleMatch[0], '')
        .trimStart()
        // aumenta em 1 nível todos os headings restantes
        .replace(/^(#{1,6})\s+/gm, (_match, hashes) => {
          return `${hashes}# `
        })
    : rawContent.trimStart()

  if (answerSheetfiles.length > 0 && appendedContent) {
    documentationContent =
      documentationContent + '---\n\n## Answer sheet\n\n' + appendedContent
  } else {
    documentationContent =
      documentationContent + '<Flex>' + appendedContent + '</Flex>'
  }

  const serialized = await serialize(documentationContent, {
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
  serialized.frontmatter.title = titleMatch ? titleMatch[2].trim() : null

  const flattenedSidebar = flattenJSON(sidebarfallback)

  const keyPath = getKeyByValue(flattenedSidebar, slugEN)
  const navigationSlug = keyPath ? flattenedSidebar[keyPath] : ''
  const isListed = Boolean(keyPath)
  const breadcrumbList: { slug: string; name: string; type: string }[] = [
    {
      slug: '/learn',
      name: sectionSelected,
      type: 'markdown',
    },
  ]
  const sidebarIndex = isListed
    ? sidebarfallback.findIndex(
        (item: { documentation: string }) =>
          item.documentation === sectionSelected
      )
    : 0
  if (isListed) {
    const breadcrumbs = findBreadcrumbTrail(
      sidebarfallback[sidebarIndex].categories,
      navigationSlug
    )
    breadcrumbList.push(...(breadcrumbs ?? []))
  }

  const entries = extractMarkdownEntries(sidebarfallback[sidebarIndex])
  const entryIndex = entries.findIndex(
    (entry) => entry.slug === `/learn/${slugEN}`
  )
  const pagination = {
    previousDoc: {
      slug: entries[entryIndex - 1] ? `${entries[entryIndex - 1].slug}` : null,
      name: entries[entryIndex - 1] ? entries[entryIndex - 1].name : null,
    },
    nextDoc: {
      slug: entries[entryIndex + 1] ? `${entries[entryIndex + 1].slug}` : null,
      name: entries[entryIndex + 1] ? entries[entryIndex + 1].name : null,
    },
  }
  const parentsArray: string[] = isListed
    ? breadcrumbList?.map((item) => item.slug) ?? []
    : []
  return {
    props: {
      sectionSelected,
      slug,
      localizedLink,
      path,
      serialized,
      sidebarfallback,
      parentsArray,
      breadcrumbList,
      pagination,
    },
  }
}

export default DocumentationPage
