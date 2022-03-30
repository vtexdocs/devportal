import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const RemovedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FDEFEF" />
    <path
      d="M5.3335 5.33325L10.6668 10.6666"
      stroke="#DC5A41"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6668 5.33325L5.3335 10.6666"
      stroke="#DC5A41"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default RemovedIcon
