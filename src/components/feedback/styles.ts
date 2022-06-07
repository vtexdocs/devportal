import { SxStyleProp } from '@vtex/brand-ui'

const containter: SxStyleProp = {
  width: '100%',
  paddingBottom: '16px',
  borderBottom: '1px solid #E7E9EE',
  flexDirection: ['column', 'row'],
  alignItems: ['center', 'initial'],
  alignContent: ['initial', 'space-between'],
}

const likeIcon: SxStyleProp = {
  mr: '2px',
  ml: ['0px', '8px'],
}

const dislikeIcon: SxStyleProp = {
  mr: '2px',
  ml: ['32px', '16px'],
  transform: 'rotateX(180deg) rotateY(180deg)',
}

const editIcon: SxStyleProp = { ml: '4px' }

const text: SxStyleProp = {
  color: 'muted.0',
  fontSize: '16px',
  lineHeight: '22px',
}

export default {
  containter,
  likeIcon,
  dislikeIcon,
  editIcon,
  text,
}
