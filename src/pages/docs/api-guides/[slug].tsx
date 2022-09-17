import { useEffect, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'

import type { Item } from 'components/table-of-contents'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'

import APIGuideContextProvider from 'utils/contexts/api-guide'

import Contributors from 'components/contributors'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGFM from 'remark-gfm'

import styles from 'styles/documentation-page'

import getNavigation from 'utils/getNavigation'
import getGithubFile from 'utils/getGithubFile'
import getDocsList from 'utils/getDocsList'
// import getDocsListPreval from 'utils/getDocsList.preval'

import replaceMagicBlocks from 'utils/replaceMagicBlocks'

import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'

const DocsListGLOBAL = await getDocsList()

interface Props {
  content: string
  serialized: MDXRemoteSerializeResult
  sidebarfallback: any //eslint-disable-line
}
const contributors = 'ABCDEFGHIJKL'.split('')

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

const DocumentationPage: NextPage<Props> = ({ serialized }) => {
  const [headings, setHeadings] = useState<Item[]>([])
  useEffect(() => {
    document.querySelectorAll('h2, h3').forEach((heading) => {
      const item = {
        title: removeHTML(heading.innerHTML).replace(':', ''),
        slug: heading.id,
      }

      setHeadings((headings) => {
        if (heading.tagName === 'H2') {
          return [...headings, { ...item, children: [] }]
        }

        const { title, slug, children } = headings[headings.length - 1]
        return [
          ...headings.slice(0, -1),
          { title, slug, children: [...children, item] },
        ]
      })
    })
  }, [])

  return (
    <APIGuideContextProvider headings={headings}>
      <Flex sx={styles.mainContainer}>
        <Box sx={styles.articleBox}>
          <Box sx={styles.contentContainer}>
            <h1>{serialized.frontmatter?.title}</h1>
            <MarkdownRenderer serialized={serialized} />
          </Box>

          <Box sx={styles.bottomContributorsContainer}>
            <Box sx={styles.bottomContributorsDivider} />
            <Contributors contributors={contributors} />
          </Box>

          <FeedbackSection />
          <SeeAlsoSection cards={documentationCards} />
        </Box>
        <Box sx={styles.rightContainer}>
          <Contributors contributors={contributors} />
          <TableOfContents />
        </Box>
        <OnThisPage />
      </Flex>
    </APIGuideContextProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(await getDocsList())
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
  let DocsList
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    DocsList = DocsListGLOBAL
  } else {
    DocsList = await getDocsList()
  }

  console.log(slug)

  const path = (DocsList as any)[slug] //eslint-disable-line
  if (!path) {
    console.log('NOT FOUND')
    return {
      notFound: true,
    }
  }
  const gitHubFile = await getGithubFile(
    'vtexdocs',
    'dev-portal-content',
    'first-docs',
    path
  )

  const sidebarfallback = await getNavigation()
  let serialized
  try {
    serialized = await serialize(await replaceMagicBlocks(gitHubFile), {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGFM],
        rehypePlugins: [
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ],
        format: 'md',
      },
    })
  } catch (error) {
    return {
      notFound: true,
    }
  }

  serialized = JSON.parse(JSON.stringify(serialized))

  return {
    props: {
      serialized,
      sidebarfallback,
    },
  }
}

export default DocumentationPage
