import { SxStyleProp } from '@vtexdocs/brand-ui'

const section: SxStyleProp = {
  width: '100%',
  borderBottom: '1px solid #E7E9EE',
}

const newsletter: SxStyleProp = {
  width: ['100%', '100%', '100%', '100%', '1280px', '1920px', '2560px'],
  margin: 'auto',
}

const newsletterContainer: SxStyleProp = {
  position: 'relative',
  mt: '5rem',
  pl: ['0px', '0px', '0px', '223px', '223px', '313px', '530px'],
  borderBottom: '1px solid #E7E9EE',
  display: ['flex', 'flex', 'flex', 'block', 'flex'],
  flexDirection: ['column-reverse', 'row'],
  overflow: 'hidden',
  width: ['100%', '100%', '100%', 'auto'],
  justifyContent: ['center', 'center', 'center', 'center', 'initial'],
}

const newsletterBackground: SxStyleProp = {
  position: 'relative',
  height: 'auto',
  paddingBlock: ['0px', '64px 46px', '86px', '86px', '84px 72px'],
  background: ['#FFFFFF', 'transparent'],
  mt: ['-80px', '0'],
  zIndex: '3',
  justifyContent: ['center', 'normal'],
}

const newsletterBox: SxStyleProp = {
  flexDirection: 'column',
  maxWidth: ['472px', '650px', '650px', '650px', '650px', '650px', '868px'],
  px: ['16px', '32px', '0px'],
  position: 'relative',
  zIndex: '1',
}

const newsletterTitle: SxStyleProp = {
  width: ['auto', '434px', '100%'],
  mx: ['0px', 'auto'],
  textAlign: ['center', 'center', 'center', 'initial'],
  fontSize: ['24px', '40px', '40px', '52px'],
  lineHeight: ['34px', '50px', '50px', '62px'],
}

const newsletterDescription: SxStyleProp = {
  textAlign: ['center', 'center', 'center', 'initial'],
  mx: ['0px', '24px', '62px', '0px'],
  pr: ['0px', '0px', '0px', '0px', '78px'],
  fontSize: ['16px', '16px', '16px', '22px'],
  lineHeight: ['22px', '22px', '22px', '32px'],
  marginBlock: ['12px 16px', '24px', '24px', '24px 16px'],
}

const newsletterInputContainer: SxStyleProp = {
  flexDirection: ['column', 'row'],
  pr: ['0px', '0px', '39px', '78px'],
  pl: ['0px', '0px', '39px', '0px'],
}

const newsletterInputBox: SxStyleProp = {
  width: ['auto', '100%'],
}

const newsletterInput: SxStyleProp = {
  mb: '0',
  'div:nth-last-of-type(1n)': {
    mt: '0',
    pl: '12px',
  },
  label: {
    fontSize: '14px',
    width: 'auto',
  },
}

const newsletterButton: SxStyleProp = {
  ml: ['0px', '16px'],
  mt: ['16px', '4px'],
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
  section,
  newsletter,
  newsletterContainer,
  newsletterBackground,
  newsletterBox,
  newsletterTitle,
  newsletterDescription,
  newsletterInputContainer,
  newsletterInputBox,
  newsletterInput,
  newsletterButton,
  image,
  policyText,
  policyLink,
}
