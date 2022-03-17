import { SxStyleProp } from '@vtex/brand-ui'

const grid: SxStyleProp = {
  gridGap: '0px',
  background: '#ffffff',
}

const newsletterContainer: SxStyleProp = {
  position: 'relative',
  pl: '223px',
  borderBottom: '1px solid #E7E9EE',
}

const newsletterBackground: SxStyleProp = {
  position: 'relative',
  height: '100%',
  py: '86px',
  background:
    '-webkit-linear-gradient(left, #FFFFFF 13.92%, rgba(255, 255, 255, 0) 100%);',
  zIndex: '1',
}

const newsletterBox: SxStyleProp = {
  flexDirection: 'column',
  maxWidth: '650px',
  position: 'relative',
  zIndex: '1',
}

const newsletterTitle: SxStyleProp = {
  fontSize: '52px',
  lineHeight: '62px',
}

const newsletterDescription: SxStyleProp = {
  pr: '78px',
  fontSize: '18px',
  lineHeight: '24px',
  marginBlock: '24px 16px',
}

const newsletterInputBox: SxStyleProp = {
  alignItems: 'center',
  pr: '78px',
}

const newsletterInput: SxStyleProp = {
  mr: '16px',
  mb: '0',
  'div:nth-last-of-type(1n)': {
    mt: '0',
  },
}

const image: SxStyleProp = {
  position: 'absolute',
  right: '0',
  width: 'auto',
  height: '100%',
  top: '0',
}

export default {
  grid,
  newsletterContainer,
  newsletterBackground,
  newsletterBox,
  newsletterTitle,
  newsletterDescription,
  newsletterInputBox,
  newsletterInput,
  image,
}
