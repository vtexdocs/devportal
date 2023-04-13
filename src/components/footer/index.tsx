import { Box, FooterLanding } from '@vtex/brand-ui'
import styles from './styles'
import {
  getGithubURL,
  getHelpCenterURL,
  getCommunityURL,
  getFeedbackURL,
} from 'utils/get-url'
import { useIntl } from 'react-intl'

const Footer = () => {
  const intl = useIntl()

  const links = [
    {
      message: intl.formatMessage({
        id: 'landing_page_footer_github.message',
      }),
      to: () => getGithubURL(),
    },
    {
      message: intl.formatMessage({
        id: 'landing_page_footer_help_center.message',
      }),
      to: () => getHelpCenterURL(),
    },
    {
      message: intl.formatMessage({
        id: 'landing_page_footer_community.message',
      }),
      to: () => getCommunityURL(),
    },
    {
      message: intl.formatMessage({
        id: 'landing_page_footer_feedback.message',
      }),
      to: () => getFeedbackURL(),
    },
  ]
  return (
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
}

export default Footer
