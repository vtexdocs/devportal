import { SxStyleProp } from '@vtex/brand-ui'

const newsletterContainer: SxStyleProp = {
  position: 'relative',
  mt: '5rem',
  pl: '223px',
  borderBottom: '1px solid #E7E9EE',
}

const newsletterBackground: SxStyleProp = {
  position: 'relative',
  height: '100%',
  py: '86px',
  background:
    '-webkit-linear-gradient(left, #FFFFFF 40%, rgba(255, 255, 255, 0) 100%);',
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

const policyText: SxStyleProp = {
  mt: '8px',
  fontSize: '12px',
  lineHeight: '16px',
  color: 'muted.0',
}
const policyLink: SxStyleProp = {
  color: '#E31C58',
}

export default {
  newsletterContainer,
  newsletterBackground,
  newsletterBox,
  newsletterTitle,
  newsletterDescription,
  newsletterInputBox,
  newsletterInput,
  image,
  policyText,
  policyLink,
}
