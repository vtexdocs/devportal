import { SxStyleProp } from '@vtex/brand-ui'

const resultContainer: SxStyleProp = {
  width: ['324px', '544px', '544px', '544px', '720px', '720px', '1400px'],
  paddingTop: ['32px', '32px', '32px', '64px'],
  hr: {
    marginTop: '16px',
    marginBottom: '32px',
    borderTop: 'none',
    borderColor: '#DDDDDD',
    display: ['none', 'none', 'none', 'block'],
  },
}

const resultText: SxStyleProp = {
  mb: '16px',
  fontSize: '16px',
  lineHeight: '22px',
  display: ['none', 'none', 'none', 'initial'],
}

export default {
  resultContainer,
  resultText,
}
