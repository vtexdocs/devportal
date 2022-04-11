import { Box, Text, Flex } from '@vtex/brand-ui'

import EducationChannel from 'components/education-channel'
import GithubIcon from 'components/icons/github-icon'
import HelpCenterIcon from 'components/icons/helpcenter-icon'
import CommunityIcon from 'components/icons/community-icon'
import { getGithubURL, getHelpCenterURL, getCommunityURL } from 'utils/get-url'
import { getMessages } from 'utils/get-messages'

import styles from './styles'

const messages = getMessages()

const educationChannels = [
  {
    title: messages['landing_page_education_github.title'],
    description: messages['landing_page_education_github.description'],
    textLink: messages['landing_page_education_github.textLink'],
    link: getGithubURL(),
    icon: GithubIcon,
  },
  {
    title: messages['landing_page_education_help_center.title'],
    description: messages['landing_page_education_help_center.description'],
    textLink: messages['landing_page_education_help_center.textLink'],
    link: getHelpCenterURL(),
    icon: HelpCenterIcon,
  },
  {
    title: messages['landing_page_education_community.title'],
    description: messages['landing_page_education_community.description'],
    textLink: messages['landing_page_education_community.textLink'],
    link: getCommunityURL(),
    icon: CommunityIcon,
  },
]

const EducationSection = () => {
  return (
    <Box sx={styles.container}>
      <Text sx={styles.title}>{messages['landing_page_education.title']}</Text>
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
