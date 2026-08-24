import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['16px', '24px', '32px'],
  py: ['40px', '48px', '64px'],
  backgroundColor: 'muted.4',
  textAlign: 'center',
  borderTop: '1px solid #E7E9EE',
  borderBottom: '1px solid #E7E9EE',
}

const title: SxStyleProp = {
  fontSize: ['22px', '26px', '28px', '32px'],
  lineHeight: ['28px', '34px', '36px', '40px'],
  fontWeight: '400',
  color: '#132032',
  textAlign: 'center',
  letterSpacing: '-0.02em',
  mb: ['8px', '8px', '8px'],
}

const cardsContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1035px',
  mx: 'auto',
}

export default {
  cardsContainer,
  sectionContainer,
  title,
}
