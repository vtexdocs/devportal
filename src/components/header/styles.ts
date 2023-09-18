import type { SxStyleProp } from '@vtex/brand-ui'

const menuContainer: SxStyleProp = {
  display: 'flex',
  width: 'max-content',
}

const cardContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  overflowY: 'scroll',
  height: 'calc(100vh - 5rem)',
}

const sideMenuContainer: SxStyleProp = {
  backgroundColor: '#ffff',
  height: 'calc(100vh - 5rem)',
  width: '100vw',
  overflowY: 'auto',
  overflowX: 'hidden',
  transform: 'translate(0)',
  transition: 'transform .5s cubic-bezier(.4,0,.2,1)',
}

const headerContainer: SxStyleProp = {
  position: 'sticky',
  zIndex: 9999,
  width: '100%',
  transition: 'top 0.3s',
}

const hamburgerContainer: SxStyleProp = {
  display: ['block', 'block', 'block', 'none'],
  backgroundColor: '#ffff',
  width: '100%',
  '.menuHidden': {
    transform: 'translate(-100%)',
  },
}

const headerBrand: SxStyleProp = {
  gridTemplateColumns: '1fr 1fr 0fr 1fr',
  width: '100%',
  position: 'relative',
}

const headerBrandLink: SxStyleProp = {
  width: 'fit-content',
  justifyContent: 'center',
  gridArea: 'brand',
  marginLeft: [4, 6, 6],
  marginBottom: 1,
  '> svg': {
    width: 'auto',
  },
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
  textTransform: 'none',
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

const hamburgerSearchContainer: SxStyleProp = {
  display: 'flex',
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

const documentationContainer: SxStyleProp = {
  px: '16px',
  paddingBottom: '8px',
}

const updatesContainer: SxStyleProp = {
  px: '16px',
  paddingTop: '8px',
  borderRadius: '0px 0px 8px 8px',
  borderTop: '1px solid #E7E9EE',
}

const innerHambugerContainer: SxStyleProp = {
  padding: '0px',
  position: 'relative',
  overflowX: 'hidden',
}

const innerCardContainer: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  height: '50px',
  width: '50px',
  color: 'muted.1',
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: '#D71D55',
}

export default {
  menuContainer,
  cardContainer,
  sideMenuContainer,
  logoSize,
  headerContainer,
  headerBrand,
  headerBrandLink,
  hamburgerSearchContainer,
  searchContainer,
  searchIcon,
  rightLinks,
  iconContainer,
  rightLinksItem,
  rightButtonsText,
  dropdownButton,
  dropdownContainer,
  documentationContainer,
  updatesContainer,
  hamburgerContainer,
  innerHambugerContainer,
  innerCardContainer,
  arrowIcon,
  arrowIconActive,
}
