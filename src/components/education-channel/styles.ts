import { SxStyleProp } from '@vtex/brand-ui'

const channelBox: SxStyleProp = {
  flexDirection: 'column',
  mx: ['32px'],
  alignItems: 'center',
  '.channelIcon > path, .channelArrow > path': {
    transition: 'all 0.3s ease-out',
  },
  '.channelTitle, .channelDescription, .channelLinkText': {
    transition: 'all 0.3s ease-out',
  },
  ':hover': {
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
  fontSize: '28px',
  lineHeight: '38px',
  color: 'muted.0',
}

const channelDescription: SxStyleProp = {
  fontSize: '18px',
  lineHeight: '24px',
  color: 'muted.0',
  textAlign: 'center',
  mt: '6px',
  mb: '16px',
}

const channelLinkText: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '22px',
  color: 'muted.0',
  mr: '4px',
}

const channelIcon: SxStyleProp = {
  height: 'auto',
  width: '64px',
  mb: '6px',
}

const channelArrowIcon: SxStyleProp = {
  height: 'auto',
  width: '16px',
  minHeight: '16px',
  minWidth: '16px',
}

export default {
  channelBox,
  channelTitle,
  channelDescription,
  channelLinkText,
  channelIcon,
  channelArrowIcon,
}
