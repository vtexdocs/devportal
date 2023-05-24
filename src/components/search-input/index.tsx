import { Configure, InstantSearch } from 'react-instantsearch-dom'
import aa from 'search-insights'

import SearchBox from './search-box'
import Results from './results-box'
import { Box } from '@vtexdocs/brand-ui'
import { useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import { searchClient } from 'utils/constants'

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

  const changeFocus = (value: boolean) => {
    setfocusOut({ modaltoggle: value })
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="devportal-docs">
      <Configure clickAnalytics={true} />
      <Box onFocus={() => setfocusOut({ modaltoggle: true })} ref={resultsBox}>
        <SearchBox changeFocus={changeFocus} />
        {focusOut.modaltoggle && <Results changeFocus={changeFocus} />}
      </Box>
    </InstantSearch>
  )
}
