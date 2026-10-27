import { Box, Text } from '@vtex/brand-ui'
import { SectionCard, SectionCardGrid } from '@vtexdocs/components'

import { messages } from 'utils/constants'
import { documentationData as cards } from 'utils/constants'

import styles from './styles'

const DocumentationSection = () => {
  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_documentation.title']}
      </Text>
      <SectionCardGrid data-cy="documentation-section-card-list">
        {cards.map((card) => (
          <SectionCard
            key={card.title}
            {...card}
            ctaLabel={
              messages[
                'landing_page_documentation_documentation_card.learnMoreText'
              ]
            }
          />
        ))}
      </SectionCardGrid>
    </Box>
  )
}

export default DocumentationSection
