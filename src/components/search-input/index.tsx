import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import SearchBox from './search-box'
import Results from './results-box'
import { Box } from '@vtex/brand-ui'
import { useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'

const searchClient = algoliasearch(
  'A4TXCBOC74',
  'bcced196dc1d3b841471e5aa412b62ad'
)

export default function SearchInput() {
  const [focusOut, setfocusOut] = useState<{ modaltoggle: boolean }>({
    modaltoggle: true,
  })
  const resultsBox = useRef<HTMLElement>()
  useClickOutside(resultsBox, setfocusOut)
  return (
    <InstantSearch searchClient={searchClient} indexName="devportal-docs">
      <Box onFocus={() => setfocusOut({ modaltoggle: true })} ref={resultsBox}>
        <SearchBox />
        {focusOut.modaltoggle && <Results />}
      </Box>
    </InstantSearch>
  )
}
