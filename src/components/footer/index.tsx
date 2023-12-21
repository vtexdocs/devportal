import { Box, Flex, Link } from '@vtex/brand-ui'
import styles from './styles'
import {
  getDeveloperPortalURL,
  getGithubURL,
  getCommunityURL,
  getFeedbackURL,
  getSiteMapURL,
  getFacebookURL,
  getInstagramURL,
  getYoutubeURL,
  getLinkedinURL,
  getTwitterURL,
} from 'utils/get-url'
import { useIntl } from 'react-intl'
import FacebookIcon from 'components/icons/facebook-icon'
import LocaleSwitcherFooter from 'components/locale-switcher-footer'
import VtexLogoFooter from 'components/icons/vtexLogoFooter'
import InstagramIcon from 'components/icons/instagram-icon'
import LinkedinIcon from 'components/icons/linkedin-icon'
import YoutubeIcon from 'components/icons/youtube-icon'
import TwitterIcon from 'components/icons/twitter-icon'

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
        id: 'landing_page_footer_developer_portal.message',
      }),
      to: () => getDeveloperPortalURL(),
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
    {
      message: intl.formatMessage({
        id: 'landing_page_footer_site_map.message',
      }),
      to: () => getSiteMapURL(),
    },
  ]

  const socialIcons = [
    {
      to: () => getFacebookURL(),
      component: <FacebookIcon sx={{ size: 32 }} />,
    },
    {
      to: () => getInstagramURL(),
      component: <InstagramIcon sx={{ size: 32 }} />,
    },
    {
      to: () => getYoutubeURL(),
      component: <YoutubeIcon sx={{ size: 32 }} />,
    },
    {
      to: () => getLinkedinURL(),
      component: <LinkedinIcon sx={{ size: 32 }} />,
    },
    {
      to: () => getTwitterURL(),
      component: <TwitterIcon sx={{ size: 32 }} />,
    },
  ]
  return (
    <Box sx={styles.outerBox}>
      <VtexLogoFooter sx={{ width: '61px', height: '22px' }} />
      <Flex sx={styles.socialMediaIcons}>
        {socialIcons.map((icon, index) => (
          <Link key={index} href={icon.to()}>
            {icon.component}
          </Link>
        ))}
      </Flex>
      <Flex sx={styles.textLinkItems}>
        {links.map((link, index) => (
          <Link sx={{ color: '#CCCED8' }} key={index} href={link.to()}>
            {link.message}
          </Link>
        ))}
        <LocaleSwitcherFooter sx={styles.localeSwitchLanding} />
      </Flex>
    </Box>
  )
}

export default Footer
