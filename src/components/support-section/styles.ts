import { SxStyleProp } from '@vtex/brand-ui'

const sectionContainer: SxStyleProp = {
  width: ['100%', '100%', '100%', '70%'],
  px: ['8px', '12px', '96px', '38px'],
  paddingTop: ['0px', '80px'],
  paddingBottom: ['24px', '52px', '52px', '48px'],
  margin: 'auto',
  borderBottom: '1px solid #e7e9ed',
}

const innerContainer: SxStyleProp = {
  padding: [' 0 32px', '32px 0'],
  flexDirection: ['column', 'column', 'column', 'row'],
}
const contentImage: SxStyleProp = {
  textAlign: 'right',
  paddingLeft: '40px',
}
const title: SxStyleProp = {
  fontSize: ['20px', '28px', '28px', '40px'],
  lineHeight: ['30px', '38px', '38px', '50px'],
  fontWeight: '400',
  color: '#4A4A4A',
}

const contentCards: SxStyleProp = {
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: '0 0 50%',
}

export default {
  sectionContainer,
  contentImage,
  innerContainer,
  contentCards,
  title,
}
