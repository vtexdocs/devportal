import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: ['32px', '64px'],
  pb: ['64px', '128px'],
  px: ['18px', '96px'],
}

const title: SxStyleProp = {
  fontSize: ['20px', '40px'],
  lineHeight: ['30px', '50px'],
  color: 'text',
  textAlign: 'center',
  mb: ['0px', '64px'],
}

const channelsContainer: SxStyleProp = {
  flexDirection: ['column', 'row'],
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  container,
  title,
  channelsContainer,
}
