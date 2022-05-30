import React, { useContext } from 'react'
import { Flex, Timeline, Text, Box, Button, IconCaret } from '@vtex/brand-ui'

import type { ReleaseElement } from 'utils/typings/types'
import type { ActionType } from 'components/last-updates-card/functions'
import { getAction } from './../last-updates-card/functions'
import { getDaysElapsed } from './../../utils/get-days-elapsed'
import { Context } from 'utils/contexts/context'
import styles from './styles'

export interface ReleaseProps {
  title: string
  date: Date
  description: string
  actionType?: ActionType
}

interface DescriptionProps {
  description: string
  releaseStatus?: boolean
  first?: boolean
}

const Description = ({ description, releaseStatus }: DescriptionProps) => {
  if (releaseStatus) {
    return <Text sx={styles.releaseDescription}>{description}</Text>
  } else {
    return <></>
  }
}

const ReleaseNote = ({
  title,
  date,
  description,
  actionType,
}: ReleaseElement) => {
  const actionValue = actionType ? getAction(actionType) : null
  const { releaseElementStatus, toggleReleaseElementStatus } =
    useContext(Context)
  return (
    <Flex sx={styles.releaseContainer}>
      <Button
        size="regular"
        variant="tertiary"
        sx={
          releaseElementStatus.has(title) &&
          releaseElementStatus.get(title)?.open
            ? styles.arrowIconActive
            : styles.arrowIcon
        }
        icon={() => (
          <IconCaret
            direction={
              releaseElementStatus.has(title) &&
              releaseElementStatus.get(title)?.open
                ? 'down'
                : 'right'
            }
            size={24}
          />
        )}
        onClick={() => {
          releaseElementStatus.has(title)
            ? toggleReleaseElementStatus(
                title,
                !releaseElementStatus.get(title)?.open
              )
            : toggleReleaseElementStatus(title, true)
        }}
      />
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
          <Description
            description={description}
            releaseStatus={releaseElementStatus.get(title)?.open}
          ></Description>
        </Flex>
      </Timeline.Event>
    </Flex>
  )
}

export default ReleaseNote
