import { SxStyleProp } from '@vtex/brand-ui'

const section: SxStyleProp = {
  width: '100%',
  borderBottom: '1px solid #E7E9EE',
}

const newsletter: SxStyleProp = {
  width: '100%',
  margin: 'auto',
}

const newsletterContainer: SxStyleProp = {
  position: 'relative',
  borderBottom: '1px solid #E7E9EE',
  display: ['flex', 'flex', 'flex', 'block', 'flex'],
  zIndex: '3',
  flexDirection: 'column',
  overflow: 'hidden',
  width: ['100%', '100%', '100%', 'auto'],
  justifyContent: 'center',
}

const imageContainer: SxStyleProp = {
  position: 'relative',
  zIndex: '1',
}

const titleGradient: SxStyleProp = {
  width: '100%',
  zIndex: 4,
  paddingBottom: ['0px', '46px', '86px', '86px', '72px'],
  background:
    'linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);',
}

const newsletterTitle: SxStyleProp = {
  maxWidth: ['auto', '434px', '650px', '650px', '650px', '650px', '868px'],
  px: ['16px', '32px', '0px'],
  width: ['auto', '434px', '100%'],
  mx: ['0px', 'auto'],
  textAlign: 'center',
  fontSize: ['24px', '40px', '40px', '52px'],
  lineHeight: ['34px', '50px', '50px', '62px'],
}

export default {
  section,
  newsletter,
  newsletterContainer,
  imageContainer,
  titleGradient,
  newsletterTitle,
}
