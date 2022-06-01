import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

const cardContainer = (containerType: string) => {
  const containerWidth =
    containerType === 'dropdown'
      ? ['308px', '442px', '444px', '464px']
      : ['324px', '544px']

  const textWidth =
    containerType === 'dropdown'
      ? ['276px', '410px', '412px', '432px']
      : ['276px', '496px', '496px', '512px']

  const cardContainer: SxStyleProp = {
    ...styles.cardContainer,
    width: containerWidth,

    '.title, .description': {
      maxWidth: textWidth,
    },
  }

  return cardContainer
}

const cardTitle = (containerType: string) => {
  const titleAttributes =
    containerType === 'see-also'
      ? { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }
      : {}

  const cardTitle: SxStyleProp = {
    ...styles.title,
    ...titleAttributes,
  }

  return cardTitle
}

export { cardContainer, cardTitle }
