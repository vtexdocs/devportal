import { Flex, Timeline, Text, Box } from '@vtex/brand-ui'

import type { ReleaseElement } from 'utils/typings/types'
import type { ActionType } from 'components/last-updates-card/functions'
import { getAction } from './../last-updates-card/functions'
import { getDaysElapsed } from './../../utils/get-days-elapsed'
import styles from './styles'

export interface ReleaseProps {
  title: string
  date: Date
  description: string
  actionType?: ActionType
}

const ReleaseNote = ({
  title,
  date,
  description,
  actionType,
}: ReleaseElement) => {
  const actionValue = actionType ? getAction(actionType) : null
  return (
    <Box sx={styles.releaseContainer}>
      <Timeline.Event
        title={<Text sx={styles.actionType}>{actionValue?.title}</Text>}
        icon={
          actionValue ? (
            <Box>
              <actionValue.Icon sx={styles.actionIcon} />
            </Box>
          ) : null
        }
      >
        <Flex sx={styles.content}>
          <Text sx={styles.releaseTitle}>{title}</Text>
          <Text sx={styles.releaseDate}>{`${getDaysElapsed(
            date
          )} days ago`}</Text>
          <Text sx={styles.releaseDescription}>{description}</Text>
        </Flex>
      </Timeline.Event>
    </Box>
  )
}

export default ReleaseNote
