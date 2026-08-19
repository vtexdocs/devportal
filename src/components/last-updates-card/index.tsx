import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import type { ActionType, UpdateType } from './functions'
import { getAction, getUpdate } from './functions'
import { getDaysElapsed } from './../../utils/get-days-elapsed'

import styles from './styles'

export interface CardAction {
  type: ActionType
  description: string
  date: Date
  slug?: string
}

export interface CardProps {
  actions: CardAction[]
  updateType: UpdateType
}

const LastUpdatesCard = ({ actions, updateType }: CardProps) => {
  const {
    title: updateTitle,
    description: updateDescription,
    Icon: UpdateIcon,
  } = getUpdate(updateType)

  return (
    <Flex sx={styles.cardContainer}>
      <Box sx={styles.updateContainer}>
        <Link
          href={`/updates/${updateType}`}
          style={{ textDecoration: 'none' }}
        >
          <Box>
            <Text className="updateTitle" sx={styles.updateTitle}>
              <UpdateIcon sx={styles.updateIcon} />
              {updateTitle}
            </Text>
            <Text className="updateDescription" sx={styles.updateDescription}>
              {updateDescription}
            </Text>
          </Box>
        </Link>
      </Box>
      <Box sx={styles.actionContainer}>
        {actions.map((action) => {
          const actionValue = getAction(action.type)
          if (!actionValue) return null

          const { title: actionTitle, Icon: ActionIcon } = actionValue
          const href = action.slug
            ? `/updates/${updateType}/${action.slug}`
            : `/updates/${updateType}`

          return (
            <Link
              key={action.slug || action.description}
              href={href}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Box sx={styles.actionItem}>
                <Flex sx={styles.actionTypeContainer}>
                  <ActionIcon sx={styles.actionIcon} />
                  <Text sx={styles.actionType}>{actionTitle}</Text>
                </Flex>
                <Box sx={styles.actionDescriptionContainer}>
                  <Text
                    className="actionDescription"
                    sx={styles.actionDescription}
                  >
                    {action.description}
                  </Text>
                  <Text sx={styles.actionTime}>
                    {`${getDaysElapsed(action.date)} days ago`}
                  </Text>
                </Box>
              </Box>
            </Link>
          )
        })}
      </Box>
    </Flex>
  )
}

export default LastUpdatesCard
