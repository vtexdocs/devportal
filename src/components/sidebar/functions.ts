import { SxStyleProp } from '@vtex/brand-ui'

export const iconTooltipStyle: SxStyleProp = (tooltipState: boolean) => {
  const iconTooltip: SxStyleProp = {
    display: [
      'flex',
      'flex',
      'flex',
      'flex',
      'flex',
      tooltipState ? 'flex' : 'none !important',
    ],
  }
  return iconTooltip
}
