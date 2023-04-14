import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const StatusIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16rem" height="16rem" fill="none"></rect>
    <line
      x1="104"
      y1="104"
      x2="104"
      y2="208"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></line>
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></line>
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      stroke-width="18"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    ></rect>
  </Icon>
)

export default StatusIcon
