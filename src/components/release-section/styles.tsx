import { SxStyleProp } from '@vtex/brand-ui'

const outerContainer: SxStyleProp = {
  width: '100%',
  maxWidth: '800px',
  minWidth: 0,
  mx: 'auto',
  my: ['32px', '48px', '64px'],
  px: ['16px', '24px', '32px'],
  boxSizing: 'border-box',
}

const header: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  mb: ['16px', '24px'],
}

const sectionTitle: SxStyleProp = {
  fontSize: ['1.375rem', '1.5rem', '1.75rem'],
  lineHeight: ['1.875rem', '2.125rem', '2.375rem'],
  fontWeight: '400',
  color: '#142032',
}

const sectionSubtitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: ['1rem', '1.125rem'],
  lineHeight: ['1.5rem', '1.625rem'],
  fontWeight: '400',
}

const sectionDivider: SxStyleProp = {
  hr: {
    margin: 0,
    border: 'none',
    borderBottom: '1px solid #E7E9EE',
  },
}

const filtersContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: ['column', 'column', 'row'],
  alignItems: ['flex-start', 'flex-start', 'center'],
  gap: ['12px', '16px'],
  width: '100%',
  minWidth: 0,
  mt: ['16px', '24px'],
  mb: ['24px', '32px'],
}

const chipsWrapper: SxStyleProp = {
  flex: 1,
  minWidth: 0,
  width: '100%',
}

const timeline: SxStyleProp = {
  width: '100%',
  minWidth: 0,
}

const monthGroup: SxStyleProp = {
  mt: ['24px', '32px'],
  '&:first-of-type': {
    mt: 0,
  },
}

const releaseMonth: SxStyleProp = {
  fontSize: ['1rem', '1.125rem'],
  lineHeight: '1.5rem',
  color: '#142032',
  mb: ['12px', '16px'],
}

const releaseDate: SxStyleProp = {
  color: 'muted.1',
  fontSize: ['0.875rem', '1rem'],
  lineHeight: '1.5rem',
  mt: '0.25rem',
}

const seeMoreContainer: SxStyleProp = {
  display: 'flex',
  justifyContent: 'center',
  mt: ['24px', '40px'],
}

const seeMoreButton: SxStyleProp = {
  textTransform: 'none',
}

const noResults: SxStyleProp = {
  py: ['32px', '48px'],
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#A1A8B3',
}

export default {
  outerContainer,
  header,
  sectionTitle,
  sectionSubtitle,
  sectionDivider,
  filtersContainer,
  chipsWrapper,
  timeline,
  monthGroup,
  releaseMonth,
  releaseDate,
  seeMoreContainer,
  seeMoreButton,
  noResults,
}
