import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const FixedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8.99805" r="8" fill="#DEECF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0201 6.31149C12.2153 6.50676 12.2153 6.82334 12.02 7.0186L7.35338 11.6851C7.15813 11.8803 6.84156 11.8803 6.6463 11.6851L4.31297 9.35194C4.1177 9.15669 4.11768 8.84011 4.31293 8.64483C4.50819 8.44956 4.82477 8.44955 5.02004 8.6448L6.99983 10.6244L11.313 6.31148C11.5082 6.11622 11.8248 6.11623 12.0201 6.31149Z"
      fill="#2953B2"
    />
  </Icon>
)

export default FixedIcon
