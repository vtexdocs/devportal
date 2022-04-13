import { SxStyleProp } from '@vtex/brand-ui'

const body: SxStyleProp = {
  paddingTop: '5rem',
  background: '#FFFFFF',
}

const resultContainer: SxStyleProp = {
  width: '720px',
  paddingTop: '64px',
  hr: {
    marginTop: '16px',
    marginBottom: '32px',
    borderTop: 'none',
    borderColor: '#DDDDDD',
  },
}

const resultText: SxStyleProp = {
  mb: '16px',
  fontSize: '16px',
  lineHeight: '22px',
}

export default {
  body,
  resultContainer,
  resultText,
}
