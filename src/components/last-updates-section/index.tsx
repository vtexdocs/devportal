import { Box, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'
import { getMessages } from 'utils/get-messages'

import styles from './styles'

const lastReleaseNote: CardProps = {
  action: {
    type: 'added',
    description:
      'Secure Proxy: An alternative option for card payment integrations',
    date: new Date('03/14/2022'),
  },
  updateType: 'release-notes',
}

const lastDocumentationUpdate: CardProps = {
  action: {
    type: 'fixed',
    description:
      'Secure Proxy: An alternative option for card payment integrations',
    date: new Date('03/11/2022'),
  },
  updateType: 'documentation-updates',
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
        <LastUpdatesCard {...lastDocumentationUpdate} />
      </Box>
    </Box>
  )
}

export default LastUpdatesSection
