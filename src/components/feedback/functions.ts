import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

export const buttonStyle = (
  feedbackSelected: boolean | undefined,
  like: boolean
): SxStyleProp => {
  if (feedbackSelected === undefined) return { ...styles.box, ...styles.button }
  if (like === feedbackSelected)
    return { svg: { ml: '8px' }, ...styles.box, ...styles.selectedButton }
  return { display: 'none !important' }
}
