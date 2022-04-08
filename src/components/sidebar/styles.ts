import { SxStyleProp } from '@vtex/brand-ui'

const sidebar: SxStyleProp = {
  width: 'auto',
  '.active': {
    left: '-276px',
    transition: 'all 0.3s ease-in-out',
  },
}

const sidebarIcons: SxStyleProp = {
  display: ['none', 'none', 'none', 'flex'],
  width: '56px',
  height: '692px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRight: '1px solid #E7E9EE',
  background: '#FFFFFF',
  zIndex: '2',
  paddingBottom: '32px',
}

const iconBox: SxStyleProp = {
  mt: ['16px'],
  width: '40px',
  height: '40px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  cursor: 'pointer',
  ':hover': {
    background: '#F8F7FC',
    path: {
      stroke: '#E31C58',
    },
  },
}

const iconBoxActive: SxStyleProp = {
  ...iconBox,
  background: '#F8F7FC',
}

const sidebarIconsContainer: SxStyleProp = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
}

const icon: SxStyleProp = {
  width: ['24px'],
  height: ['24px'],
}

const iconActive: SxStyleProp = {
  ...icon,
  '> path': {
    stroke: '#E31C58',
  },
}

export default {
  sidebar,
  sidebarIcons,
  sidebarIconsContainer,
  iconBox,
  icon,
  iconActive,
  iconBoxActive,
}
