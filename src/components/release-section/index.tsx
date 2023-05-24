import ReleaseNote from '../release-note'
import { Box, Flex, Text } from '@vtexdocs/brand-ui'

import styles from 'components/release-section/styles'
import { getMessages } from 'utils/get-messages'
import { compareDates, getDate } from './functions'
import { SelectOption, UpdateElement } from 'utils/typings/types'
import Multiselect from 'components/multiselect'
import { useState } from 'react'

const messages = getMessages()

interface IReleasesData {
  releasesData: UpdateElement[]
  actionTypes: SelectOption[]
}

const ReleaseSection = ({ releasesData, actionTypes }: IReleasesData) => {
  const [filter, setFilter] = useState<SelectOption[]>([])
  const releases = releasesData.filter(
    (release) =>
      !release.hidden &&
      (filter.length === 0 ||
        filter.some((option) => option.label === release.actionType))
  )
  return (
    <Flex sx={styles.outerContainer}>
      <Box sx={styles.innerContainer}>
        <Text sx={styles.sectionTitle}>
          {messages['release_notes_page.title']}
        </Text>
        <Text sx={styles.sectionSubtitle}>
          {messages['release_notes_page.subtitle']}
        </Text>
        <Box sx={styles.sectionDivider}>
          <hr />
        </Box>
        <Multiselect
          title={messages['release_notes_multiselect_text']}
          options={actionTypes}
          onSelect={(selection) => {
            setFilter(selection)
          }}
        />
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
