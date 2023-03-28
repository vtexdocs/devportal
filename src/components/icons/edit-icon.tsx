import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const EditIcon = (props: IconProps) => (
  <Icon
    {...props}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.793 16.6107L16.119 6.28469C16.509 5.89469 17.142 5.89469 17.532 6.28469L19.208 7.96069C19.598 8.35069 19.598 8.98369 19.208 9.37369L8.881 19.6987C8.694 19.8867 8.44 19.9917 8.175 19.9917H5.5V17.3167C5.5 17.0517 5.605 16.7977 5.793 16.6107Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.25 8.15234L17.34 11.2423"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default EditIcon
