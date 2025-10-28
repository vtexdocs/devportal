import { SxStyleProp } from '@vtex/brand-ui'

const channelBox: SxStyleProp = {
  flexDirection: 'column',
  width: ['250px', '327px', '280px'],
  mx: ['0px', '0px', '0px', '0px', '32px'],
  mt: ['32px', '64px', '64px', '64px', '0px'],
  alignItems: 'center',
  '.channelIcon > path, .channelArrow > path': {
    transition: 'all 0.3s ease-out',
  },
  '.channelTitle, .channelDescription, .channelLinkText': {
    transition: 'all 0.3s ease-out',
  },
  ':hover': {
    cursor: 'pointer',
    '.channelArrow': {
      transition: 'all 0.3s ease-out',
      ml: '2px',
    },
    '.channelIcon > path, .channelArrow > path': {
      stroke: '#000711',
      transition: 'all 0.3s ease-out',
    },
    '.channelTitle, .channelDescription, .channelLinkText': {
      color: '#000711',
      transition: 'all 0.3s ease-out',
    },
  },
}

const channelTitle: SxStyleProp = {
  fontSize: ['16px', '16px', '28px'],
  lineHeight: ['22px', '38px'],
  color: 'muted.0',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
}

const channelDescription: SxStyleProp = {
  fontSize: ['16px', '16px', '22px', '22px', '18px'],
  lineHeight: ['22px', '24px', '32px', '32px', '24px'],
  color: 'muted.1',
  textAlign: 'center',
  mt: ['4px', '6px'],
  mb: ['0px', '16px', '8px', '8px', '16px'],
}

const channelLinkContainer: SxStyleProp = {
  display: ['none !important', 'flex !important'],
  alignItems: 'center',
}

const channelLinkText: SxStyleProp = {
  fontSize: ['16px', '16px', '22px', '22px', '16px'],
  lineHeight: ['22px', '22px', '32px', '32px', '22px'],
  color: 'muted.0',
  mr: '4px',
}

const channelIcon: SxStyleProp = {
  height: 'auto',
  width: '64px',
  mb: ['4px', '6px'],
}

const channelArrowIcon: SxStyleProp = {
  height: '100%',
  width: '16px',
  minHeight: '16px',
  minWidth: '16px',
  ml: ['4px', '0px'],
}

const channelTitleArrowIcon: SxStyleProp = {
  ...channelArrowIcon,
  display: ['block', 'none'],
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
