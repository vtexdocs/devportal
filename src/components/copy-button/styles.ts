import type { SxStyleProp } from '@vtex/brand-ui'

const copyButton: SxStyleProp = {
  float: 'right',
}

const copyButtonIcons: SxStyleProp = {
  position: 'relative',
  width: '1.125rem',
  height: '1.125rem',
}

const copyButtonIcon: SxStyleProp = {
  position: 'absolute',
  top: '0',
  left: '0',
  fill: 'currentColor',
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
  color: '#00d600',
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
  copyButtonIcons,
  copyButtonIcon,
  copyButtonSuccessIcon,
  copyButtonSuccessIconCopied,
  copyButtonIconCopied,
}
