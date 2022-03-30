import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const DeprecatedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#E7E9EE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.8335 8C3.8335 7.72386 4.05735 7.5 4.3335 7.5H11.6668C11.943 7.5 12.1668 7.72386 12.1668 8C12.1668 8.27614 11.943 8.5 11.6668 8.5H4.3335C4.05735 8.5 3.8335 8.27614 3.8335 8Z"
      fill="black"
    />
  </Icon>
)

export default DeprecatedIcon
