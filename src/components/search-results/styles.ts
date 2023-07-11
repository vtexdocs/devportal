import { SxStyleProp } from '@vtex/brand-ui'

const resultContainer: SxStyleProp = {
  width: ['80%', '544px', '544px', '544px', '720px', '720px', '1400px'],
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

const paginationContainer: SxStyleProp = {
  mt: ['48px', '115px'],
  mb: '34px',
  justifyContent: 'center',
}

const paginationLink: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '20px',
  color: '#EE2565',
  cursor: 'pointer',
}

const paginationLinkDisabled: SxStyleProp = {
  ...paginationLink,
  color: 'muted.1',
}

const paginationNumber: SxStyleProp = {
  display: 'flex',
  fontSize: ['14px', '16px'],
  lineHeight: '20px',
  color: '#4A596B',
  mx: ['18px', '27px'],
}

const paginationActualNumber: SxStyleProp = {
  fontWeight: '700',
  mx: '4px',
}

const noResults: SxStyleProp = {
  justifyContent: 'center',
  alignContent: 'center',
  padding: '12px',
}

export default {
  resultContainer,
  resultText,
  paginationContainer,
  paginationLink,
  paginationLinkDisabled,
  paginationNumber,
  paginationActualNumber,
  noResults,
}
