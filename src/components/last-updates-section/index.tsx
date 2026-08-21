import { Box, Text } from '@vtex/brand-ui'

import LastUpdatesCard, { CardProps } from '../last-updates-card'
import { getMessages } from 'utils/get-messages'

import styles from './styles'
import { ActionType } from 'components/last-updates-card/functions'
import { UpdateElement } from 'utils/typings/types'

interface LastUpdatesSectionProps {
  releasesData: UpdateElement[]
}

const LastUpdatesSection = ({ releasesData }: LastUpdatesSectionProps) => {
  const messages = getMessages()
  const lastReleaseNotes: CardProps = {
    actions: (releasesData ?? []).map((releaseData) => ({
      type: releaseData?.type as ActionType,
      description: releaseData?.title || '',
      date: new Date(releaseData?.createdAt ?? new Date()),
      slug: releaseData?.slug,
    })),
    updateType: 'release-notes',
  }

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_last_updates.title']}
      </Text>
      <Box sx={styles.cardsContainer}>
        <LastUpdatesCard {...lastReleaseNotes} />
      </Box>
    </Box>
  )
}

export default LastUpdatesSection
