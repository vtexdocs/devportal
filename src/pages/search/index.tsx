import { Flex } from '@vtex/brand-ui'
import styles from 'styles/search-page'
import SearchSections from 'components/search-sections'
import SearchContextProvider from 'utils/contexts/search'
import SearchResults from 'components/search-results'

const SearchPage = () => {
  return (
    <SearchContextProvider>
      <Flex sx={styles.body}>
        <SearchSections />
        <SearchResults />
      </Flex>
    </SearchContextProvider>
  )
}

export default SearchPage
