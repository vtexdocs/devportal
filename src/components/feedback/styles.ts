import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  paddingBottom: '16px',
  borderBottom: '1px solid #E7E9EE',
  flexDirection: ['column', 'row'],
  alignItems: 'center',
  alignContent: ['initial', 'space-between'],
  marginBlock: '32px',
}

const likeIcon: SxStyleProp = {
  mr: '2px',
  ml: ['0', '8px'],
}

const dislikeIcon: SxStyleProp = {
  mr: '2px',
  ml: ['32px', '16px'],
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
  ml: ['0', 'auto'],
  display: 'Flex',
}

const editIcon: SxStyleProp = { mr: '4px' }

export default {
  container,
  likeIcon,
  dislikeIcon,
  editContainer,
  editIcon,
  box,
  button,
  selectedButton,
}
