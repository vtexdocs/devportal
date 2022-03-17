import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '64px',
  pb: '128px',
  px: '64px',
}

const title: SxStyleProp = {
  fontSize: '40px',
  lineHeight: '50px',
  color: 'text',
  textAlign: 'center',
  mb: '64px',
}

const channelsContainer: SxStyleProp = {
  flexDirection: 'row',
  columnGap: '64px',
  gridTemplateColumns: 'repeat(3, 1fr)',
}

const channelBox: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'center',
  '.channelIcon > path, .channelArrow > path': {
    transition: 'all 0.3s ease-in-out',
  },
  '.channelTitle, .channelDescription, .channelLink': {
    transition: 'all 0.3s ease-in-out',
  },
  ':hover': {
    '.channelIcon > path, .channelArrow > path': {
      stroke: '#000711',
      transition: 'all 0.3s ease-in',
    },
    '.channelTitle, .channelDescription, .channelLink': {
      color: '#000711',
      transition: 'all 0.3s ease-in',
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

const channelLink: SxStyleProp = {
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

const arrowIcon: SxStyleProp = {
  height: 'auto',
  width: '16px',
  minHeight: '16px',
  minWidth: '16px',
}

export default {
  container,
  title,
  channelsContainer,
  channelBox,
  channelTitle,
  channelDescription,
  channelLink,
  channelIcon,
  arrowIcon,
}
