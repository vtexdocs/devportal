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
  px: ['16px', '24px', '32px'],
  py: ['16px', '24px', '40px'],
  width: ['100%', '90%', '80%'],
  maxWidth: '1035px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-out',

  ':hover': {
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
  },
}

const title: SxStyleProp = {
  fontSize: ['20px', '28px', '32px'],
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '16px',
}

const description: SxStyleProp = {
  fontSize: ['12px', '16px'],
  lineHeight: ['16px', '22px'],
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
  gap: ['8px', '12px'],
  marginBottom: '16px',
  width: '100%',
}

const privacyText: SxStyleProp = {
  fontSize: ['8px', '12px'],
  lineHeight: ['16px', '22px'],
  pl: ['22px', '32px'],
  fontWeight: '400',
  marginTop: '16px',
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
  privacyText,
  message,
}
