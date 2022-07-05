import { createContext, Dispatch, SetStateAction, useState } from 'react'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import type { SearchDataItemProps } from 'components/search-results'

type FilterType = DocumentationTitle | UpdatesTitle | ''

type SearchContextType = {
  filterSelectedSection: FilterType
  changeFilterSelectedSection: Dispatch<SetStateAction<FilterType>>
  ocurrenceCount: Map<FilterType, number>
  updateOcurrenceCount: (resultsData: SearchDataItemProps[]) => void
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

  const updateOcurrenceCount = (resultsData: SearchDataItemProps[]) => {
    const ocurrenceCountMap = new Map<FilterType, number>()
    resultsData.forEach((result) => {
      ocurrenceCountMap.set(
        result.doc,
        ocurrenceCountMap.get(result.doc)! + 1 || 1
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
