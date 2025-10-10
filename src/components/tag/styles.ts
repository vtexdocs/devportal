import { SxStyleProp } from '@vtex/brand-ui'

const tag: SxStyleProp = {
  borderRadius: '11.5px',
  height: '20px',
  fontSize: '12px',
  lineHeight: '20px',
  px: '7px',
  textAlign: 'center',
  textWrap: 'nowrap',
  minWidth: 'max-content',
}

const statusColors: {
  [status in 'Default' | 'Selected' | 'New' | 'Gray']: SxStyleProp
} = {
  Default: {
    border: '1px solid #A1AAB7',
    color: '#A1AAB7',
    background: '#ffff',

    ':hover': {
      color: '#4A596B',
      border: '1px solid #4A596B',
    },
  },
  Selected: {
    border: '1px solid #A1AAB7',
    color: '#ffff',
    background: '#A1AAB7',

    ':hover': {
      color: '#142032',
    },
  },
  New: {
    border: '1px solid #F71963',
    color: '#F71963',
    background: '#FFE0EF',
  },
  Gray: {
    color: '#4A596B',
    background: '#E7E9EE',
  },
}

export default {
  statusColors,
  tag,
}
