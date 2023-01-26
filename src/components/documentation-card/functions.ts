import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

const cardContainer = (containerType: string) => {
  const containerWidth =
    containerType === 'dropdown'
      ? ['308px', '442px', '444px', '480px']
      : containerType === 'mobile'
      ? '100%'
      : ['324px', '544px', '544px', '544px', '544px', '720px', '1400px']

  const textWidth =
    containerType === 'dropdown'
      ? ['276px', '410px', '412px', '432px']
      : containerType === 'mobile'
      ? '90%'
      : ['276px', '496px', '496px', '496px', '496px', '672px', '1352px']

  const cardContainer: SxStyleProp = {
    ...styles.cardContainer,
    width: containerWidth,

    '.title, .description': {
      width: textWidth,
    },
  }

  return cardContainer
}

const titleContainer = (containerType: string) => {
  const marginBottom =
    containerType === 'dropdown' ? ['5px', '5px', '5px', '1px'] : '8px'

  const titleContainer: SxStyleProp = {
    ...styles.titleContainer,
    marginBottom,
  }

  return titleContainer
}

const cardTitle = (containerType: string) => {
  const titleAttributes =
    containerType === 'see-also'
      ? {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontSize: '18px',
          lineHeight: '24px',
        }
      : {
          fontSize: '16px',
          lineHeight: '22px',
        }

  const cardTitle: SxStyleProp = {
    ...styles.title,
    ...titleAttributes,
  }

  return cardTitle
}

export { cardContainer, cardTitle, titleContainer }
