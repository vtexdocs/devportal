import { Box, Text } from '@vtex/brand-ui'

import DocumentationCard, { CardProps } from 'components/documentation-card'

import styles from './styles'

interface SeeAlsoSectionProps {
  cards: CardProps[]
}

const SeeAlsoSection = ({ cards }: SeeAlsoSectionProps) => {
  return (
    <Box sx={styles.seeAlsoContainer} data-cy="see-also-section">
      <Text sx={styles.sectionTitle}>See also</Text>
      {cards.map((card) => (
        <DocumentationCard {...card} />
      ))}
    </Box>
  )
}

export default SeeAlsoSection
