import { Box, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'
import { getMessages } from 'utils/get-messages'

import styles from './styles'

const lastReleaseNote: CardProps = {
  action: {
    type: 'info',
    description:
      'Temporary freeze on automatic app distribution in preparation for Black Friday 2023',
    date: new Date('11/17/2023'),
  },
  updateType: 'release-notes',
}

const LastUpdatesSection = () => {
  const messages = getMessages()

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_last_updates.title']}
      </Text>
      <Box sx={styles.cardsContainer}>
        <LastUpdatesCard {...lastReleaseNote} />
      </Box>
    </Box>
  )
}

export default LastUpdatesSection
