import algoliasearch from 'algoliasearch/lite'
import { Configure, InstantSearch } from 'react-instantsearch-dom'
import aa from 'search-insights'

import SearchBox from './search-box'
import Results from './results-box'
import { Box } from '@vtex/brand-ui'
import { useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import { MultipleQueriesQuery } from '@algolia/client-search'

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ''
)

const searchClient = {
  ...algoliaClient,
  search(requests: MultipleQueriesQuery[]) {
    if (requests.every(({ params }) => !params?.query)) return
    return algoliaClient.search(requests)
  },
}

aa('init', {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_KEY || '',
  useCookie: true,
})

aa('getUserToken', null, (err) => {
  if (err) {
    console.error(err)
    return
  }
})

export default function SearchInput() {
  const [focusOut, setfocusOut] = useState<{ modaltoggle: boolean }>({
    modaltoggle: true,
  })
  const resultsBox = useRef<HTMLElement>()
  useClickOutside(resultsBox, setfocusOut)
  return (
    <InstantSearch searchClient={searchClient} indexName="helpcenter-docs">
      <Configure clickAnalytics={true} />
      <Box onFocus={() => setfocusOut({ modaltoggle: true })} ref={resultsBox}>
        <SearchBox />
        {focusOut.modaltoggle && <Results />}
      </Box>
    </InstantSearch>
  )
}
