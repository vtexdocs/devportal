import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const ArrowsIcon = (props: IconProps) => (
  <Icon
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.666 10.6673L16.0007 5.33398L21.3353 10.6673"
      stroke="#142032"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.3353 21.332L16.0007 26.6667L10.666 21.332"
      stroke="#142032"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
)

export default ArrowsIcon
