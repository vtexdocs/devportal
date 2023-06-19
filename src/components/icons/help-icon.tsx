import type { IconProps } from '@vtexdocs/brand-ui'
import { Icon } from '@vtexdocs/brand-ui'

const HelpIcon = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {' '}
    <rect width="24" height="24" fill="white" />
    <path
      d="M12.0002 13.2033V12.9633C12.0002 12.1763 12.4862 11.7503 12.9742 11.4233C13.4502 11.1033 13.9272 10.6853 13.9272 9.91428C13.9272 8.85028 13.0652 7.98828 12.0012 7.98828C10.9372 7.98828 10.0742 8.84828 10.0742 9.91228"
      stroke="#4A596B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.999 15.9198C11.903 15.9198 11.825 15.9977 11.826 16.0938C11.826 16.1898 11.904 16.2678 12 16.2678C12.096 16.2678 12.174 16.1898 12.174 16.0938C12.174 15.9967 12.096 15.9198 11.999 15.9198"
      stroke="#4A596B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="8.75" stroke="#4A596B" strokeWidth="1.5" />
  </Icon>
)

export default HelpIcon
