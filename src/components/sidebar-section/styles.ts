import { SxStyleProp } from '@vtex/brand-ui'

const sidebarElementsContainer: SxStyleProp = {
  width: '300px',
  minHeight: '692px',
  paddingTop: '34px',
  paddingBottom: '24px',
  px: '17px',
  borderRight: '1px solid #E7E9EE',
  transition: 'left 0.3s',
}

const sidebarTitle: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '18px',
}

const sidebarHelpIcon: SxStyleProp = {
  ml: '4px',
  width: '24px',
  height: '24px',
}

const searchBox: SxStyleProp = {
  mt: '16px',
  mb: '20px',
  alignItems: 'center',
  borderRadius: '4px',
  background: '#F4F4F4',
  width: '265px',
  height: '40px',
  paddingLeft: '12px',
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
  sidebarElementsContainer,
  sidebarTitle,
  sidebarHelpIcon,
  searchBox,
  searchInput,
  searchIcon,
}
