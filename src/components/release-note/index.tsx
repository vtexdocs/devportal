import React, { useState } from 'react'
import Link from 'next/link'
import { Flex, Timeline, Text, Box, Button, IconCaret } from '@vtex/brand-ui'

import type { UpdateElement } from 'utils/typings/types'
import { getAction } from './../last-updates-card/functions'
import { getDaysElapsed } from './../../utils/get-days-elapsed'
import styles from './styles'

interface DescriptionProps {
  description: string
  releaseStatus?: boolean
}

interface ReleaseNoteProps extends UpdateElement {
  isFirst: boolean
}

const Description = ({ description, releaseStatus }: DescriptionProps) => {
  if (releaseStatus) {
    return <Text sx={styles.releaseDescription}>{description}</Text>
  } else {
    return <></>
  }
}

const ReleaseNote = ({
  slug,
  title,
  createdAt,
  description,
  actionType,
  isFirst,
}: ReleaseNoteProps) => {
  const actionValue = actionType ? getAction(actionType) : null
  const [releaseElementStatus, toggleReleaseElementStatus] = useState(isFirst)
  return (
    <Flex sx={styles.releaseContainer}>
      <Button
        size="regular"
        variant="tertiary"
        sx={styles.arrowIcon}
        icon={() => (
          <IconCaret
            direction={releaseElementStatus ? 'down' : 'right'}
            size={24}
          />
        )}
        onClick={() => {
          toggleReleaseElementStatus(!releaseElementStatus)
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
          <Link href={slug}>
            <a>
              <Text sx={styles.releaseTitle}>{title}</Text>
            </a>
          </Link>
          <Text sx={styles.releaseDate}>{`${getDaysElapsed(
            createdAt
          )} days ago`}</Text>
          <Description
            description={description}
            releaseStatus={releaseElementStatus}
          ></Description>
        </Flex>
      </Timeline.Event>
    </Flex>
  )
}

export default ReleaseNote
