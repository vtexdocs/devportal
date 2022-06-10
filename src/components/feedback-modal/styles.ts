import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '0',
  position: 'fixed',
  width: '100%',
  minHeight: '100%',
  bottom: 'auto',
  background: 'rgb(0, 0, 0, 0.25)',
  zIndex: '9999',
}

const box: SxStyleProp = {
  maxWidth: '320px',
  maxHeight: '179px',
}

const card: SxStyleProp = {
  background: '#FFFFFF',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  padding: '16px',
}

const input: SxStyleProp = {
  marginBlock: '4px 10px',
  height: '68px',
  'div:first-of-type': {
    height: '100%',
    px: '16px',
    paddingTop: '12px',
    alignItems: 'flex-start',
    input: {
      margin: '0',
    },
    ':focus-within': {
      boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9',
    },
  },
}

const button: SxStyleProp = {
  width: '100%',
  height: '32px',
  fontSize: '14px',
}

export default {
  container,
  box,
  card,
  input,
  button,
}
