import { Box, Flex, Text } from '@vtex/brand-ui'

import DocumentationCard, { CardProps } from '../documentation-card'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'

import { getMessages } from 'utils/get-messages'

import styles from './styles'

const messages = getMessages()

const cards: CardProps[] = [
  {
    Icon: APIGuidesIcon,
    title: messages['landing_page_documentation_api_guides.title'],
    description: messages['landing_page_documentation_api_guides.description'],
    link: '/docs/api-guides',
  },
  {
    Icon: APIReferenceIcon,
    title: messages['landing_page_documentation_api_reference.title'],
    description:
      messages['landing_page_documentation_api_reference.description'],
    link: '/docs/api-reference',
  },
  {
    Icon: VTEXIOIcon,
    title: messages['landing_page_documentation_vtex_io.title'],
    description: messages['landing_page_documentation_vtex_io.description'],
    link: '/docs/vtex-io',
  },
  {
    Icon: FastStoreIcon,
    title: messages['landing_page_documentation_fast_store.title'],
    description: messages['landing_page_documentation_fast_store.description'],
    link: '/docs/fast-store',
  },
  {
    Icon: WebOpsIcon,
    title: messages['landing_page_documentation_webops.title'],
    description: messages['landing_page_documentation_webops.description'],
    link: '/docs/webops',
  },
]

const DocumentationSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_documentation.title']}
      </Text>
      <Flex sx={styles.cardsContainer}>
        {cards.map((card) => (
          <DocumentationCard key={card.title} {...card} />
        ))}
      </Flex>
    </Box>
  )
}

export default DocumentationSection
