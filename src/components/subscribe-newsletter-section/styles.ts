import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'center',
}

const subscribeNewsletterContainer: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  zIndex: 2,
}

const textContainer: SxStyleProp = {
  flexDirection: 'column',
}

const text: SxStyleProp = {
  fontWeight: '400',
}

const emailContainer: SxStyleProp = {
  width: '326px',
  height: '44px',
  marginTop: '16px',

  alignItems: 'center',

  background: '#ffffff',
  border: '1px solid #B9B9B9',
  borderRadius: '4px',

  ':hover': {
    border: '1px solid #545454',
  },

  ':focus-within': {
    boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9',
  },
}

const emailForm: SxStyleProp = {
  height: '44px',
  overflow: 'hidden',
}

const emailInput: SxStyleProp = {
  background: '#FFF',
  width: '257px',
  border: '#ffffff',
  outline: 'none',

  fontSize: '14px',
  fontWeight: '400',

  marginLeft: '16px',
}

const divider: SxStyleProp = {
  height: '42px',
  width: '4px',
  marginRight: '1px',
  background: '#DDDDDD',
}

const iconContainer: SxStyleProp = {
  width: '100%',
  height: '42px',
  flexDirection: 'column',
  justifyContent: 'center',

  borderRadius: '0px 3px 3px 0px',

  ':hover': {
    background: '#F4F4F4',
  },
}

const submitArrow: SxStyleProp = {
  alignSelf: 'center',
}

const imageContainer: SxStyleProp = {
  zIndex: 1,
  position: 'absolute',

  width: ['360px', '640px', '640px', '640px', '1280px'],
  height: ['234px', '254px', '254px', '254px', '236px'],
}

export default {
  container,
  subscribeNewsletterContainer,
  textContainer,
  text,
  emailContainer,
  emailForm,
  emailInput,
  divider,
  iconContainer,
  submitArrow,
  imageContainer,
}
