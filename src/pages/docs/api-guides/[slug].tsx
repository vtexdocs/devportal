import { useEffect, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import type { Item } from 'components/table-of-contents'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'

import APIGuideContextProvider from 'utils/contexts/api-guide'
import SidebarContextProvider from 'utils/contexts/sidebar'

import Contributors from 'components/contributors'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import OnThisPage from 'components/on-this-page'
import SeeAlsoSection from 'components/see-also-section'
import Sidebar from 'components/sidebar'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'

import { serialize } from 'next-mdx-remote/serialize'
import remarkGFM from 'remark-gfm'

import styles from 'styles/documentation-page'
import imageSize from 'rehype-img-size'

import {
  getFileList,
  getFileByPath,
  getFileSlugDict,
} from 'utils/github-getter'

interface Props {
  content: string
  serialized: string
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
    <SidebarContextProvider>
      <APIGuideContextProvider headings={headings}>
        <Flex sx={styles.container}>
          <Sidebar sectionSelected="API Guides" />
          <Flex sx={styles.mainContainer}>
            <Box sx={styles.articleBox}>
              <Box sx={styles.contentContainer}>
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
        </Flex>
      </APIGuideContextProvider>
    </SidebarContextProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const slugs = getSlugs(markdownDir, 'md')
  // const paths = slugs.map((slug) => ({
  //   params: { slug },
  // }))

  const paths = await getFileList('')

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const dictRead = await getFileSlugDict()
  const path = dictRead[slug]
  console.log(dictRead)
  const content = await getFileByPath(path)
  const serialized = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGFM],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rehypePlugins: [[imageSize as any, { dir: 'public' }]],
      format: 'md',
    },
  })

  return {
    props: {
      serialized,
    },
  }
}

export default DocumentationPage
