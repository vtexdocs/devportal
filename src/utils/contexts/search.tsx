import { createContext, Dispatch, SetStateAction, useState } from 'react'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import { Hit } from 'react-instantsearch-core'

type FilterType = DocumentationTitle | UpdatesTitle | ''

type SearchContextType = {
  filterSelectedSection: FilterType
  changeFilterSelectedSection: Dispatch<SetStateAction<FilterType>>
  ocurrenceCount: Map<FilterType, number>
  updateOcurrenceCount: (resultsData: Hit[]) => void
}

export const SearchContext = createContext<SearchContextType>({
  filterSelectedSection: '',
  changeFilterSelectedSection: () => undefined,
  ocurrenceCount: new Map(),
  updateOcurrenceCount: () => undefined,
})

const SearchContextProvider: React.FC = ({ children }) => {
  const [filterSelectedSection, changeFilterSelectedSection] =
    useState<FilterType>('')
  const [ocurrenceCount, changeOcurrenceCount] = useState<
    Map<FilterType, number>
  >(new Map())

  const updateOcurrenceCount = (resultsData: Hit[]) => {
    const ocurrenceCountMap = new Map<FilterType, number>()
    resultsData.forEach((result) => {
      ocurrenceCountMap.set(
        result.docType as FilterType,
        (ocurrenceCountMap.get(result.docType as FilterType) || 0) + 1
      )
    })
    ocurrenceCountMap.set('', resultsData.length)
    changeOcurrenceCount(ocurrenceCountMap)
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
