import { SxStyleProp } from '@vtex/brand-ui'

const chipButtonWrapper: SxStyleProp = {
  display: 'flex',
  position: 'relative',
  userSelect: 'none',
  width: '100%',
  minWidth: 0,
  alignItems: 'center',
}

const chipsContainer: SxStyleProp = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollBehavior: 'smooth',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minWidth: 0,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

const optionsContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '8px',
}

const chip: (active: boolean) => SxStyleProp = (active) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  height: '32px',
  minHeight: '32px',
  px: '12px',
  py: 0,
  borderRadius: '16px',
  border: `1px solid ${active ? '#D8D8E3' : '#E7E9EE'}`,
  backgroundColor: active ? '#F8F7FC' : '#FFFFFF',
  cursor: 'pointer',
  minWidth: 'max-content',
  ':hover': {
    borderColor: '#3A4F66',
    '.filter-chip-title': {
      color: '#4A596B',
    },
  },
})

const chipIcon: SxStyleProp = {
  width: '14px',
  height: '14px',
  minWidth: '14px',
  minHeight: '14px',
  flexShrink: 0,
}

const chipTitle: (active: boolean) => SxStyleProp = (active) => ({
  fontSize: '13px',
  fontWeight: active ? '600' : '500',
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  color: '#4A596B',
  transition: 'color 0.15s ease-out',
})

const chipCount: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: '6px',
  minWidth: '20px',
  height: '18px',
  fontSize: '11px',
  fontWeight: '500',
  lineHeight: '16px',
  borderRadius: '24px',
  backgroundColor: '#EDEAF6',
  color: '#4A596B',
}

const arrowButton: SxStyleProp = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50%',
  fontWeight: '600',
  fontSize: '16px',
  padding: '0 8px',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
}

const rightArrowBlur: SxStyleProp = {
  maxWidth: '40px',
  minWidth: '20px',
  width: '5vw',
  background:
    'linear-gradient(to left, rgba(255,255,255,80%) 30%, rgba(255, 255, 255, 1%))',
}

const leftArrowBlur: SxStyleProp = {
  maxWidth: '40px',
  minWidth: '20px',
  width: '5vw',
  background:
    'linear-gradient(to right, rgba(255,255,255,80%) 30%, rgba(255, 255, 255, 1%))',
}

const leftArrowContainer: SxStyleProp = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  pointerEvents: 'none',
  button: {
    pointerEvents: 'auto',
  },
}

const rightArrowContainer: SxStyleProp = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2,
  pointerEvents: 'none',
  button: {
    pointerEvents: 'auto',
  },
}

export default {
  leftArrowBlur,
  rightArrowBlur,
  arrowButton,
  chipsContainer,
  optionsContainer,
  chipButtonWrapper,
  leftArrowContainer,
  rightArrowContainer,
  chip,
  chipIcon,
  chipTitle,
  chipCount,
}
