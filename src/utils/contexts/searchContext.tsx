import { createContext, useState } from 'react'

type ContextType = {
  filterSelectedSection: string
  toggleFilterSelectedSection: (filterSelected: string) => void
}

export const SearchContext = createContext<ContextType>({
  filterSelectedSection: '',
  toggleFilterSelectedSection: () => undefined,
})

const SearchContextProvider: React.FC = ({ children }) => {
  const [filterSelectedSection, changefilterSelectedSection] = useState('')

  const toggleFilterSelectedSection = (filterSelected: string) => {
    console.log(filterSelected)
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
