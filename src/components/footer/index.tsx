import { FooterLanding } from '@vtex/brand-ui'
import styles from './styles'
import {
  getGithubURL,
  getHelpCenterURL,
  getCommunityURL,
  getFeedbackURL,
} from 'utils/get-url'

const links = [
  {
    message: 'Github',
    to: () => getGithubURL(),
  },
  {
    message: 'Help Center',
    to: () => getHelpCenterURL(),
  },
  {
    message: 'Community',
    to: () => getCommunityURL(),
  },
  {
    message: 'Feedback',
    to: () => getFeedbackURL(),
  },
]

const Footer = () => (
  <FooterLanding>
    {links.map((link, index) => (
      <FooterLanding.Link
        sx={styles.footerLinks}
        key={index}
        href={link.to()}
        target="_blank"
      >
        {link.message}
      </FooterLanding.Link>
    ))}
  </FooterLanding>
)

export default Footer
