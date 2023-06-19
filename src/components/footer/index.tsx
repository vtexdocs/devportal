import { Box, FooterLanding } from '@vtexdocs/brand-ui'
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
  <Box sx={styles.footerLinks}>
    <FooterLanding>
      {links.map((link, index) => (
        <FooterLanding.Link
          key={index}
          href={link.to()}
          target="_blank"
          sx={index % 2 ? styles.footerRightLinks : styles.footerLeftLinks}
        >
          {link.message}
        </FooterLanding.Link>
      ))}
    </FooterLanding>
  </Box>
)

export default Footer
