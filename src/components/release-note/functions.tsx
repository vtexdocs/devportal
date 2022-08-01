import { Text } from '@vtex/brand-ui'
import { getDaysElapsed } from 'utils/get-days-elapsed'
import { getDate } from 'components/release-section/functions'

import styles from './styles'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()

export const getReleaseDate = (createdAt: string) => {
  const daysElapsed = getDaysElapsed(new Date(createdAt))
  return daysElapsed < 8 ? (
    <Text sx={styles.releaseDate}>{`${getDaysElapsed(new Date(createdAt))} ${
      messages['relese-note-days-elapsed']
    }`}</Text>
  ) : (
    getDate(createdAt, false)
  )
}
