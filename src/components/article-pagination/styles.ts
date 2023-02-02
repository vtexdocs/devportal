import { SxStyleProp } from '@vtex/brand-ui'

const flexContainer: SxStyleProp = {
  mb: '32px',
  fontWeight: 'bold',
  fontSize: '0.85em',
  gridAutoFlow: 'column',
}

const paginationLink: SxStyleProp = {
  ':hover': {
    color: '#c81e51',
  },
}

const paginationLinkNext: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-end',
}

const paginationLinkPrevious: SxStyleProp = {
  ...paginationLink,
  justifySelf: 'flex-start',
}

export default {
  flexContainer,
  paginationLinkNext,
  paginationLinkPrevious,
}
