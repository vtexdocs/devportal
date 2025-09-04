import type { SxStyleProp } from '@vtex/brand-ui'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  color: '#6b7785',
  lineHeight: '24px',
  flexWrap: 'wrap',
}

const breadcrumbItem: SxStyleProp = {
  color: '#6b7785',
  ':hover': {
    color: '#5E6E84',
  },
}

export default { breadcrumb, breadcrumbItem }
