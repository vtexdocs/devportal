import { Text } from '@vtex/brand-ui'
import styles from './styles'

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

export const getDate = (currentUpdate: string, dataGroup: boolean) => {
  const current = new Date(currentUpdate)
  const monthIndex = current.getMonth()
  const year = current.getFullYear()
  const day = current.getDate()

  return (
    <Text sx={dataGroup ? styles.releaseDate : styles.releaseCreationDay}>
      {month[monthIndex] + ', ' + (dataGroup ? year : day)}
    </Text>
  )
}
