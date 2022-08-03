import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CloseFilterIcon = (props: IconProps) => (
  <Icon
    {...props}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="12" height="12" rx="2" fill="#2978B5" />
    <path
      d="M3 3L9 9"
      stroke="#DEECF7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 3L3 9"
      stroke="#DEECF7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default CloseFilterIcon
