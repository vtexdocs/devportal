import { Box, Flex } from '@vtex/brand-ui'
import styles from 'styles/search-page'
import SearchSections from 'components/search-sections'
import SearchContextProvider from 'utils/contexts/search'
import SearchResults from 'components/search-results'
import SearchFilterTabBar from 'components/search-filter-tab-bar'
import SearchInput from 'components/search-input'

const SearchPage = () => {
  return (
    <SearchContextProvider>
      <Box>
        <Flex sx={styles.searchBarContainer}>
          <SearchInput />
        </Flex>
        <SearchFilterTabBar />
      </Box>
      <Flex sx={styles.body}>
        <SearchSections />
        <SearchResults />
      </Flex>
    </SearchContextProvider>
  )
}

export default SearchPage
