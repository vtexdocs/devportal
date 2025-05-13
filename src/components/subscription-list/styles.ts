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

const messageCard: SxStyleProp = {
  position: 'relative', // Ensure it stays within the component
  marginTop: '16px', // Add spacing from the privacy policy
  padding: ['8px', '16px'], // Responsive padding
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: (theme) => (theme.messageType === 'success' ? 'lightgreen' : 'lightcoral'), // Dynamic background color
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
  width: ['90%', '500px'], // Responsive width
  maxWidth: '500px', // Ensure it doesn't exceed 500px
  height: 'auto', // Adjust height dynamically
  display: 'flex', // Use flexbox for alignment
  alignItems: 'center', // Center content vertically
  justifyContent: 'center', // Center content horizontally
  marginLeft: 'auto', // Center horizontally
  marginRight: 'auto', // Center horizontally
}

const popupCard: SxStyleProp = {
  position: 'relative', // Ensure it stays within the component
  marginTop: '16px', // Add spacing from the privacy policy
  padding: ['8px', '16px'], // Responsive padding
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: (theme) => (theme.messageType === 'success' ? 'lightgreen' : 'lightcoral'), // Dynamic background color
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
  width: ['90%', '500px'], // Responsive width
  maxWidth: '100px', // Ensure it doesn't exceed 500px
  height: 'auto', // Adjust height dynamically
  display: 'flex', // Use flexbox for alignment
  alignItems: 'center', // Center content vertically
  justifyContent: 'center', // Center content horizontally
  marginLeft: 'auto', // Center horizontally
  marginRight: 'auto', // Center horizontally
}

// Add keyframes for fade-in animation
const globalStyles: SxStyleProp = {
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}

export default {
  sectionContainer,
  cardContainer,
  container,
  title,
  description,
  inputContainer,
  privacyText,
  message,
  messageCard,
  popupCard,
  globalStyles,
}
