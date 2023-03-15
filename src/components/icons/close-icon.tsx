import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CloseIcon = (props: IconProps) => (
  <Icon
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8L24 24"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 8L8 24"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CloseIcon
