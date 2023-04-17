import { useRouter } from 'next/router'
import { useContext } from 'react'
import { SearchContext } from 'utils/contexts/search'

import { Box, Text } from '@vtex/brand-ui'
import { searchClient } from 'utils/constants'

import { Configure, InstantSearch } from 'react-instantsearch-dom'
import CustomHits from './customHits'
import Pagination from './pagination'

import styles from './styles'

const SearchResults = () => {
  const router = useRouter()
  const { filterSelectedSection, ocurrenceCount } = useContext(SearchContext)
  const filters = filterSelectedSection
    ? `doctype: "${filterSelectedSection}"`
    : ''

  return (
    <Box sx={styles.resultContainer}>
      <Text sx={styles.resultText}>
        Showing {ocurrenceCount[filterSelectedSection]} results for "
        {router.query.keyword}" in all results
      </Text>
      <hr />
      <Box>
        <InstantSearch searchClient={searchClient} indexName="devportal-docs">
          <Configure
            filters={filters}
            query={router.query.keyword}
            clickAnalytics={true}
            hitsPerPage={6}
            facets={['doctype']}
            facetingAfterDistinct={true}
          />
          <CustomHits />
          <Pagination />
        </InstantSearch>
      </Box>
    </Box>
  )
}

export default SearchResults
