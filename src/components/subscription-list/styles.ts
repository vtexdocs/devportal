import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['18px', '32px'],
  py: ['32px', '64px'],
  backgroundColor: 'muted.4',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
  height: '100%', // Ensure the section takes full height for vertical centering
}

const cardContainer: SxStyleProp = {
  mt: ['16px', '24px', '24px', '32px'],
  px: ['16px', '32px'],
  py: ['16px', '40px'],
  width: '100%',
  justifyContent: 'center',
  maxWidth: '1035px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
}

const container: SxStyleProp = {
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
}

const title: SxStyleProp = {
  fontSize: ['16px', '28px'],
  lineHeight: ['30px', '38px', '38px', '38px', '50px'],
  color: 'text',
  textAlign: 'center',
}

const description: SxStyleProp = {
  fontSize: ['16px', '18px', '22px', '22px', '18px'],
  lineHeight: ['22px', '24px', '32px', '32px', '24px'],
  color: ['muted.1', 'muted.0'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  textAlign: 'center',
  justifyContent: 'center',
  mb: ['0px', '0px', '0px', '0px', '20px'],
}

const inputContainer: SxStyleProp = {
  display: 'flex',
  marginBottom: '10px',
}

const input: SxStyleProp = {
  flex: 1,
  padding: '10px',
  marginRight: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
}

const button: SxStyleProp = {
  padding: '10px',
  backgroundColor: '#E63369',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',
  '&:hover': {
    backgroundColor: '#F8F7FC',
    color: '#4A4A4A',
  },
}

const privacyText: SxStyleProp = {
  fontSize: ['8px', '12px'],
  lineHeight: ['16px', '22px'],
  color: ['muted.1', 'muted.0'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  mt: ['0px', '0px', '0px', '0px', '10px'],
}

const message = (isSuccess: boolean): SxStyleProp => ({
  marginTop: '10px',
  color: isSuccess ? 'green' : 'red',
})

export default {
  sectionContainer,
  cardContainer,
  container,
  title,
  description,
  inputContainer,
  input,
  button,
  privacyText,
  message,
}
