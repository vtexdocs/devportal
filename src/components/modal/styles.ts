import { SxStyleProp } from '@vtex/brand-ui'

const modalButton: SxStyleProp = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: 'muted.0',
  padding: '0.5rem',
  borderRadius: '4px',
}

const wrapContainer: SxStyleProp = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  padding: '1rem',
}

const innerContainer: SxStyleProp = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '75vh',
  overflow: 'auto',
  position: 'relative',
}

const modalTitle: SxStyleProp = {
  fontSize: '1.25rem',
  mb: '0.7rem',
  mr: '2rem',
}

const modalDescription: SxStyleProp = {
  color: 'muted.0',
  pb: '0.5rem',
  mb: '1rem',
  fontSize: '0.9rem',
  lineHeight: '1.6rem',
  borderBottom: '1px solid #E7E9EE',
}

export default {
  modalButton,
  innerContainer,
  wrapContainer,
  modalTitle,
  modalDescription,
}
