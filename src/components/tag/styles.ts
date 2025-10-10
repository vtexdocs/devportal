import { SxStyleProp } from '@vtex/brand-ui'
import { KnownIssueStatus } from 'utils/typings/types'

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
  [status in
    | KnownIssueStatus
    | 'Default'
    | 'Selected'
    | 'New'
    | 'Gray']: SxStyleProp
} = {
  Backlog: {
    border: '1px solid #D3D3D3',
    color: '#4A596B',
    background: '#E9E9E9',
  },
  Fixed: {
    border: '1px solid #9FCDB4',
    color: '#3A6E32',
    background: '#DFF5DB',
  },
  Closed: {
    border: '1px solid #A5C0FF',
    color: '#2953B2',
    background: '#DEE8FE',
  },
  Scheduled: {
    border: '1px solid #FFD581',
    color: '#D77809',
    background: '#FFF3DA',
  },
  No_Fix: {
    border: '1px solid #FAA397',
    color: '#CB2610',
    background: '#FFDFDB',
  },
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
