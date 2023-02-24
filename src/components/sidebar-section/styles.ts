import { SxStyleProp } from '@vtex/brand-ui'

const sidebarContainer: SxStyleProp = {
  position: 'relative',
  width: 'auto',
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

const sidebarContainerHamburger: SxStyleProp = {
  width: 'auto',
  minHeight: '692px',
  zIndex: '1',
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

const sidebarContainerTitle: SxStyleProp = {
  alignItems: 'center',
  lineHeight: '22px',
  gap: '5px',
  padding: '17px 0px 17px 17px',
  borderBottom: '1px solid #E7E9EE',
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

const arrowButton: SxStyleProp = {
  padding: '0px',
}

export default {
  sidebarContainer,
  sidebarContainerHamburger,
  sidebarContainerBox,
  sidebarContainerBody,
  sidebarContainerHeader,
  sidebarContainerTitle,
  sidebarTitle,
  sidebarHelpIcon,
  searchBox,
  searchInput,
  searchIcon,
  toggleIconBox,
  toggleIconBoxActive,
  toggleIcon,
  arrowButton,
}
