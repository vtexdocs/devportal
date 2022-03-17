import type { SxStyleProp } from '@vtex/brand-ui'

const headerBrand: SxStyleProp = {
  position: ['fixed', 'fixed', 'fixed', 'relative'],
  gridTemplateColumns: '1fr 2fr 0fr 1fr',
  width: '100%',
  zIndex: 3,
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
}

const searchIcon: SxStyleProp = {
  width: '16px',
  mr: '8px',
}

export default {
  logoSize,
  headerBrand,
  rightLinks,
  iconContainer,
  rightLinksItem,
  searchContainer,
  searchBox,
  searchInput,
  searchIcon,
}
