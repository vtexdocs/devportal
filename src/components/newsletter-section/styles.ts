import { SxStyleProp } from '@vtex/brand-ui'

const newsletterContainer: SxStyleProp = {
  position: 'relative',
  mt: '5rem',
  pl: ['0px', '223px'],
  borderBottom: '1px solid #E7E9EE',
  display: ['flex', 'block'],
  flexDirection: 'column-reverse',
}

const newsletterBackground: SxStyleProp = {
  position: 'relative',
  height: '100%',
  py: ['0px', '86px'],
  background:
    '-webkit-linear-gradient(left, #FFFFFF 40%, rgba(255, 255, 255, 0) 100%);',
  zIndex: '1',
}

const newsletterBox: SxStyleProp = {
  flexDirection: 'column',
  maxWidth: ['100%', '650px'],
  px: ['16px', '0px'],
  position: 'relative',
  zIndex: '1',
}

const newsletterTitle: SxStyleProp = {
  textAlign: ['center', 'initial'],
  fontSize: ['24px', '52px'],
  lineHeight: ['34px', '62px'],
}

const newsletterDescription: SxStyleProp = {
  textAlign: ['center', 'initial'],
  pr: ['0px', '78px'],
  fontSize: ['16px', '18px'],
  lineHeight: ['22px', '24px'],
  marginBlock: ['12px 16px', '24px 16px'],
}

const newsletterInputBox: SxStyleProp = {
  flexDirection: ['column', 'row'],
  pr: ['0px', '78px'],
}

const newsletterInput: SxStyleProp = {
  mr: ['0px', '16px'],
  mb: '0',
  'div:nth-last-of-type(1n)': {
    mt: '0',
  },
  label: {
    fontSize: '14px',
    width: 'auto',
  },
}

const newsletterButton: SxStyleProp = {
  mt: ['16px', '0px'],
  mb: ['32px', '0px'],
}

const image: SxStyleProp = {
  position: 'absolute',
  right: '0',
  width: 'auto',
  height: '100%',
  top: '0',
}

const policyText: SxStyleProp = {
  mt: ['4px', '8px'],
  fontSize: ['12px'],
  lineHeight: ['16px'],
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
  newsletterButton,
  image,
  policyText,
  policyLink,
}
