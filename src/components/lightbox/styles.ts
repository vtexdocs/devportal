import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  margin: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(52,52,52,0.5)',
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
  backgroundColor: '#FEFEFE',
  borderRadius: '5px',
  boxShadow: '2px 4px 16px rgb(0 0 0 / 30%)',
  position: 'relative',
  zIndex: '100000',
  padding: ['5px', '5px', '10px', '10px', '20px'],
  border: '1px solid #E7E9EE',

  '> img': {
    maxHeight: 'calc(100vh - 100px)',
    maxWidth: 'calc(100vw - 70px)',
    width: 'auto',
  },
}

const buttonContainer: SxStyleProp = {
  width: '100%',
  display: 'flex',
  borderBottom: '1px solid #E7E9EE',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingBottom: '5px',
}

const closeButton: SxStyleProp = {
  width: '20px',
  height: '20px',
  color: '#142032',

  ':hover': {
    border: '1px solid #E7E9EE',
  },
}

export default {
  container,
  modal,
  buttonContainer,
  closeButton,
}
