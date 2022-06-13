import type { Dispatch, SetStateAction } from 'react'
import { createContext, useState } from 'react'

import type { Item } from 'components/table-of-contents'

type ContextType = {
  headers: Item[]
  activeItem: string
  activeSubItem: string
  setActiveItem: Dispatch<SetStateAction<string>>
  setActiveSubItem: Dispatch<SetStateAction<string>>
  goToPreviousItem: () => void
  goToPreviousSubItem: () => void
}

export const APIGuideContext = createContext<ContextType>({
  headers: [],
  activeItem: '',
  activeSubItem: '',
  setActiveItem: () => undefined,
  setActiveSubItem: () => undefined,
  goToPreviousItem: () => undefined,
  goToPreviousSubItem: () => undefined,
})

interface Props {
  headers: Item[]
}

const APIGuideContextProvider: React.FC<Props> = ({ children, headers }) => {
  const [activeItem, setActiveItem] = useState('')
  const [activeSubItem, setActiveSubItem] = useState('')

  const goToPreviousItem = () => {
    const index = headers.findIndex((header) => header.slug === activeItem)
    const previousSlug = !index ? '' : headers[index - 1].slug

    const previousChildren = !index ? [] : headers[index - 1].children
    const subItem = !previousChildren.length
      ? ''
      : previousChildren.slice(-1)[0].slug

    setActiveItem(previousSlug)
    setActiveSubItem(subItem)
  }

  const goToPreviousSubItem = () => {
    const { children } = headers.find(
      (header) => header.slug === activeItem
    ) as Item

    const index = children.findIndex((child) => child.slug === activeSubItem)
    const previousSlug = !index ? '' : children[index - 1].slug
    setActiveSubItem(previousSlug)
  }

  return (
    <APIGuideContext.Provider
      value={{
        headers,
        activeItem,
        activeSubItem,
        setActiveItem,
        setActiveSubItem,
        goToPreviousItem,
        goToPreviousSubItem,
      }}
    >
      {children}
    </APIGuideContext.Provider>
  )
}

export default APIGuideContextProvider
