import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

const subscribeNewsletterContainer = (containerType: string) => {
  const containerCharacteristics =
    containerType === 'io'
      ? {
          width: ['360px', '544px', '544px', '544px', '720px'],
          height: ['162px', '176px', '176px', '176px', '154px'],
          background: '#F8F7FC',
          border: ['none', '1px solid #E7E9EE'],
          borderRadius: ['0px', '8px'],

          mt: '24px',
        }
      : {
          height: ['211px', '254px', '254px', '254px', '236px'],
          width: '100%',

          mb: ['24px', '0px'],
        }

  const container: SxStyleProp = {
    ...containerCharacteristics,
    ...styles.subscribeNewsletterContainer,
  }

  return container
}

const textContainer = (containerType: string) => {
  const containerCharacteristics =
    containerType === 'io'
      ? {
          textAlign: ['flex-start', 'center'],

          marginLeft: ['18px', '10px'],
          marginRight: '10px',

          '.title': {
            fontSize: ['16px', '18px'],
            lineHeight: ['22px'],
          },

          '.subtitle': {
            fontSize: ['12px', '16px'],
            lineHeight: ['16px', '22px'],
          },
        }
      : {
          textAlign: ['center'],
          width: ['328px', '512px', '704px'],

          '.title': {
            fontSize: ['16px', '18px', '18px', '22px'],
            lineHeight: ['22px', '30px', '30px', '32px'],
          },

          '.subtitle': {
            fontSize: ['12px', '16px'],
            lineHeight: ['16px', '18px'],
          },
        }

  const container: SxStyleProp = {
    ...containerCharacteristics,
    ...styles.textContainer,
  }

  return container
}

export { subscribeNewsletterContainer, textContainer }
