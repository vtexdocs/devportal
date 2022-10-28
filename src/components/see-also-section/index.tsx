import { Box, Text } from '@vtex/brand-ui'

import DocumentationCard, { DocumentProps } from 'components/documentation-card'

import styles from './styles'

interface SeeAlsoSectionProps {
  cards: DocumentProps[]
}

const SeeAlsoSection = ({ cards }: SeeAlsoSectionProps) => {
  return (
    <Box sx={styles.seeAlsoContainer} data-cy="see-also-section">
      <Text sx={styles.sectionTitle}>See also</Text>
      {cards.map((card) => (
        <DocumentationCard
          key={card.title}
          containerType="see-also"
          {...card}
        />
      ))}
    </Box>
  )
}

export default SeeAlsoSection
