import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['18px', '32px'],
  py: ['32px', '64px'],
  backgroundColor: 'muted.4',
  textAlign: ['center', 'center', 'initial'],
  borderTop: '1px solid #e7e9ef',
  borderBottom: '1px solid #e7e9ef',
}

const title: SxStyleProp = {
  fontSize: '48px',
  lineHeight: ['30px', '38px', '38px', '50px'],
  fontWeight: '400',
  color: '#4A4A4A',
  textAlign: 'center',
}

const cardsContainer: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'center',
  display: ['inline-block', 'inline-block', 'flex'],
  width: ['auto', 'auto', '100%'],
}

export default {
  cardsContainer,
  sectionContainer,
  title,
}
