import { Box, Text, Link } from '@vtex/brand-ui'
import Tag from 'components/tag'
import type { TroubleshootingItem } from 'utils/typings/types'

import styles from './styles'

const TroubleshootingCard = ({
  title,
  description,
  slug,
  tags,
}: TroubleshootingItem) => {
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
          {tags &&
            tags
              .filter((moduleTag: string) => moduleTag !== '')
              .map((moduleTag: string, index) => (
                <Tag sx={styles.tag} color={'Gray'} key={`tags-${tags[index]}`}>
                  {moduleTag}
                </Tag>
              ))}
        </Box>
      </Box>
    </Link>
  )
}

export default TroubleshootingCard
