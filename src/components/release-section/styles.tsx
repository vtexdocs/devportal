import { SxStyleProp } from '@vtex/brand-ui'

const outerContainer: SxStyleProp = {
  mx: 'auto',
  my: '64px',
  width: ['324px', '544px', '544px', '544px', '720px', '720px', '1400px'],
}

const sectionTitle: SxStyleProp = {
  fontSize: '1.75rem',
  lineHeight: '2.375rem',
  color: '#4A4A4A',
  mb: '0.5rem',
}

const sectionSubtitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: '1.125rem',
  lineHeight: '1.125rem',
  pb: '1.5rem',
}

const sectionDivider: SxStyleProp = {
  hr: {
    border: '1px solid #E7E9EE',
    borderTop: 'none',
    mb: '1.5remm',
  },
}

const releaseMonth: SxStyleProp = {
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  mb: '1.5rem',
}

const releaseDate: SxStyleProp = {
  color: 'muted.1',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  mt: '0.25rem',
}

export default {
  outerContainer,
  sectionTitle,
  sectionSubtitle,
  sectionDivider,
  releaseMonth,
  releaseDate,
}
