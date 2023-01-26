import type { SxStyleProp } from '@vtex/brand-ui'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  color: '#A1A8B3',
  mb: '32px',
  fontSize: '16px',
  lineHeight: '18px',
}

const breadcrumbItem: SxStyleProp = {
  color: '#A1A8B3 !important',
  ':hover': {
    color: '#F71963',
  },
}

export default { breadcrumb, breadcrumbItem }
