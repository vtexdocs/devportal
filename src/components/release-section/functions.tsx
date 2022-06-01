import { Text } from '@vtex/brand-ui'
import styles from './styles'

export const compareDates = (
  currentUpdate: string,
  previousUpdate: string
): boolean => {
  const current = new Date(currentUpdate)
  const previous = new Date(previousUpdate)

  return (
    current.getFullYear() !== previous.getFullYear() ||
    current.getMonth() !== previous.getMonth()
  )
}

export const getDate = (currentUpdate: string) => {
  const current = new Date(currentUpdate)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthIndex = current.getMonth()
  const year = current.getFullYear()

  return <Text sx={styles.releaseDate}>{month[monthIndex] + ', ' + year}</Text>
}
