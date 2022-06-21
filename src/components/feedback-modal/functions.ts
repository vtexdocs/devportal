import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

const modalWidth = 320,
  modalHeight = 180

export const modalPositionStyle = (
  chosenButtonRef: HTMLElement | undefined
): SxStyleProp => {
  if (!chosenButtonRef) return false

  const {
    top: buttonTop,
    bottom: buttonBottom,
    left: buttonLeft,
    width: buttonWidth,
  } = chosenButtonRef.getBoundingClientRect()

  const modalLeft = [
    'initial',
    `${buttonLeft - (modalWidth - buttonWidth) / 2}px`,
  ]
  const modalTop = [
    'initial',
    buttonTop > modalHeight
      ? `${buttonTop - modalHeight}px`
      : `${buttonBottom}px`,
  ]

  const modalBox: SxStyleProp = {
    ...styles.box,
    position: 'absolute',
    left: modalLeft,
    top: modalTop,
  }
  return modalBox
}

export const arrowDirectionStyle = (
  chosenButtonRef: HTMLElement | undefined,
  element: 'arrow' | 'card'
): SxStyleProp | false => {
  if (!chosenButtonRef) return false

  const { top: buttonTop } = chosenButtonRef.getBoundingClientRect()

  if (buttonTop >= modalHeight) return false

  if (element === 'arrow') {
    const arrowDirection: SxStyleProp = {
      ...styles.arrow,
      transform: 'rotate(180deg)',
      top: '0',
      bottom: 'initial',
    }
    return arrowDirection
  }

  const cardPosition: SxStyleProp = {
    ...styles.card,
    mt: '14px',
  }

  return cardPosition
}
