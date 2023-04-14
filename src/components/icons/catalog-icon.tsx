import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const CatalogIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16rem" height="16rem" fill="none"></rect>
    <path
      d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></path>
    <circle cx="84" cy="84" r="12" fill="#4A596B"></circle>
  </Icon>
)

export default CatalogIcon
