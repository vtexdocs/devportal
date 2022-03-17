import { FooterLanding } from '@vtex/brand-ui'
import styles from './styles'

const links = [
  {
    message: 'Github',
    to: () => '',
  },
  {
    message: 'Help Center',
    to: () => '',
  },
  {
    message: 'Community',
    to: () => '',
  },
  {
    message: 'Feedback',
    to: () => '',
  },
]

const Footer = () => (
  <FooterLanding>
    {links.map((link, index) => (
      <FooterLanding.Link sx={styles.footerLinks} key={index} href={link.to()}>
        {link.message}
      </FooterLanding.Link>
    ))}
  </FooterLanding>
)

export default Footer
