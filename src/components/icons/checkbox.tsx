import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

interface CheckboxProps extends IconProps {
  checked: boolean
}

const CheckboxIcon = (props: CheckboxProps) => (
  <Icon
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!props.checked ? (
      <>
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="3.5"
          fill="white"
          fillOpacity="0.01"
        />
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="3.5"
          stroke="#B9B9B9"
        />
      </>
    ) : (
      <>
        <rect width="20" height="20" rx="4" fill="#0C1522" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0303 5.96968C16.3232 6.26258 16.3232 6.73746 16.0303 7.03034L9.03032 14.03C8.73743 14.3229 8.26259 14.3229 7.96969 14.03L4.46969 10.5304C4.17679 10.2375 4.17677 9.7626 4.46965 9.46969C4.76253 9.17679 5.2374 9.17677 5.53031 9.46965L8.49999 12.4391L14.9697 5.96966C15.2626 5.67677 15.7375 5.67678 16.0303 5.96968Z"
          fill="white"
        />
      </>
    )}
  </Icon>
)

export default CheckboxIcon
