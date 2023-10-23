import type { SxStyleProp } from '@vtex/brand-ui'

const bar: SxStyleProp = {
  backgroundColor: '#FFF',
  borderRadius: '8px',
  color: '#5E6E84',
  padding: '20px',
  width: '80%',
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: '1280px',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}

const barContent: SxStyleProp = {
  display: 'flex',
  flex: '1 0 300px',
  flexDirection: 'column',
  maxWidth: '100%',
}

const title: SxStyleProp = {
  color: '#5E6E84',
  marginBottom: '10px',
  lineHeight: '28px',
  fontSize: '25px',
  fontWeight: '400',
}

const buttonContainer: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
  margin: '15px',
}

const acceptButton: SxStyleProp = {
  background: '#F71963',
  color: '#FFF',
  padding: '7px 16px',
  borderRadius: '2px',
  margin: '0',
  height: '32px',
  fontWeight: '400',

  ':hover': {
    opacity: '0.7',
  },
}

const declineButton: SxStyleProp = {
  border: '1px solid #F71963',
  background: '#FFF',
  color: '#F71963',
  borderRadius: '2px',
  fontWeight: '400',
  margin: '0',
  height: '32px',

  ':hover': {
    opacity: '0.7',
  },
}

export default {
  bar,
  barContent,
  title,
  acceptButton,
  declineButton,
  buttonContainer,
}
