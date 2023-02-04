import type { SxStyleProp } from '@vtex/brand-ui'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  color: '#6b7785',
  mb: '32px',
  fontSize: '16px',
  lineHeight: '18px',
}

const breadcrumbItem: SxStyleProp = {
  color: '#6b7785 !important',
  ':hover': {
    color: '#5E6E84 !important',
  },
}

export default { breadcrumb, breadcrumbItem }
