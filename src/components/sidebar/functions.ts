import { SxStyleProp } from '@vtexdocs/brand-ui'

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
