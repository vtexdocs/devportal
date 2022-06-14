import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const LikeSelectedIcon = (props: IconProps) => (
  <Icon
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10.5719L11.649 5.82094C12.328 4.93594 13.654 4.91394 14.363 5.77494C14.628 6.09594 14.772 6.49994 14.772 6.91594V10.1869H17.868C18.469 10.1869 19.03 10.4869 19.364 10.9859L19.693 11.4769C19.988 11.9179 20.074 12.4669 19.927 12.9759L18.568 17.6979C18.346 18.4689 17.641 18.9999 16.839 18.9999H10.55C10.05 18.9999 9.572 18.7919 9.232 18.4259L8 17.0999"
      fill="#A1A8B3"
    />
    <path
      d="M5.056 19.5H6.944C7.80314 19.5 8.5 18.8031 8.5 17.944V10.556C8.5 9.69686 7.80314 9 6.944 9H5.056C4.19686 9 3.5 9.69686 3.5 10.556V17.944C3.5 18.8031 4.19686 19.5 5.056 19.5Z"
      fill="#A1A8B3"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default LikeSelectedIcon
