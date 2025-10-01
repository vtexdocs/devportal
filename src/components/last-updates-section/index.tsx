import { Box, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'
import { getMessages } from 'utils/get-messages'

import styles from './styles'
import { ActionType } from 'components/last-updates-card/functions'
import { UpdateElement } from 'utils/typings/types'

interface LastUpdatesSectionProps {
  releaseData: UpdateElement
}

const LastUpdatesSection = ({ releaseData }: LastUpdatesSectionProps) => {
  const messages = getMessages()
  const date = releaseData?.slug?.split('-').slice(0, 3).join('-')
  const lastReleaseNote: CardProps = {
    action: {
      type: releaseData?.type as ActionType,
      description: releaseData?.title || '',
      date: new Date(date ?? new Date()),
    },
    updateType: 'release-notes',
  }

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
