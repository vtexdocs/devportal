import { SxStyleProp } from '@vtex/brand-ui'

const releaseContainer: SxStyleProp = {
  mb: ['1.25rem', '2rem'],
  width: '100%',
  minWidth: 0,
  alignItems: 'flex-start',
  '&:hover .release-title p': {
    color: '#000711',
  },
}

const actionType: SxStyleProp = {
  fontSize: ['0.875rem', '1rem'],
  ml: ['-0.25rem', '-0.5rem'],
  mb: '-0.75rem',
}

const actionIconWrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
}

const actionIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  minWidth: '16px',
  minHeight: '16px',
}

const content: SxStyleProp = {
  flexDirection: 'column',
  ml: ['-0.25rem', '-0.5rem'],
  mb: ['-1.5rem', '-2rem'],
  minWidth: 0,
}

const releaseDate: SxStyleProp = {
  color: 'muted.1',
  fontSize: ['0.875rem', '1rem'],
  lineHeight: '1.5rem',
  mt: '0.25rem',
}

const titleText: SxStyleProp = {
  color: '#4A596B',
  fontSize: ['1rem', '1.125rem'],
  lineHeight: ['1.375rem', '1.5rem'],
  cursor: 'pointer',
  m: 0,
  overflowWrap: 'anywhere',
  transition: 'color 0.15s ease-out',
}

const releaseTitle: SxStyleProp = {
  '& p': titleText,
}

const releaseTitleActive: SxStyleProp = {
  '& p': {
    ...titleText,
    color: '#142032',
  },
}

const releaseDescription: SxStyleProp = {
  color: '#4A4A4A',
  fontSize: ['0.9375rem', '1rem'],
  lineHeight: ['1.375rem', '1.5rem'],
  mt: '0.5rem',
  overflowWrap: 'anywhere',
  p: {
    m: '0',
  },
}

const arrowIcon: SxStyleProp = {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  flexShrink: 0,
  alignSelf: 'flex-start',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  width: '24px',
  p: 0,
  m: 0,
  cursor: 'pointer',
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
  flex: 1,
  minWidth: 0,
  alignItems: 'flex-start',
  '& > :first-of-type': {
    width: '24px',
    minWidth: '24px',
    alignItems: 'center',
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
  actionIconWrapper,
  content,
  releaseTitle,
  releaseTitleActive,
  releaseDate,
  releaseDescription,
  arrowIcon,
  arrowIconActive,
  timeLineBar,
}
