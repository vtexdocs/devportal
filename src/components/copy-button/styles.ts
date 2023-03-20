import type { SxStyleProp } from '@vtex/brand-ui'

const basicButton: SxStyleProp = {
  float: 'right',
  ':focus': {
    outline: 'none !important',
    boxShadow: 'none !important',
  },
  width: '28px',
  height: '28px',
  padding: '6px',
  marginX: '18px',
}

const copyButton: SxStyleProp = {
  ...basicButton,
  backgroundColor: '#E7E9EE',
}
const copyButtonCopied: SxStyleProp = {
  ...basicButton,
  backgroundColor: '#E6F2E6',
}

const copyButtonIcons: SxStyleProp = {
  position: 'relative',
  width: '16px',
  height: '16px',
}

const copyButtonIcon: SxStyleProp = {
  position: 'absolute',
  top: '0',
  left: '0',
  fill: '#142032',
  opacity: 'inherit',
  width: 'inherit',
  height: 'inherit',
  transition: 'all 0.15s ease',
}

const copyButtonSuccessIcon: SxStyleProp = {
  ...copyButtonIcon,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fill: '#79A479',
}

const copyButtonIconCopied: SxStyleProp = {
  transform: 'scale(0.33)',
  opacity: '0',
}

const copyButtonSuccessIconCopied: SxStyleProp = {
  transform: 'translate(-50%, -50%)',
  opacity: '1',
  transitionDelay: '0.075s',
}

export default {
  copyButton,
  copyButtonCopied,
  copyButtonIcons,
  copyButtonIcon,
  copyButtonSuccessIcon,
  copyButtonSuccessIconCopied,
  copyButtonIconCopied,
}
