import { SxStyleProp } from '@vtex/brand-ui'

const subscribeNewsletterContainer: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F8F7FC',

  mt: '24px',

  width: ['360px', '544px', '544px', '544px', '720px'],
  height: ['162px', '176px', '176px', '176px', '154px'],

  borderRadius: '8px',
  border: '1px solid #E7E9EE',
}

const textContainer: SxStyleProp = {
  flexDirection: 'column',
  textAlign: ['flex-start', 'center'],
  marginLeft: ['18px', '10px'],
  marginRight: '10px',

  '.title': {
    fontSize: ['16px', '18px'],
    lineHeight: ['22px'],
  },

  '.subtitle': {
    fontSize: ['12px', '16px'],
    lineHeight: ['16px', '22px'],
  },
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
  height: '100%',

  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '140px',

  marginLeft: '16px',
}

const divider: SxStyleProp = {
  height: '42px',
  width: '1px',
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

export default {
  subscribeNewsletterContainer,
  textContainer,
  text,
  emailContainer,
  emailForm,
  emailInput,
  divider,
  iconContainer,
  submitArrow,
}
