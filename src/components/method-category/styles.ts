import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  border: '1px solid #DDDDDD',
  background: '#F4F4F4',
  borderRadius: '2px',
  width: '24px',
  height: '24px',
  alignItems: 'center',
  justifyContent: 'center',
}

const text: SxStyleProp = {
  fontWeight: '600',
  fontSize: '12px',
}

const closeIcon: SxStyleProp = {
  minWidth: '12px',
  minHeight: '12px',
  height: '12px',
  width: '12px',
  ml: '4px',
}

export default {
  container,
  text,
  closeIcon,
}
