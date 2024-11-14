import type { SxStyleProp } from '@vtex/brand-ui'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  color: '#6b7785',
  mb: '24px',
  lineHeight: '18px',
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
}

const breadcrumbItem: SxStyleProp = {
  color: '#6b7785 !important',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '90%',
  ':hover': {
    color: '#5E6E84 !important',
  },
}

export default { breadcrumb, breadcrumbItem }
