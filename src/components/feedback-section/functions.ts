import { SxStyleProp } from '@vtex/brand-ui'
import { ModalProps } from 'components/feedback-modal'
import styles from './styles'

export const setButtonStyle = (
  feedback: boolean | undefined,
  modalState: ModalProps,
  like: boolean
): SxStyleProp => {
  const buttonactive =
    modalState.modalOpen && like === modalState.liked
      ? styles.buttonActive
      : styles.button
  const ml = like
    ? ['0', '8px']
    : feedback === like
    ? ['0', '8px']
    : ['32px', '16px']
  if (feedback === undefined) return { ...styles.box, ...buttonactive, ml }
  if (like === feedback) return { ...styles.box, ...styles.selectedButton, ml }
  return { display: 'none !important' }
}
