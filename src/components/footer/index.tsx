import { FooterLanding } from '@vtex/brand-ui'
import { getMessages } from 'utils/get-messages'
import styles from './styles'
import {
  getGithubURL,
  getHelpCenterURL,
  getCommunityURL,
  getFeedbackURL,
} from 'utils/get-url'

const messages = getMessages()

const links = [
  {
    message: messages['landing_page_footer_github.message'],
    to: () => getGithubURL(),
  },
  {
    message: messages['landing_page_footer_help_center.message'],
    to: () => getHelpCenterURL(),
  },
  {
    message: messages['landing_page_footer_community.message'],
    to: () => getCommunityURL(),
  },
  {
    message: messages['landing_page_footer_feedback.message'],
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
