import { SxStyleProp } from '@vtex/brand-ui'

const sidebarContainer: SxStyleProp = {
  position: 'relative',
  width: '300px',
  minHeight: '692px',
  paddingTop: '34px',
  paddingBottom: '24px',
  borderRight: '1px solid #E7E9EE',
  zIndex: '1',
  left: '0',
  transition: 'all 0.3s ease-in-out',
  '.toggleIcon': {
    opacity: '0',
    transition: 'all 0.3s ease-out',
  },
  '.sidebarHide': {
    opacity: '0',
    transition: 'all 0.5s ease-out',
  },
  ':hover': {
    '.toggleIcon': {
      opacity: '100',
      transition: 'all 0.3s ease-out',
    },
  },
}

const sidebarContainerBox: SxStyleProp = {
  opacity: '100',
  transition: 'all 1s ease-out',
}

const sidebarContainerBody: SxStyleProp = {
  px: '17px',
}

const sidebarContainerHeader: SxStyleProp = {
  ...sidebarContainerBody,
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

const toggleIconBox: SxStyleProp = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #E7E9EE',
  background: '#FFFFFF',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  top: '32px',
  right: '-16px',
  cursor: 'pointer',
}

const toggleIconBoxActive: SxStyleProp = {
  ...toggleIconBox,
  opacity: '100 !important',
}

const toggleIcon: SxStyleProp = {
  transform: 'scaleX(-1)',
}

const filterContainer: SxStyleProp = {
  px: '17px',
  paddingTop: '6px',
  borderBottom: '1px solid #E7E9EE',
  paddingBottom: '16px',
  mb: '24px',
}

const filterText: SxStyleProp = {
  mb: '8px',
}

const filterCategory: SxStyleProp = {
  mr: '8px',
  px: '4px',
  width: 'auto',
  cursor: 'pointer',
  ':hover': {
    borderWidth: '2px',
  },
}

export default {
  sidebarContainer,
  sidebarContainerBox,
  sidebarContainerBody,
  sidebarContainerHeader,
  sidebarTitle,
  sidebarHelpIcon,
  searchBox,
  searchInput,
  searchIcon,
  toggleIconBox,
  toggleIconBoxActive,
  toggleIcon,
  filterContainer,
  filterText,
  filterCategory,
}
