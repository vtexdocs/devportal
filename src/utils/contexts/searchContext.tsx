import { createContext, Dispatch, SetStateAction, useState } from 'react'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

type FilterType = DocumentationTitle | UpdatesTitle | ''

type SearchContextType = {
  filterSelectedSection: FilterType
  changeFilterSelectedSection: Dispatch<SetStateAction<FilterType>>
}

export const SearchContext = createContext<SearchContextType>({
  filterSelectedSection: '',
  changeFilterSelectedSection: () => undefined,
})

const SearchContextProvider: React.FC = ({ children }) => {
  const [filterSelectedSection, changeFilterSelectedSection] =
    useState<FilterType>('')

  return (
    <SearchContext.Provider
      value={{
        filterSelectedSection,
        changeFilterSelectedSection,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
