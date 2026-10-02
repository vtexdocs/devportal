import Head from 'next/head'
import { Box, Text } from '@vtex/brand-ui'
import { Breadcrumb, WhatsNextCard } from '@vtexdocs/components'

import type { CategoryNavEntry } from 'utils/navigation-utils'
import styles from './styles'

interface ArticleIndexingProps {
  category: CategoryNavEntry
  breadcrumbList: { slug: string; name: string; type: string }[]
}

const ArticleIndexing = ({
  category,
  breadcrumbList,
}: ArticleIndexingProps) => {
  return (
    <>
      <Head>
        <title>{category.name}</title>
        <meta property="og:title" content={category.name} key="title" />
      </Head>
      <Box sx={styles.container}>
        <Box sx={styles.breadcrumb}>
          <Breadcrumb breadcrumbList={breadcrumbList} />
        </Box>
        <Text as="h1" sx={styles.title}>
          {category.name}
        </Text>
        <Box sx={styles.cardsContainer}>
          {category.children.map((child) => (
            <WhatsNextCard
              key={child.url}
              title={child.name}
              description=""
              linkTitle="See more"
              linkTo={child.url}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default ArticleIndexing
