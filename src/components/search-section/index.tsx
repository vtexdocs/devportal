import { Box, Flex, Text } from '@vtex/brand-ui'
import type { DocDataElement, UpdatesDataElement } from 'utils/typings/types'
import { useContext } from 'react'
import { SearchContext } from 'utils/contexts/searchContext'

import styles from './styles'

interface SearchSectionProps {
  dataElement: DocDataElement | UpdatesDataElement | null
  index?: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  const { filterSelectedSection, toggleFilterSelectedSection } =
    useContext(SearchContext)
  return !dataElement ? (
    <Flex sx={styles.sectionContainer}>
      <Text className="search-section-title" sx={styles.allResultsText}>
        All results
      </Text>
      <Box className="search-section-count" sx={styles.sectionCount}>
        25
      </Box>
    </Flex>
  ) : (
    <Flex
      sx={styles.sectionContainer}
      key={`search-section-${dataElement.title}${index}`}
      onClick={() => toggleFilterSelectedSection(dataElement.title)}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <dataElement.Icon sx={styles.sectionIcon} />
        <Text
          className="search-section-title"
          sx={
            filterSelectedSection === dataElement.title
              ? styles.sectionTitleActive
              : styles.sectionTitle
          }
        >
          {dataElement.title}
        </Text>
      </Flex>
      <Box className="search-section-count" sx={styles.sectionCount}>
        100
      </Box>
    </Flex>
  )
}

export default SearchSection
