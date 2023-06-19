import React, { useState } from 'react'
import Link from 'next/link'
import {
  Flex,
  Timeline,
  Text,
  Box,
  Button,
  IconCaret,
} from '@vtexdocs/brand-ui'

import type { UpdateElement } from 'utils/typings/types'
import { getAction } from './../last-updates-card/functions'
import { getReleaseDate } from './functions'
import styles from './styles'
import ReactMarkdown from 'react-markdown'

interface DescriptionProps {
  description: string
  releaseStatus?: boolean
}

interface ReleaseNoteProps extends UpdateElement {
  isFirst: boolean
}

const Description = ({ description, releaseStatus }: DescriptionProps) => {
  if (releaseStatus) {
    return (
      <Box sx={styles.releaseDescription}>
        <ReactMarkdown>{description}</ReactMarkdown>
      </Box>
    )
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
  const [onHover, setOnHover] = useState(false)

  const handleMouseOver = () => {
    setOnHover(true)
  }

  const handleMouseOut = () => {
    setOnHover(false)
  }

  return (
    <Flex sx={styles.releaseContainer}>
      <Button
        size="regular"
        variant="tertiary"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
        sx={
          releaseElementStatus || onHover
            ? styles.arrowIconActive
            : styles.arrowIcon
        }
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
        sx={styles.timeLineBar}
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
          <Link href={`release-notes/${slug}`} legacyBehavior>
            <Text
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseOut}
              sx={
                releaseElementStatus || onHover
                  ? styles.releaseTitleActive
                  : styles.releaseTitle
              }
            >
              {title}
            </Text>
          </Link>
          {getReleaseDate(createdAt)}
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
