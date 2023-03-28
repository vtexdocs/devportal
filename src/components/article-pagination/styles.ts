import { SxStyleProp } from '@vtex/brand-ui'

const mainContainer: SxStyleProp = {
  width: '100%',
  mt: '32px',
  mb: '52px',
  maxWidth: '100%',
}
const flexContainer: SxStyleProp = {
  fontWeight: 'bold',
  gridAutoFlow: 'column',
  px: ['18px', 'initial'],
  gap: ['16px', '20%'],
  gridAutoColumns: '1fr',
}

const paginationBox: SxStyleProp = {
  ':hover': {
    border: '1px solid #CCCED8',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    color: '#000711',
  },
  width: '100%',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  color: '#4A596B',
}

const paginationText: SxStyleProp = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
}

const subTitle: SxStyleProp = {
  color: '#A1A8B3',
  fontSize: '0.85em',
}

const paginationLink: SxStyleProp = {
  width: '100%',
  display: 'inline-flex',
}

const paginationLinkNext: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-end',
  textAlign: 'right',
}

const paginationLinkPrevious: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-start',
}

export default {
  mainContainer,
  flexContainer,
  paginationLinkNext,
  paginationLinkPrevious,
  paginationBox,
  paginationText,
  subTitle,
}
