import ReleaseNote from '../release-note'
import { Box, Flex, Text } from '@vtex/brand-ui'

import styles from 'components/release-section/styles'
import { compareDates, getDate } from './functions'
import { UpdateElement } from 'utils/typings/types'
import { FormattedMessage } from 'react-intl'

interface IReleasesData {
  releasesData: UpdateElement[]
}

const ReleaseSection = ({ releasesData }: IReleasesData) => {
  const releases = releasesData.filter((release) => !release.hidden)
  return (
    <Flex sx={styles.outerContainer}>
      <Box sx={styles.innerContainer}>
        <Text sx={styles.sectionTitle}>
          <FormattedMessage id="announcements_page.title" />
        </Text>
        <Text sx={styles.sectionSubtitle}>
          <FormattedMessage id="announcements_page.subtitle" />
        </Text>
        <Box sx={styles.sectionDivider}>
          <hr />
        </Box>
        {releases.map((release, index) => (
          <>
            {index > 0
              ? compareDates(release.createdAt, releases[index - 1].createdAt)
                ? getDate(release.createdAt, true)
                : null
              : getDate(release.createdAt, true)}
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
