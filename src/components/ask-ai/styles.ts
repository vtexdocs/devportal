import type { SxStyleProp } from '@vtex/brand-ui'

const baseBtn: SxStyleProp = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 3,
  px: 3,
  minHeight: 36,
  fontSize: 12,
  color: 'muted.0',
  backgroundColor: '#fff',
  border: '1px solid #E7E9EE',
  cursor: 'pointer',
  '&:hover': { backgroundColor: '#F8F7FC', color: '#000711' },
}

const styles = {
  group: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: '4px',
    overflow: 'hidden',
    width: '100%',
  },

  primaryBtn: {
    ...baseBtn,
    borderRight: '0',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    width: '100%',
  },

  caretBtn: {
    ...baseBtn,
    px: 2,
    width: 36,
    justifyContent: 'center',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },

  askaiMenu: {
    position: 'absolute',
    width: 160,
    zIndex: 50,
    bg: 'white',
    color: 'muted.0',
    boxShadow:
      '0 8px 24px rgba(18, 21, 26, 0.12), 0 2px 6px rgba(18, 21, 26, 0.08)',
    border: '1px solid',
    borderColor: '#E7E9EE',
    borderRadius: '4px',
    overflow: 'hidden',
    backdropFilter: 'saturate(120%) blur(6px)',
  } as SxStyleProp,

  askaiSection: {
    '& + &': {
      borderTop: '1px solid',
      borderColor: '#E7E9EE',
    },
  } as SxStyleProp,

  askaiItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    textAlign: 'left',
    px: 3,
    py: 2,
    minHeight: 40,
    background: 'transparent',
    border: '0',
    cursor: 'pointer',
    fontSize: 12,
    color: 'muted.0',
    transition:
      'background-color 120ms ease, color 120ms ease, transform 80ms ease',
    '&:hover': {
      backgroundColor: '#F8F7FC',
      color: '#000711',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  } as SxStyleProp,
}

export { styles }
