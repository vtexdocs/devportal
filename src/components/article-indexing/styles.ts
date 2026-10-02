import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  mx: 'auto',
  px: ['16px', '32px'],
  py: ['24px', '48px'],
  width: '100%',
  maxWidth: '1100px',
  boxSizing: 'border-box',
  color: '#4A4A4A',
}

const breadcrumb: SxStyleProp = {
  mb: '16px',
}

const title: SxStyleProp = {
  mb: ['24px', '32px'],
  fontSize: ['28px', '36px'],
  lineHeight: ['36px', '44px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const cardsContainer: SxStyleProp = {
  display: 'grid !important',
  gridTemplateColumns: [
    '1fr',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(2, minmax(0, 1fr))',
    'repeat(3, minmax(0, 1fr))',
  ],
  gap: ['12px', '16px'],
  width: '100%',
  minWidth: 0,
  alignItems: 'stretch',
}

export default {
  container,
  breadcrumb,
  title,
  cardsContainer,
}
