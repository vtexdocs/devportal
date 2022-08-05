import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  px: '17px',
  paddingTop: '6px',
  borderBottom: '1px solid #E7E9EE',
  paddingBottom: '16px',
  mb: '24px',
}

const text: SxStyleProp = {
  mb: '8px',
}

const category: SxStyleProp = {
  mr: '8px',
  px: '4px',
  width: 'auto',
  cursor: 'pointer',
  ':hover': {
    borderWidth: '2px',
  },
}

const clear: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  color: 'muted.0',
  fontSize: '12px',
  cursor: 'pointer',
  ':hover': {
    color: '#000711',
  },
}

export default {
  container,
  text,
  category,
  clear,
}
