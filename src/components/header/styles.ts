import type { SxStyleProp } from '@vtex/brand-ui'

const headerContainer: SxStyleProp = {
  position: 'fixed',
  zIndex: 3,
  width: '100%',
  transition: 'top 0.3s',
}

const headerBrand: SxStyleProp = {
  gridTemplateColumns: '1fr 2fr 0fr 1fr',
  position: 'relative',
}
const logoSize: SxStyleProp = { width: '200px', height: 'auto' }

const rightLinks: SxStyleProp = { height: '100%', pr: '64px' }

const rightLinksItem: SxStyleProp = { alignItems: 'center' }

const iconContainer: SxStyleProp = { paddingLeft: 3, color: 'primary.base' }

const searchContainer: SxStyleProp = {
  justifyContent: 'center',
  paddingBlock: '18px',
  height: 'auto',
}

const searchBox: SxStyleProp = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  background: '#F4F4F4',
  width: '288px',
  height: '40px',
}

const searchInput: SxStyleProp = {
  width: 'auto',
  background: '#F4F4F4',
  border: '#F4F4F4',
  color: '#545454',
  fontSize: ['14px'],
}

const searchIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  mr: '8px',
}

export default {
  logoSize,
  headerContainer,
  headerBrand,
  rightLinks,
  iconContainer,
  rightLinksItem,
  searchContainer,
  searchBox,
  searchInput,
  searchIcon,
}
