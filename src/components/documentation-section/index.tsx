import { Box, Flex, Text } from '@vtexdocs/brand-ui'

import DocumentationSectionCard from '../documentation-section-card'

import { messages } from 'utils/constants'
import { documentationData as cards } from 'utils/constants'

import styles from './styles'

const DocumentationSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_documentation.title']}
      </Text>
      <Flex
        sx={styles.cardsContainer}
        data-cy="documentation-section-card-list"
      >
        {cards.map((card) => (
          <DocumentationSectionCard key={card.title} {...card} />
        ))}
      </Flex>
    </Box>
  )
}

export default DocumentationSection
