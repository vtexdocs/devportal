import { SxStyleProp } from '@vtex/brand-ui'

const releaseContainer: SxStyleProp = {
  mb: '2rem',
  width: '100%',
}

const actionType: SxStyleProp = {
  fontSize: '1rem',
  ml: '-0.5rem',
  mb: '-0.75rem',
}

const actionIcon: SxStyleProp = {
  maxWidth: '1rem',
  maxHeight: '1rem',
  width: '1rem',
  height: '1rem',
}

const content: SxStyleProp = {
  flexDirection: 'column',
  ml: '-0.5rem',
  mb: '-2rem',
}

const releaseDate: SxStyleProp = {
  color: 'muted.1',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  mt: '0.25rem',
}

const releaseTitle: SxStyleProp = {
  color: '#4A596B',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  cursor: 'pointer',
}

const releaseTitleActive: SxStyleProp = {
  ...releaseTitle,
  color: '#0C1522',
}

const releaseDescription: SxStyleProp = {
  color: '#4A4A4A',
  fontSize: '1rem',
  lineHeight: '1.375rem',
  mt: '0.5rem',
  p: {
    m: '0',
  },
}

const arrowIcon: SxStyleProp = {
  pb: '1.5rem',
  pr: '0.25rem',
  pl: 0,
  color: 'muted.0',
  ':hover': {
    color: '#0C1522',
  },
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: '#0C1522',
}

const timeLineBar: SxStyleProp = {
  '& > :first-of-type': {
    '& > :nth-of-type(2)': {
      width: '1px',
      borderRadius: '0.5rem',
    },
  },
}

export default {
  releaseContainer,
  actionType,
  actionIcon,
  content,
  releaseTitle,
  releaseTitleActive,
  releaseDate,
  releaseDescription,
  arrowIcon,
  arrowIconActive,
  timeLineBar,
}
