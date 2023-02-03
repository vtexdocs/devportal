import { SxStyleProp } from '@vtex/brand-ui'

const flexContainer: SxStyleProp = {
  mb: '32px',
  fontWeight: 'bold',
  fontSize: '0.85em',
  gridAutoFlow: 'column',
  mx: ['18px', '0px'],
  gap: '32px',
}

const paginationLink: SxStyleProp = {
  ':hover': {
    color: '#c81e51',
  },
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
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
  flexContainer,
  paginationLinkNext,
  paginationLinkPrevious,
}
