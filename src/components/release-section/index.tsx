import ReleaseNote from '../release-note'
import { Box, Flex, Text } from '@vtex/brand-ui'

import { releaseData as releases } from 'utils/constants'
import styles from 'components/release-section/styles'
import { getMessages } from 'utils/get-messages'
import { compareDates, getDate } from './functions'

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
        {releases.map((release, index) => (
          <>
            {index > 0
              ? compareDates(release.createdAt, releases[index - 1].createdAt)
                ? getDate(release.createdAt)
                : null
              : getDate(release.createdAt)}
            <ReleaseNote
              key={`${release.slug}`}
              isFirst={index == 0}
              {...release}
            />
          </>
        ))}
      </Box>
    </Flex>
  )
}

export default ReleaseSection
