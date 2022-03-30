import { Box, Flex, Text } from '@vtex/brand-ui'

import DocumentationCard, { CardProps } from '../documentation-card'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'

import styles from './styles'

const cards: CardProps[] = [
  {
    Icon: APIGuidesIcon,
    title: 'API Guides',
    description: 'Explore the capabilities of our Rest APIs',
    link: '/docs/api-guides',
  },
  {
    Icon: APIReferenceIcon,
    title: 'API Reference',
    description: "Extend VTEX's platform to fit your business",
    link: '/docs/api-reference',
  },
  {
    Icon: VTEXIOIcon,
    title: 'VTEX IO',
    description: 'Quickly build high-performance stores and IO apps',
    link: '/docs/vtex-io',
  },
  {
    Icon: FastStoreIcon,
    title: 'FastStore',
    description: 'Build your storefront with e-commerce components',
    link: '/docs/fast-store',
  },
  {
    Icon: WebOpsIcon,
    title: 'WebOps',
    description: "Improve team's productivity by automating processes",
    link: '/docs/webops',
  },
]

const DocumentationSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>Documentation</Text>
      <Flex sx={styles.cardsContainer}>
        {cards.map((card) => (
          <DocumentationCard key={card.title} {...card} />
        ))}
      </Flex>
    </Box>
  )
}

export default DocumentationSection
