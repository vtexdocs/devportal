import { Box, Text, Link } from '@vtex/brand-ui'

import type { TroubleshootingItem } from 'utils/typings/types'

import styles from './styles'

const TroubleshootingCard = ({
  title,
  description,
  slug,
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
      </Box>
    </Link>
  )
}

export default TroubleshootingCard
