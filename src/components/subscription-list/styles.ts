import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['16px', '24px', '32px'],
  py: ['24px', '32px', '64px'],
  backgroundColor: 'muted.4',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const cardContainer: SxStyleProp = {
  mt: ['16px', '24px', '32px'],
  px: ['16px', '24px', '50px'],
  py: ['16px', '24px', '40px'],
  width: ['100%', '90%', '80%'],
  maxWidth: '1035px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
}

const title: SxStyleProp = {
  fontSize: ['20px', '28px', '28px', '40px'],
  lineHeight: ['30px', '38px', '38px', '50px'],
  fontWeight: '400',
  color: '#4A4A4A',
  textAlign: 'center',
}

const description: SxStyleProp = {
  fontSize: ['14px', '16px'],
  lineHeight: '25px',
  textAlign: 'center',
  marginBottom: '16px',
}

const container: SxStyleProp = {
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const inputContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: ['column', 'row'],
  gap: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}

const button: SxStyleProp = {
  height: '55px',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '9px',
}

const privacyText: SxStyleProp = {
  fontSize: ['12px', '14px'],
  lineHeight: ['16px', '22px'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  margin: '16px',
}

const message = (isSuccess: boolean): SxStyleProp => ({
  backgroundColor: isSuccess ? 'lightgreen' : 'lightcoral',
  padding: '10px',
  borderRadius: '5px',
})

const popupCard: SxStyleProp = {
  backgroundColor: 'white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  padding: ['8px', '12px'],
  boxSizing: 'border-box',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  marginTop: '16px',
  alignSelf: 'center',
}

export default {
  sectionContainer,
  cardContainer,
  container,
  title,
  description,
  inputContainer,
  button,
  privacyText,
  message,
  popupCard
}
