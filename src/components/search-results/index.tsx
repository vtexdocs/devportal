import { useRouter } from 'next/router'
import { useContext } from 'react'
import { SearchContext } from 'utils/contexts/search'

import { Box, Text } from '@vtex/brand-ui'
import { searchClient } from 'utils/constants'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import CustomHits from './customHits'
import Pagination from './pagination'
// import { Pagination } from 'react-instantsearch-dom'

import styles from './styles'

const SearchResults = () => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount } = useContext(SearchContext)

  return (
    <Box sx={styles.resultContainer}>
      <Text sx={styles.resultText}>
        Showing {ocurrenceCount.get(filterSelectedSection)} results for "
        {router.query.keyword}" in all results
      </Text>
      <hr />
      <Box>
        <InstantSearch searchClient={searchClient} indexName="devportal-docs">
          <Configure
            query={router.query.keyword}
            clickAnalytics={true}
            hitsPerPage={6}
          />
          <CustomHits />
          <Pagination />
        </InstantSearch>
      </Box>
    </Box>
  )
}

export default SearchResults
