import { SxStyleProp } from '@vtex/brand-ui'

const signOutButton: SxStyleProp = {
  bottom: '20px',
  position: 'sticky',
  float: 'right',
  mr: '20px',
  mb: '20px',
}

const signInOuterContainer: SxStyleProp = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 14rem)',
  height: '100%',
  width: '100%',
}

const signInInnerContainer: SxStyleProp = {
  width: 'fit-content',
}

const signInText: SxStyleProp = {
  fontSize: ['16px', '20px'],
  mb: '12px',
}

const signInButton: SxStyleProp = {
  width: '100%',
}

export default {
  signInOuterContainer,
  signInInnerContainer,
  signInText,
  signInButton,
  signOutButton,
}
