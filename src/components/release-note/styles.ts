import { SxStyleProp } from '@vtex/brand-ui'

const releaseContainer: SxStyleProp = {
  mb: '28px',
}

const actionType: SxStyleProp = {
  fontSize: '16px',
  ml: '-16px',
}

const actionIcon: SxStyleProp = {
  minWidth: '16px',
  minHeight: '16px',
  width: '16px',
  height: '16px',
}

const content: SxStyleProp = {
  flexDirection: 'column',
  maxWidth: ['272px', '495px', '495px', '495px', '671px'],
  minWidth: ['272px', '495px', '495px', '495px', '671px'],
  pt: 0,
  ml: '-16px',
  mt: '-32px',
  mb: '-32px',
}

const releaseDate: SxStyleProp = {
  color: 'muted.1',
  fontSize: ['12px', '16px'],
  lineHeight: '22px',
}

const releaseTitle: SxStyleProp = {
  color: '#0C1522',
  fontSize: ['16px', '18px'],
  lineHeight: '24px',
  mt: '8px',
}

const releaseDescription: SxStyleProp = {
  color: '#4A4A4A',
  fontSize: ['12px', '16px'],
  lineHeight: '22px',
  mt: '8px',
}

const arrowIcon: SxStyleProp = {
  pb: '30px',
  pr: '0px',
  pl: 0,
  color: 'muted.0',
}

export default {
  releaseContainer,
  actionType,
  actionIcon,
  content,
  releaseTitle,
  releaseDate,
  releaseDescription,
  arrowIcon,
}
