import { SxStyleProp } from '@vtexdocs/brand-ui'

const mainContainer: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '80vh',
  width: ['100%', '100%', '100%', '70%'],
  margin: 'auto',
}

const innerContainer: SxStyleProp = {
  padding: [' 0 80px', '80px 0'],
  flexDirection: ['column', 'column', 'column', 'row'],
}
const content: SxStyleProp = {
  margin: 'auto',
}

const contentText: SxStyleProp = {
  ...content,
  width: '100%',
  padding: ['80px 0', '0 80px'],
}
const title: SxStyleProp = {
  fontSize: '32px',
  lineHeight: '40px',
  marginBottom: '10px',
}
const description: SxStyleProp = {
  fontSize: '20px',
  lineHeight: '28px',
}
const button: SxStyleProp = {
  marginTop: '30px',
}
const buttonLink: SxStyleProp = {
  color: '#fff',
  ':hover': {
    color: '#fff',
  },
}

export default {
  mainContainer,
  content,
  contentText,
  innerContainer,
  title,
  description,
  button,
  buttonLink,
}
