import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const LikeIcon = (props: IconProps) => (
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
      d="M7.444 19.9922H5.556C4.973 19.9922 4.5 19.5192 4.5 18.9362V11.5482C4.5 10.9652 4.973 10.4922 5.556 10.4922H7.444C8.027 10.4922 8.5 10.9652 8.5 11.5482V18.9362C8.5 19.5192 8.027 19.9922 7.444 19.9922V19.9922Z"
      stroke="#4A596B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11.5638L12.149 6.81276C12.828 5.92776 14.154 5.90576 14.863 6.76676V6.76676C15.128 7.08776 15.272 7.49176 15.272 7.90776V11.1788H18.368C18.969 11.1788 19.53 11.4788 19.864 11.9778L20.193 12.4688C20.488 12.9098 20.574 13.4588 20.427 13.9678L19.068 18.6898C18.846 19.4608 18.141 19.9918 17.339 19.9918H11.05C10.55 19.9918 10.072 19.7838 9.732 19.4178L8.5 18.0918"
      stroke="#4A596B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default LikeIcon
