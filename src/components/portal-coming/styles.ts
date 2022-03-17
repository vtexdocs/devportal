import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  flexDirection: 'column',
  height: '100vh',
}

const titleBox: SxStyleProp = {
  mx: 'auto',
  mt: '4%',
}

const title: SxStyleProp = {
  fontSize: '3vw',
}

const iconBox: SxStyleProp = {
  height: '100%',
  justifyContent: 'center',
}

const icon: SxStyleProp = {
  height: 'auto',
  width: '30%',
}

const skeleton: SxStyleProp = {
  position: 'absolute',
  width: '50%',
  height: '20px',
  left: 'calc(50% / 2)',
  bottom: '5%',
}

export default {
  container,
  titleBox,
  title,
  iconBox,
  icon,
  skeleton,
}
