import { SxStyleProp } from '@vtex/brand-ui'

const imageContainer: SxStyleProp = {
  cursor: 'pointer',
  width: 'fit-content',
  borderRadius: '5px',
  mt: '16px',
  mb: '24px',
  transition: '0.3s',
  ':hover': {
    boxShadow: '2px 4px 8px 2px rgb(0 0 0 / 10%)',
  },

  '> img': {
    display: 'block',
    padding: '0',
    margin: '0',
  },
}

const container: SxStyleProp = {
  margin: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.9)',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '10000',
}

const modal: SxStyleProp = {
  display: 'inline-block',
  margin: 'auto',
  boxShadow: '2px 4px 16px rgb(0 0 0 / 30%)',
  position: 'relative',
  zIndex: '10001',
  padding: '0',

  '> img': {
    display: 'block',
    maxHeight: 'calc(100vh - 50px)',
    maxWidth: 'calc(100vw - 50px)',
    width: 'auto',
    margin: '0',
    padding: '0',
  },
}

const closeButton: SxStyleProp = {
  position: 'absolute',
  zIndex: '10002',
  top: '10px',
  right: '10px',
  color: '#FEFEFE',

  ':hover': {
    color: 'rgb(100, 100, 100)',
  },
}

export default {
  imageContainer,
  container,
  modal,
  closeButton,
}
