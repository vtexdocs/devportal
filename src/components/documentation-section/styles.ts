import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  px: ['8px', '32px'],
  paddingBlock: ['0px 24px', '32px'],
}

const title: SxStyleProp = {
  fontSize: ['20px', '40px'],
  lineHeight: ['30px', '50px'],
  fontWeight: '400',
  color: '#4A4A4A',
  textAlign: 'center',
  mt: ['32px'],
  mb: ['24px', '32px'],
}

const cardsContainer: SxStyleProp = {
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export default {
  cardsContainer,
  sectionContainer,
  title,
}
