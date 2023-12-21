import { SxStyleProp } from '@vtex/brand-ui'

const test: SxStyleProp = {
  display: 'flex',
  backgroundColor: 'aquamarine',
}

const outerBox: SxStyleProp = {
  bg: '#142032;',
  display: ['flex'],
  flexDirection: ['column', 'row'],
  padding: '48px 32px 48px 48px',
  alignItems: ['flex-start', 'center'],
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  rowGap: '32px',
  overflow: 'auto',
}

const socialMediaIcons: SxStyleProp = {
  gap: '16px',
  alignItems: 'center',
  paddingTop: '5px',
}

const textLinkItems: SxStyleProp = {
  fontSize: '16px',
  gap: ['48px', '30px', '45px'],
  rowGap: ['45px'],
  flexWrap: 'wrap',
  justifyItems: 'left',
  alignItems: 'center',
}

const localeSwitchLanding: SxStyleProp = {
  marginLeft: '0',
  justifySelf: 'left',
  positionBottom: '5px',
}

export default {
  localeSwitchLanding,
  test,
  outerBox,
  socialMediaIcons,
  textLinkItems,
}
