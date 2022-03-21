import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: '32px',
  py: '64px',
  backgroundColor: 'muted.4',
}

const title: SxStyleProp = {
  fontSize: '40px',
  fontWeight: '400',
  lineHeight: '50px',
  color: '#4A4A4A',
  textAlign: 'center',
}

const cardsContainer: SxStyleProp = {
  mt: '40px',
  flexDirection: 'column',
  alignItems: 'center',
}

export default {
  cardsContainer,
  sectionContainer,
  title,
}
