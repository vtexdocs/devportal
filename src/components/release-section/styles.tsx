import { SxStyleProp } from '@vtex/brand-ui'

const outerContainer: SxStyleProp = {
  mx: 'auto',
  mb: '64px',
  width: ['324px', '544px', '544px', '544px', '720px', '720px', '1400px'],
}

const innerContainer: SxStyleProp = {
  width: '100%',
}

const sectionTitle: SxStyleProp = {
  fontSize: ['20px', '28px'],
  lineHeight: ['30px', '38px'],
  color: '#4A4A4A',
  pt: '64px',
  mb: '8px',
}

const sectionSubtitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '18px'],
  mb: '24px',
}

const sectionDivider: SxStyleProp = {
  hr: {
    border: '1px solid #E7E9EE',
    borderTop: 'none',
    mb: '32px',
  },
}

const releaseDate: SxStyleProp = {
  fontSize: ['14px', '18px'],
  lineHeight: ['20px', '24px'],
  mb: ['16px', '24px'],
}

const releaseCreationDay: SxStyleProp = {
  color: 'muted.1',
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '22px'],
}

export default {
  outerContainer,
  innerContainer,
  sectionTitle,
  sectionSubtitle,
  sectionDivider,
  releaseDate,
  releaseCreationDay,
}
