import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const RemovedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8.5" cy="8" r="8" fill="#F8E3E3" />
    <path
      d="M5.83203 5.33594L11.1654 10.6693"
      stroke="#CC3D3D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1654 5.33594L5.83203 10.6693"
      stroke="#CC3D3D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default RemovedIcon
