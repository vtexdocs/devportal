import { SxStyleProp } from '@vtex/brand-ui'

const localeLabel: SxStyleProp = {
  color: 'white',
  pl: 2,
  display: 'block',
}

const optionContainer: SxStyleProp = {
  color: 'black',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  // width: '11rem',
  marginRight: '10px',
  top: 'auto',
  right: '0',
  bottom: '100%',
  px: 5,
  // border: '1px solid #e7e9ed',
  borderTop: 'none',
  backgroundColor: '#ffffff',
  boxShadow: '0px 20px 25px rgba(20, 32, 50, 0.1)',
}

const baseLocaleSwitcher: SxStyleProp = {
  alignItems: 'center',
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  outline: 'none',
}

const localeSwitcher: SxStyleProp = {
  position: 'relative',
  button: {
    ...baseLocaleSwitcher,
    display: 'flex',
    ':hover': {
      color: '#142032',
    },
    height: '100%',
    justifyContent: 'flex-start',
  },
}

export default {
  localeLabel,
  optionContainer,
  localeSwitcher,
  baseLocaleSwitcher,
}
