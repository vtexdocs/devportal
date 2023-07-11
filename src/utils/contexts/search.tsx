import { createContext, Dispatch, SetStateAction, useState } from 'react'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

export type FilterType = DocumentationTitle | UpdatesTitle | ''

type OcurrenceType = {
  [key: string]: number
}

type SearchContextType = {
  filterSelectedSection: FilterType
  changeFilterSelectedSection: Dispatch<SetStateAction<FilterType>>
  ocurrenceCount: OcurrenceType
  updateOcurrenceCount: (resultsData: OcurrenceType) => void
}

export const SearchContext = createContext<SearchContextType>({
  filterSelectedSection: '',
  changeFilterSelectedSection: () => undefined,
  ocurrenceCount: {},
  updateOcurrenceCount: () => undefined,
})

const SearchContextProvider: React.FC = ({ children }) => {
  const [filterSelectedSection, changeFilterSelectedSection] =
    useState<FilterType>('')
  const [ocurrenceCount, changeOcurrenceCount] = useState({})

  const updateOcurrenceCount = (resultsData: OcurrenceType) => {
    changeOcurrenceCount(resultsData)
  }

  return (
    <SearchContext.Provider
      value={{
        filterSelectedSection,
        changeFilterSelectedSection,
        ocurrenceCount,
        updateOcurrenceCount,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
