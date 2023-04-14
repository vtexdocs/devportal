import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const DashboardsIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16rem" height="16rem" fill="none"></rect>
    <polyline
      points="44 208 44 136 100 136"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></polyline>
    <line
      x1="228"
      y1="208"
      x2="28"
      y2="208"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></line>
    <polyline
      points="100 208 100 88 156 88"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></polyline>
    <rect
      x="156"
      y="40"
      width="56"
      height="168"
      stroke-width="18"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    ></rect>
  </Icon>
)

export default DashboardsIcon
