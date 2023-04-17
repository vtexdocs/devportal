import { Box, Text, Flex } from '@vtex/brand-ui'

import EducationChannel from 'components/education-channel'
import HelpCenterIcon from 'components/icons/helpcenter-icon'
import CommunityIcon from 'components/icons/community-icon'
import DeveloperPortalIcon from 'components/icons/developer-portal-icon'

import {
  getDeveloperPortalURL,
  getCommunityURL,
  getSupportURL,
} from 'utils/get-url'

import styles from './styles'
import { useIntl } from 'react-intl'

const EducationSection = () => {
  const intl = useIntl()

  const educationChannels = [
    {
      title: intl.formatMessage({ id: 'landing_page_education_support.title' }),
      description: intl.formatMessage({
        id: 'landing_page_education_support.description',
      }),
      textLink: intl.formatMessage({
        id: 'landing_page_education_support.textLink',
      }),
      link: getSupportURL(),
      icon: HelpCenterIcon,
    },
    {
      title: intl.formatMessage({
        id: 'landing_page_education_community.title',
      }),
      description: intl.formatMessage({
        id: 'landing_page_education_community.description',
      }),
      textLink: intl.formatMessage({
        id: 'landing_page_education_community.textLink',
      }),
      link: getCommunityURL(),
      icon: CommunityIcon,
    },
    {
      title: intl.formatMessage({
        id: 'landing_page_education_developer_portal.title',
      }),
      description: intl.formatMessage({
        id: 'landing_page_education_developer_portal.description',
      }),
      textLink: intl.formatMessage({
        id: 'landing_page_education_developer_portal.textLink',
      }),
      link: getDeveloperPortalURL(),
      icon: DeveloperPortalIcon,
    },
  ]
  return (
    <Box sx={styles.container}>
      <Text sx={styles.title}>
        {intl.formatMessage({ id: 'landing_page_education.title' })}
      </Text>
      <Flex sx={styles.channelsContainer}>
        {educationChannels.map((channel) => (
          <EducationChannel
            title={channel.title}
            description={channel.description}
            textLink={channel.textLink}
            link={channel.link}
            Icon={channel.icon}
            key={channel.title}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default EducationSection
