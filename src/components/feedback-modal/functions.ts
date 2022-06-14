import { SxStyleProp } from '@vtex/brand-ui'
import { ModalProps } from '.'
import styles from './styles'

export const setModalPosition = (modalState: ModalProps): SxStyleProp => {
  const { top, left, width } = document
    .getElementsByClassName(
      `feedback-button-${modalState.feedback ? 'positive' : 'negative'}`
    )[0]
    .getBoundingClientRect()
  const modalWidth = 320,
    modalHeight = 180
  const modalLeft = ['initial', `${left - (modalWidth - width) / 2 + 8}px`]
  const modalTop = ['initial', `${top - modalHeight}px`]

  const modalBox: SxStyleProp = {
    ...styles.box,
    position: 'absolute',
    left: modalLeft,
    top: modalTop,
  }
  return modalBox
}
