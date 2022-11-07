import type { SxStyleProp } from '@vtex/brand-ui'

const headerContainer: SxStyleProp = {
  position: 'fixed',
  zIndex: 9999,
  width: '100%',
  transition: 'top 0.3s',
}

const headerBrand: SxStyleProp = {
  gridTemplateColumns: '1fr 1fr 0fr 1fr',
  width: '100%',
  position: 'relative',
}
const logoSize: SxStyleProp = {
  width: ['172px', '172px', '204px'],
  height: ['24px', '24px', '32px'],
}

const rightLinks: SxStyleProp = {
  display: ['none', 'none', 'none', 'flex !important'],
  width: 'auto',
  height: '100%',
  pr: '48px',
}

const rightLinksItem: SxStyleProp = {
  alignItems: 'center',
  padding: '0 !important',
  margin: '0 0 0 32px !important',
  svg: {
    mr: '8px',
  },

  ':hover': {
    color: '#C81E51',
    'svg > path': {
      stroke: '#C81E51',
    },
  },
}

const dropdownContainer: SxStyleProp = {
  justifyContent: 'flex-end',
  height: 'calc(100% + 1px)',
  cursor: 'pointer',
}

const dropdownButton: (active: boolean) => SxStyleProp = (active: boolean) => ({
  color: active ? '#D71D55' : '#4A596B',
  alignItems: 'center',
  svg: {
    mr: '8px',
    path: {
      fill: active ? '#D71D55' : '#4A596B',
    },
  },

  ':hover': {
    color: '#C81E51',
    'svg > path': {
      fill: '#C81E51',
    },
  },
})

const rightButtonsText: SxStyleProp = {
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  fontFamily: 'VTEX Trust Medium !important',
  textTransform: 'none',
}

const iconContainer: SxStyleProp = { paddingLeft: 3, color: 'primary.base' }

const searchContainer: SxStyleProp = {
  display: ['none', 'none', 'none', 'flex'],
  justifyContent: 'center',
  paddingBlock: '18px',
  height: 'auto',
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
  flex: 0,
  maxWidth: 'fit-content',
}

export default {
  logoSize,
  headerContainer,
  headerBrand,
  searchContainer,
  searchIcon,
  rightLinks,
  iconContainer,
  rightLinksItem,
  rightButtonsText,
  dropdownButton,
  dropdownContainer,
}
