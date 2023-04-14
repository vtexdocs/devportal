import { Box, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'
import { useIntl } from 'react-intl'

import styles from './styles'

const lastReleaseNote: CardProps = {
  action: {
    type: 'deprecated',
    description: 'Deprecation of apps-graphql@2.x',
    date: new Date('03/02/2023'),
  },
  updateType: 'announcements',
}

const LastUpdatesSection = () => {
  const intl = useIntl()

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {intl.formatMessage({
          id: 'landing_page_last_updates.title',
        })}
      </Text>
      <Box sx={styles.cardsContainer}>
        <LastUpdatesCard {...lastReleaseNote} />
      </Box>
    </Box>
  )
}

export default LastUpdatesSection
