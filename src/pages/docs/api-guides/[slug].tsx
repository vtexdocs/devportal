import { Box } from '@vtex/brand-ui'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import MarkdownRenderer from 'components/markdown-renderer'

import { getSlugs, readFile } from 'utils/read-files'

import styles from 'styles/documentation-page'

const markdownDir = '/public/docs/api-guides'

interface Props {
  content: string
}

const DocumentationPage: NextPage<Props> = ({ content }) => {
  return (
    <Box sx={styles.container}>
      <MarkdownRenderer markdown={content} />
    </Box>
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
