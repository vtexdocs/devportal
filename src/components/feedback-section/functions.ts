import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

export const setButtonStyle = (
  feedbackSelected: boolean | undefined,
  like: boolean
): SxStyleProp => {
  const ml = like ? ['0', '8px'] : ['32px', '16px']
  if (feedbackSelected === undefined)
    return { ...styles.box, ...styles.button, ml }
  if (like === feedbackSelected)
    return { svg: { ml: '8px' }, ...styles.box, ...styles.selectedButton, ml }
  return { display: 'none !important' }
}
