import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['8px', '12px', '96px', '38px'],
  paddingTop: ['0px', '32px'],
  paddingBottom: ['24px', '52px', '52px', '48px'],
  margin: 'auto',
}

const title: SxStyleProp = {
  fontSize: ['20px', '28px', '28px', '40px'],
  lineHeight: ['30px', '38px', '38px', '50px'],
  fontWeight: '400',
  color: '#4A4A4A',
  textAlign: 'center',
  mt: ['32px'],
  mb: ['24px', '52px', '52px', '48px', '32px'],
}

const cardsContainer: SxStyleProp = {
  width: ['100%', '100%', '100%', '100%', '1000px', '100%'],
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export default {
  cardsContainer,
  sectionContainer,
  title,
}
