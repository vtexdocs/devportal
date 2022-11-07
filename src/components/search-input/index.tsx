/* eslint-disable @typescript-eslint/no-explicit-any */
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import SearchBox from './search-box'
import Results from './results-component'

const searchClient = algoliasearch(
  'A4TXCBOC74',
  'bcced196dc1d3b841471e5aa412b62ad'
)

export default function SearchInput() {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="docsearch-scraper-md-files"
      >
        <SearchBox />
        <Results />
      </InstantSearch>
    </>
  )
}
