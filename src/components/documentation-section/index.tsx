import { Box, Flex } from '@vtex/brand-ui'

import DocumentationSectionCard from '../documentation-section-card'

import { documentationData } from 'utils/constants'

import styles from './styles'
import { useIntl } from 'react-intl'

const DocumentationSection = () => {
  const intl = useIntl()
  return (
    <Box sx={styles.sectionContainer}>
      <Flex
        sx={styles.cardsContainer}
        data-cy="documentation-section-card-list"
      >
        {documentationData(intl).map((card) => (
          <DocumentationSectionCard key={card.title} {...card} />
        ))}
      </Flex>
    </Box>
  )
}

export default DocumentationSection
