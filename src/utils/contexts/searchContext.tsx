import { createContext, useState } from 'react'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

type FilterType = DocumentationTitle | UpdatesTitle | ''

type ContextType = {
  filterSelectedSection: FilterType
  toggleFilterSelectedSection: (filterSelected: FilterType) => void
}

export const SearchContext = createContext<ContextType>({
  filterSelectedSection: '',
  toggleFilterSelectedSection: () => undefined,
})

const SearchContextProvider: React.FC = ({ children }) => {
  const [filterSelectedSection, changefilterSelectedSection] =
    useState<FilterType>('')

  const toggleFilterSelectedSection = (filterSelected: FilterType) => {
    changefilterSelectedSection(filterSelected)
  }

  return (
    <SearchContext.Provider
      value={{
        filterSelectedSection,
        toggleFilterSelectedSection,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
