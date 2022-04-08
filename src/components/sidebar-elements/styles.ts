import { SxStyleProp } from '@vtex/brand-ui'

const init: SxStyleProp = {
  width: 'auto',
}

const elementText: SxStyleProp = {
  color: 'muted.0',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
}

const elementActive: SxStyleProp = {
  ...elementText,
  color: 'primary.active',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  color: 'muted.1',
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: 'primary.active',
}

const elementButton: SxStyleProp = {
  textTransform: 'initial',
  fontVariationSettings: 'unset',
  padding: '0',
  margin: '0',
}

export default {
  init,
  elementText,
  elementActive,
  arrowIcon,
  arrowIconActive,
  elementButton,
}
