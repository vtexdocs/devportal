import { SxStyleProp } from '@vtex/brand-ui'

const channelBox: SxStyleProp = {
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  px: ['20px', '24px'],
  py: ['24px', '32px'],
  boxSizing: 'border-box',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  backgroundColor: '#FFFFFF',
  transition: 'all 0.3s ease-out',
  '.channelIcon > path, .channelArrow > path': {
    transition: 'all 0.3s ease-out',
  },
  '.channelTitle, .channelDescription, .channelLinkText': {
    transition: 'all 0.3s ease-out',
  },
  ':hover': {
    cursor: 'pointer',
    borderColor: '#CCCED8',
    boxShadow: '0px 8px 24px rgba(20, 32, 50, 0.08)',
    transform: 'translateY(-2px)',
    '.channelArrow': {
      transition: 'all 0.3s ease-out',
      ml: '2px',
    },
    '.channelIcon > path, .channelArrow > path': {
      stroke: '#000711',
      transition: 'all 0.3s ease-out',
    },
    '.channelLinkText': {
      color: '#000711',
      transition: 'all 0.3s ease-out',
    },
  },
}

const channelTitle: SxStyleProp = {
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  color: 'muted.0',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: '400',
}

const channelDescription: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  color: 'muted.1',
  textAlign: 'center',
  mt: ['8px', '10px'],
  mb: ['16px', '20px'],
  flex: 1,
}

const channelLinkContainer: SxStyleProp = {
  display: 'flex !important',
  alignItems: 'center',
  mt: 'auto',
}

const channelLinkText: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: ['20px', '22px'],
  color: 'muted.0',
  mr: '4px',
}

const channelIcon: SxStyleProp = {
  height: 'auto',
  width: ['48px', '56px'],
  mb: ['12px', '16px'],
}

const channelArrowIcon: SxStyleProp = {
  height: '100%',
  width: '16px',
  minHeight: '16px',
  minWidth: '16px',
  ml: '4px',
}

const channelTitleArrowIcon: SxStyleProp = {
  ...channelArrowIcon,
  display: 'none',
}

export default {
  channelBox,
  channelTitle,
  channelDescription,
  channelLinkContainer,
  channelLinkText,
  channelIcon,
  channelArrowIcon,
  channelTitleArrowIcon,
}
