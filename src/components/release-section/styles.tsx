import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  mx: ['18px', '24px', 0],
  mb: '64px',
}

const sectionTitle: SxStyleProp = {
  fontSize: '28px',
  lineHeight: '38px',
  color: '#4A4A4A',
  pt: '64px',
  mb: '8px',
}

const sectionSubtitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: '16px',
  lineHeight: '18px',
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
  mb: '28px',
}

export default {
  container,
  sectionTitle,
  sectionSubtitle,
  sectionDivider,
  releaseDate,
}
