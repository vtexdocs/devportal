import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '64px',
  pb: '128px',
  px: '128px',
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

export default {
  container,
  title,
  channelsContainer,
}
