import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

export const setButtonStyle = (
  feedback: boolean | undefined,
  like: boolean
): SxStyleProp => {
  const ml = like
    ? ['0', '8px']
    : feedback === like
    ? ['0', '8px']
    : ['32px', '16px']
  if (feedback === undefined) return { ...styles.box, ...styles.button, ml }
  if (like === feedback) return { ...styles.box, ...styles.selectedButton, ml }
  return { display: 'none !important' }
}
