import { Box, Flex, Text } from '@vtex/brand-ui'

import DocumentationCard from '../documentation-card'

import { messages } from 'utils/constants'
import { documentationData as cards } from 'utils/constants'

import styles from './styles'

const DocumentationSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_documentation.title']}
      </Text>
      <Flex sx={styles.cardsContainer} data-cy="documentation-card-list">
        {cards.map((card) => (
          <DocumentationCard key={card.title} {...card} />
        ))}
      </Flex>
    </Box>
  )
}

export default DocumentationSection
