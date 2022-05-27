import ReleaseNote from '../release-note'
import { Box, Flex, Text } from '@vtex/brand-ui'

import { releaseData as releases } from 'utils/constants'
import styles from 'components/release-section/styles'
import { getMessages } from 'utils/get-messages'

const messages = getMessages()

const ReleaseSection = () => {
  return (
    <Flex sx={styles.container}>
      <Box>
        <Text sx={styles.sectionTitle}>
          {messages['release_notes_page.title']}
        </Text>
        <Text sx={styles.sectionSubtitle}>
          {messages['release_notes_page.subtitle']}
        </Text>
        <Box sx={styles.sectionDivider}>
          <hr />
        </Box>
        {releases.map((release) => (
          <ReleaseNote key={release.title} {...release} />
        ))}
      </Box>
    </Flex>
  )
}

export default ReleaseSection
