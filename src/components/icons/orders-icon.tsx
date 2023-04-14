import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const OrdersIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16rem" height="16rem" fill="none"></rect>
    <circle fill="#4A596B" cx="80" cy="216" r="16"></circle>
    <circle fill="#4A596B" cx="184" cy="216" r="16"></circle>
    <path
      d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
      fill="none"
      stroke="#4A596B"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="18"
    ></path>
  </Icon>
)

export default OrdersIcon
