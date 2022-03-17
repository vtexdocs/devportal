import { Box, Text, Grid } from '@vtex/brand-ui'

import EducationChannel from './education-channel'
import GithubIcon from 'public/icons/github-icon'
import HelpCenterIcon from 'public/icons/helpcenter-icon'
import CommunityIcon from 'public/icons/community-icon'

import styles from './styles'

const educationChannels = [
  {
    title: 'Github',
    description: 'Follow our code and contribute with VTEX on GitHub.',
    link: 'Go to Github',
    icon: GithubIcon,
  },
  {
    title: 'Help Center',
    description:
      'Explore our beginner tutorials, reference guides and articles.',
    link: 'Explore Help Center',
    icon: HelpCenterIcon,
  },
  {
    title: 'Community',
    description: 'Find solutions and share ideas on VTEX community.',
    link: 'Meet the Community',
    icon: CommunityIcon,
  },
]

const EducationSection = () => {
  return (
    <Box sx={styles.container}>
      <Text sx={styles.title}>Education channels</Text>
      <Grid sx={styles.channelsContainer}>
        {educationChannels.map((channel) => (
          <EducationChannel
            title={channel.title}
            description={channel.description}
            link={channel.link}
            Icon={channel.icon}
            key={channel.title}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default EducationSection
