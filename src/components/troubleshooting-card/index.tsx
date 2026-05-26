import { Box, Text, Link } from '@vtex/brand-ui'
import Tag from 'components/tag'
import type { TroubleshootingItem } from 'utils/typings/types'

import styles from './styles'

const TroubleshootingCard = ({
  title,
  description,
  slug,
  tags,
  domainFilters,
  symptomFilters,
}: TroubleshootingItem) => {
  const resolvedSymptomFilters = symptomFilters?.filter(Boolean) ?? []
  const resolvedDomainFilters = domainFilters?.filter(Boolean) ?? []
  const fallbackTags = tags?.filter(Boolean) ?? []

  return (
    <Link href={`/docs/troubleshooting/${slug}`} sx={styles.container}>
      <Box>
        <Text sx={styles.title} className="title">
          {title}
        </Text>
        <Text sx={styles.description} className="description">
          {description}
        </Text>
        <Box sx={styles.tagsContainer}>
          {resolvedSymptomFilters.length > 0 && (
            <Box sx={styles.tagGroup}>
              {resolvedSymptomFilters.map((filter) => (
                <Tag sx={styles.tag} color="Blue" key={`symptom-${filter}`}>
                  {filter}
                </Tag>
              ))}
            </Box>
          )}
          {resolvedDomainFilters.length > 0 && (
            <Box sx={styles.tagGroup}>
              {resolvedDomainFilters.map((filter) => (
                <Tag sx={styles.tag} color="Gray" key={`domain-${filter}`}>
                  {filter}
                </Tag>
              ))}
            </Box>
          )}
          {!resolvedSymptomFilters.length &&
            !resolvedDomainFilters.length &&
            fallbackTags.map((moduleTag) => (
              <Tag sx={styles.tag} color="Gray" key={`tags-${moduleTag}`}>
                {moduleTag}
              </Tag>
            ))}
        </Box>
      </Box>
    </Link>
  )
}

export default TroubleshootingCard
