import type { SxStyleProp } from '@vtex/brand-ui'

const breadcrumb: SxStyleProp = {
  alignItems: 'center',
  color: '#A1A8B3 !important',
  mb: ['32px', '32px', '32px', '32px', '32px', '32px', '64px'],
  fontSize: ['16px', '16px', '16px', '16px', '16px', '16px', '24px'],
  lineHeight: '18px',
}

const breadcrumbItem: SxStyleProp = {
  color: '#A1A8B3',
  ':hover': {
    color: '#F71963',
  },
}

const caret: SxStyleProp = {
  width: ['16px', '16px', '16px', '16px', '16px', '16px', '32px'],
  height: ['16px', '16px', '16px', '16px', '16px', '16px', '32px'],
}

export default { breadcrumb, breadcrumbItem, caret }
