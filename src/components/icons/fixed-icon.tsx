import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const FixedIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#DEECF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0206 5.31442C12.2158 5.50969 12.2158 5.82627 12.0205 6.02153L7.35387 10.688C7.15861 10.8832 6.84205 10.8832 6.64679 10.688L4.31345 8.35487C4.11818 8.15962 4.11817 7.84304 4.31342 7.64776C4.50868 7.45249 4.82526 7.45248 5.02053 7.64773L7.00032 9.62734L11.3134 5.31441C11.5087 5.11915 11.8253 5.11916 12.0206 5.31442Z"
      fill="#2953B2"
      stroke="#2953B2"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

export default FixedIcon
