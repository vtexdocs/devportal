import { Box, Flex } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import ContextProvider from 'utils/contexts/context'
import MarkdownRenderer from 'components/markdown-renderer'
import Sidebar from 'components/sidebar'

import { getSlugs, readFile } from 'utils/read-files'

import styles from 'styles/documentation-page'
import Contributors from 'components/contributors'

const markdownDir = '/public/docs/api-guides'

interface Props {
  content: string
}

const contributors = 'ABCDEFGHIJKL'.split('')

const DocumentationPage: NextPage<Props> = ({ content }) => {
  return (
    <ContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected="API Guides" />
        <Flex sx={styles.mainContainer}>
          <Box sx={styles.contentContainer}>
            <MarkdownRenderer markdown={content} />
          </Box>
          <Box sx={styles.rightContainer}>
            <Contributors contributors={contributors} />
          </Box>
        </Flex>
      </Flex>
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
