import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  px: ['16px', '24px', '32px'],
  pt: ['40px', '48px', '64px'],
  pb: ['40px', '48px', '64px'],
  width: '100%',
  maxWidth: '1100px',
  mx: 'auto',
}

const title: SxStyleProp = {
  fontSize: ['22px', '26px', '28px', '32px'],
  lineHeight: ['28px', '34px', '36px', '40px'],
  fontWeight: '400',
  color: '#132032',
  textAlign: 'center',
  letterSpacing: '-0.02em',
  mb: ['24px', '32px', '40px'],
}

const channelsContainer: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: ['1fr', '1fr', '1fr', 'repeat(3, minmax(0, 1fr))'],
  gap: ['12px', '16px', '20px'],
  width: '100%',
  alignItems: 'stretch',
}

export default {
  container,
  title,
  channelsContainer,
}
