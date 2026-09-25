import { Text } from '@vtex/brand-ui'
import { getDaysElapsed } from 'utils/get-days-elapsed'
import { getDate } from 'components/release-section/functions'

import styles from './styles'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()

export const getReleaseNoteDateFromSlug = (slug?: string | null) => {
  if (!slug) return null
  return (
    slug
      .split('/')
      .pop()
      ?.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] ?? null
  )
}

export const getReleaseDate = (createdAt: string) => {
  const daysElapsed = getDaysElapsed(new Date(createdAt))
  return daysElapsed < 1 ? (
    <Text sx={styles.releaseDate}>Today</Text>
  ) : daysElapsed < 8 ? (
    <Text sx={styles.releaseDate}>{`${getDaysElapsed(new Date(createdAt))} ${
      messages['relese-note-days-elapsed']
    }`}</Text>
  ) : (
    getDate(createdAt, false)
  )
}
