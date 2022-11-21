import { useRef } from 'react'
import { Flex } from '@vtex/brand-ui'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'

import SearchIcon from 'components/icons/search-icon'
import { getMessages } from 'utils/get-messages'
import styles from './styles'

const messages = getMessages()

const SearchBoxComponent = ({
  currentRefinement,
  refine,
}: SearchBoxProvided) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current != null) inputRef.current.focus()
  }

  return (
    <Flex sx={styles.searchContainer} onClick={handleClick}>
      <SearchIcon sx={styles.searchIcon} />
      <input
        style={styles.searchInput}
        ref={inputRef}
        className="searchComponent"
        type="text"
        placeholder={messages['landing_page_header_searchInput.message']}
        value={currentRefinement}
        data-cy="search"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </Flex>
  )
}

const SearchBox = connectSearchBox(SearchBoxComponent)

export default SearchBox
