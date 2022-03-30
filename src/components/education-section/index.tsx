import { Box, Text, Flex } from '@vtex/brand-ui'

import EducationChannel from 'components/education-channel'
import GithubIcon from 'components/icons/github-icon'
import HelpCenterIcon from 'components/icons/helpcenter-icon'
import CommunityIcon from 'components/icons/community-icon'
import { getGithubURL, getHelpCenterURL, getCommunityURL } from 'utils/get-url'

import styles from './styles'

const educationChannels = [
  {
    title: 'Github',
    description: 'Follow our code and contribute with VTEX on GitHub.',
    textLink: 'Go to Github',
    link: getGithubURL(),
    icon: GithubIcon,
  },
  {
    title: 'Help Center',
    description:
      'Explore our beginner tutorials, reference guides and articles.',
    textLink: 'Explore Help Center',
    link: getHelpCenterURL(),
    icon: HelpCenterIcon,
  },
  {
    title: 'Community',
    description: 'Find solutions and share ideas on VTEX community.',
    textLink: 'Meet the Community',
    link: getCommunityURL(),
    icon: CommunityIcon,
  },
]

const EducationSection = () => {
  return (
    <Box sx={styles.container}>
      <Text sx={styles.title}>Education channels</Text>
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
