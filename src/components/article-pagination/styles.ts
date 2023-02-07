import { SxStyleProp } from '@vtex/brand-ui'

const mainContainer: SxStyleProp = {
  width: '100%',
  mb: '32px',
  maxWidth: '100%',
}
const flexContainer: SxStyleProp = {
  fontWeight: 'bold',
  fontSize: '0.85em',
  gridAutoFlow: 'column',
  mx: ['18px', 'initial'],
  gap: '40%',
}

const paginationText: SxStyleProp = {
  ':hover': {
    color: '#c81e51',
  },
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
}

const paginationLink: SxStyleProp = {
  width: '100%',
  display: 'inline-flex',
}

const paginationLinkNext: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-end',
  textAlign: 'right',
  ':after': {
    justifySelf: 'flex-end',
    textAlign: 'right',
    paddingLeft: '4px',
    content: "'»'",
  },
}

const paginationLinkPrevious: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-start',
  ':before': {
    content: "'«'",
    paddingRight: '4px',
  },
}

export default {
  mainContainer,
  flexContainer,
  paginationLinkNext,
  paginationLinkPrevious,
  paginationText,
}
