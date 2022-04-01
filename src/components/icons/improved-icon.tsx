import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const ImprovedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FFF2D4" />
    <path
      d="M12 10L7.99511 6L4 10"
      stroke="#FFB100"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default ImprovedIcon
