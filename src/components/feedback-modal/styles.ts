import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '0',
  left: '0',
  position: 'fixed',
  width: '100%',
  minHeight: '100%',
  bottom: 'auto',
  background: 'rgb(0, 0, 0, 0.25)',
  zIndex: '9999',
}

const box: SxStyleProp = {
  width: '320px',
  height: '176px',
}

const card: SxStyleProp = {
  background: '#FFFFFF',
  border: '1px solid #E7E9EE',
  borderRadius: '4px',
  padding: '15px',
}

const title: SxStyleProp = {
  fontSize: '14px',
  color: '#545454',
}

const textarea: SxStyleProp = {
  marginBlock: '4px 10px',
  height: '68px',
  textarea: {
    height: '100%',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '19.6px',
    color: '#000000',
    px: '16px',
    paddingTop: '12px',
    ':focus-within': {
      boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #B9B9B9',
    },
  },
  ':before': {
    display: 'none',
  },
}

const button: SxStyleProp = {
  width: '100%',
  height: '32px',
  fontSize: '14px',
}

const arrow: SxStyleProp = {
  display: ['none', 'initial'],
  minWidth: 'initial',
  minHeight: 'initial',
  position: 'absolute',
  bottom: '0',
  left: 'calc(50% - 12px)',
  height: '14px',
}

export default {
  container,
  box,
  card,
  title,
  textarea,
  button,
  arrow,
}
