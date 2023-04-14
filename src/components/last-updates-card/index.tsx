import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import type { ActionType, UpdateType } from './functions'
import { getAction, getUpdate } from './functions'
import { getDaysElapsed } from './../../utils/get-days-elapsed'
import { useIntl } from 'react-intl'

import styles from './styles'

export interface CardProps {
  action: {
    type: ActionType
    description: string
    date: Date
  }
  updateType: UpdateType
}

const LastUpdatesCard = ({ action, updateType }: CardProps) => {
  const { title: actionTitle, Icon: ActionIcon } = getAction(action.type)
  const intl = useIntl()
  const {
    title: updateTitle,
    description: updateDescription,
    Icon: UpdateIcon,
  } = getUpdate(updateType)

  return (
    <Link
      href={`/updates/${updateType}`}
      style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      legacyBehavior
    >
      <Flex sx={styles.cardContainer}>
        <Flex sx={styles.updateContainer}>
          <Box>
            <Text className="updateTitle" sx={styles.updateTitle}>
              <UpdateIcon sx={styles.updateIcon} />
              {updateTitle}
            </Text>
            <Text className="updateDescription" sx={styles.updateDescription}>
              {updateDescription}
            </Text>
          </Box>
        </Flex>
        <Box sx={styles.actionContainer}>
          <Flex sx={styles.actionTypeContainer}>
            <ActionIcon sx={styles.actionIcon} />
            <Text sx={styles.actionType}>{actionTitle}</Text>
          </Flex>
          <Box sx={styles.actionDescriptionContainer}>
            <Text sx={styles.actionDescription}>{action.description}</Text>
            <Text sx={styles.actionTime}>
              {`${getDaysElapsed(action.date)} ${intl.formatMessage({
                id: 'relese-note-days-elapsed',
              })}`}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default LastUpdatesCard
