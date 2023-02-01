import { Box, Text } from '@vtex/brand-ui'

import DocumentationCard, { DocumentProps } from 'components/documentation-card'
import { createDocFromUrl } from './functions'

import styles from './styles'
interface SeeAlsoSectionProps {
  docs: { url: string; title: string; category: string }[]
}

const SeeAlsoSection = ({ docs }: SeeAlsoSectionProps) => {
  const cards: DocumentProps[] = []
  docs?.forEach((doc) => {
    cards.push(createDocFromUrl(doc))
  })
  return (
    <Box sx={styles.seeAlsoContainer} data-cy="see-also-section">
      <Text sx={styles.sectionTitle}>See also</Text>
      {cards.map((card) => (
        <DocumentationCard containerType="see-also" {...card} />
      ))}
    </Box>
  )
}

export default SeeAlsoSection
