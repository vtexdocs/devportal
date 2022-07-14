import { SxStyleProp } from '@vtex/brand-ui'

const sidebar: SxStyleProp = {
  display: [
    'none !important',
    'none !important',
    'none !important',
    'flex !important',
  ],
  width: 'auto',
  minWidth: 'auto',
  '.active': {
    left: '-276px',
    marginRight: '-120px',
    transition: 'all 0.3s ease-in-out',
  },
}

const sidebarIcons: SxStyleProp = {
  width: ['56px', '56px', '56px', '56px', '56px', '160px'],
  height: '692px',
  flexDirection: 'column',
  borderRight: '1px solid #E7E9EE',
  background: '#FFFFFF',
  zIndex: '2',
  paddingBottom: '32px',
}

const iconBox: SxStyleProp = {
  mt: ['16px'],
  width: ['40px', '40px', '40px', '40px', '40px', '144px'],
  paddingLeft: ['0', '0', '0', '0', '0', '8px'],
  py: ['0', '0', '0', '0', '0', '10px'],
  height: '40px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: [
    'center',
    'center',
    'center',
    'center',
    'center',
    'flex-start',
  ],
  background: 'transparent',
  color: 'muted.0',
  cursor: 'pointer',
  ':hover': {
    background: '#F8F7FC',
    color: '#E31C58',
    path: {
      stroke: '#E31C58',
    },
  },
}

const iconBoxActive: SxStyleProp = {
  ...iconBox,
  background: ['#F8F7FC', '#F8F7FC', '#F8F7FC', '#F8F7FC', '#F8F7FC', 'none'],
  color: '#E31C58',
}

const sidebarIconsContainer: SxStyleProp = {
  width: '100%',
  flexDirection: 'column',
  alignItems: ['center', 'center', 'center', 'center', 'center', 'flex-start'],
  px: ['0', '0', '0', '0', '8px'],
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

const sectionDivider: SxStyleProp = {
  px: '8px',
  marginTop: '16px',
  hr: {
    border: '1px solid #E7E9EE',
    borderTop: 'none',
  },
}

const iconTitle: SxStyleProp = {
  display: ['none', 'none', 'none', 'none', 'none', 'initial'],
  fontSize: '14px',
  ml: '12px',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
}

export default {
  sidebar,
  sidebarIcons,
  sidebarIconsContainer,
  iconBox,
  icon,
  iconActive,
  iconBoxActive,
  sectionDivider,
  iconTitle,
}
