import { useEffect, useState } from 'react'
import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import type { CardProps } from 'components/documentation-card'
import type { Item } from 'components/table-of-contents'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'

import APIGuideContextProvider from 'utils/contexts/api-guide'
import ContextProvider from 'utils/contexts/context'

import Contributors from 'components/contributors'
import MarkdownRenderer from 'components/markdown-renderer'
import FeedbackSection from 'components/feedback-section'
import SeeAlsoSection from 'components/see-also-section'
import Sidebar from 'components/sidebar'
import TableOfContents from 'components/table-of-contents'

import { removeHTML } from 'utils/string-utils'
import { getSlugs, readFile } from 'utils/read-files'

import styles from 'styles/documentation-page'

interface Props {
  content: string
}

const markdownDir = '/public/docs/api-guides'

const contributors = 'ABCDEFGHIJKL'.split('')

const documentationCards: CardProps[] = [
  {
    title: 'Billing Options',
    description: 'API Guides',
    to: '/docs/api-guides/billing-options',
    Icon: APIGuidesIcon,
    containerType: 'see-also',
  },
  {
    title:
      'Catalog API - A long documentation title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'API Reference',
    to: '/docs/api-reference/catalog',
    Icon: APIReferenceIcon,
    containerType: 'see-also',
  },
]

const DocumentationPage: NextPage<Props> = ({ content }) => {
  const [headings, setHeadings] = useState<Item[]>([])

  useEffect(() => {
    document.querySelectorAll('h2, h3').forEach((heading) => {
      const item = {
        title: removeHTML(heading.innerHTML),
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
    <ContextProvider>
      <APIGuideContextProvider headings={headings}>
        <Flex sx={styles.container}>
          <Sidebar sectionSelected="API Guides" />
          <Flex sx={styles.mainContainer}>
            <Box sx={styles.articleBox}>
              <Box sx={styles.contentContainer}>
                <MarkdownRenderer markdown={content} />
              </Box>

              <FeedbackSection />
              <SeeAlsoSection cards={documentationCards} />
            </Box>
            <Box sx={styles.rightContainer}>
              <Contributors contributors={contributors} />
              <TableOfContents />
            </Box>
          </Flex>
        </Flex>
      </APIGuideContextProvider>
    </ContextProvider>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getSlugs(markdownDir, 'md')
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug as string
  const content = readFile(markdownDir, slug, 'md')

  return {
    props: {
      content,
    },
  }
}

export default DocumentationPage
