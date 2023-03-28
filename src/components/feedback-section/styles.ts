import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  paddingBottom: '16px',
  borderBottom: ['none', '1px solid #E7E9EE'],
  flexDirection: ['column', 'row'],
  alignItems: 'center',
  alignContent: ['initial', 'space-between'],
  marginTop: '32px',
  marginBottom: '16px',
}

const question: SxStyleProp = {
  fontSize: '16px',
  lineHeight: '18px',
}

const likeContainer: SxStyleProp = {
  paddingBottom: ['16px', '0'],
  borderBottom: ['1px solid #E7E9EE', 'none'],
  mt: ['8px', '0'],
  mb: ['16px', '0'],
  width: ['100%', 'auto'],
  justifyContent: ['center', 'initial'],
}

const likeIcon: SxStyleProp = {
  mr: '2px',
}

const dislikeIcon: SxStyleProp = {
  mr: '2px',
  transform: 'rotateX(180deg) rotateY(180deg)',
}

const button: SxStyleProp = {
  ':hover': {
    cursor: 'pointer',
    color: '#000711',
    'svg > path': {
      stroke: '#000711',
    },
  },
}

const buttonActive: SxStyleProp = {
  cursor: 'pointer',
  color: '#000711',
  'svg > path': {
    stroke: '#000711',
  },
}

const selectedButton: SxStyleProp = {
  color: 'muted.1',
}

const box: SxStyleProp = {
  alignItems: 'center',
  color: 'muted.0',
  fontSize: '16px',
  lineHeight: '22px',
}

const editContainer: SxStyleProp = {
  ...box,
  ...button,
  ':hover': {
    color: '#000711 !important',
  },
  ml: ['0', 'auto'],
  color: '#4A596B !important',
  display: 'flex',
}

const editIcon: SxStyleProp = { mr: '4px' }

export default {
  container,
  question,
  likeContainer,
  likeIcon,
  dislikeIcon,
  editContainer,
  editIcon,
  box,
  button,
  buttonActive,
  selectedButton,
}
