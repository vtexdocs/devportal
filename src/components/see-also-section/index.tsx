import { Box, Text } from '@vtex/brand-ui'

import DocumentationCard, { DocumentProps } from 'components/documentation-card'
import { createDocFromUrl } from './functions'

import styles from './styles'
interface SeeAlsoSectionProps {
  urls: string[]
}

const SeeAlsoSection = ({ urls }: SeeAlsoSectionProps) => {
  const cards: DocumentProps[] = []
  urls?.forEach((url) => {
    cards.push(createDocFromUrl(url))
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
