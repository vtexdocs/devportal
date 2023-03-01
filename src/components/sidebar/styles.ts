import { SxStyleProp } from '@vtex/brand-ui'

const sidebar: SxStyleProp = {
  display: [
    'none !important',
    'none !important',
    'none !important',
    'flex !important',
  ],
  position: 'sticky',
  left: '0',
  top: '5rem',
  flex: '1 0 auto',
  height: 'calc(100vh - 5rem)',
  width: 'auto',
  minWidth: 'auto',
  transition: 'all 0.3s ease-in-out',
  '.active': {
    marginLeft: '-276px',
    transition: 'all 0.3s ease-in-out',
  },
  '.iconContainerExpanded': {
    transition: 'all 0.3s ease-in-out',
    width: '160px',
  },
  '.iconDescriptionExpanded': {
    display: 'block',
  },
}

const sidebarIcons: SxStyleProp = {
  width: ['56px', '56px', '56px', '56px', '56px', '160px'],
  minWidth: 'max-content',
  transition: 'all 0.3s ease-in-out',
  flexDirection: 'column',
  borderRight: '1px solid #E7E9EE',
  background: '#FFFFFF',
  zIndex: '2',
  paddingBottom: '32px',
}

const linkContainer: SxStyleProp = {
  minWidth: '100%',
}

const iconBox: SxStyleProp = {
  mt: ['16px'],
  width: '100%',
  maxWidth: '144px',
  paddingLeft: ['0', '0', '0', '8px'],
  paddingRight: ['0', '0', '0', '8px', '8px', '0'],
  py: ['0', '0', '0', '8px', '8px', '10px'],
  height: '40px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: 'transparent',
  color: 'muted.0',
  cursor: 'pointer',
  ':hover': {
    background: '#F8F7FC',
    color: '#000711',
    path: {
      stroke: [
        '#000711',
        '#000711',
        '#000711',
        '#000711',
        '#000711',
        '#4A596B',
      ],
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
  alignItems: 'flex-start',
  px: ['0', '0', '0', '8px'],
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
  display: ['none', 'none', 'none', 'none', 'none', 'block'],
  width: '100%',
  fontSize: '14px',
  ml: ['8px', '8px', '8px', '8px', '8px', '12px'],
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
}

const iconTooltip: SxStyleProp = {
  display: [
    'flex !important',
    'flex !important',
    'flex !important',
    'flex !important',
    'flex !important',
    'none !important',
  ],
}

export default {
  sidebar,
  sidebarIcons,
  sidebarIconsContainer,
  linkContainer,
  iconBox,
  icon,
  iconActive,
  iconBoxActive,
  sectionDivider,
  iconTitle,
  iconTooltip,
}
