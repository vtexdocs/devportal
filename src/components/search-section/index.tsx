import { Box, Flex, Text } from '@vtex/brand-ui'
import type { DocDataElement, UpdatesDataElement } from 'utils/typings/types'
import { useContext, useEffect } from 'react'
import { FilterType, SearchContext } from 'utils/contexts/search'

import styles from './styles'
import { useRouter } from 'next/router'

interface SearchSectionProps {
  dataElement: DocDataElement | UpdatesDataElement | null
  index?: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount, changeFilterSelectedSection } =
    useContext(SearchContext)

  const updateFilter = (value: FilterType) => {
    router.query.filter = value
    changeFilterSelectedSection(value)
  }

  useEffect(() => {
    updateFilter('')
  }, [router.query])

  return !dataElement ? (
    <Flex sx={styles.sectionContainer} onClick={() => updateFilter('')}>
      <Text
        className="search-section-title"
        sx={
          filterSelectedSection
            ? styles.allResultsText
            : styles.allResultsTextActive
        }
      >
        All results
      </Text>
      <Box className="search-section-count" sx={styles.sectionCount}>
        {ocurrenceCount['']}
      </Box>
    </Flex>
  ) : (
    <Flex
      sx={styles.sectionContainer}
      key={`search-section-${dataElement.title}${index}`}
      onClick={() => updateFilter(dataElement.title)}
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
        {ocurrenceCount[dataElement.title] || 0}
      </Box>
    </Flex>
  )
}

export default SearchSection
