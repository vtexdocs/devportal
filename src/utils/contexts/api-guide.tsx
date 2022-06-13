import type { Dispatch, SetStateAction } from 'react'
import { createContext, useState } from 'react'

import type { Item } from 'components/table-of-contents'

type ActiveItem = {
  item: string
  subItem: string
}

type ContextType = {
  headers: Item[]
  activeItem: ActiveItem
  setActiveItem: Dispatch<SetStateAction<ActiveItem>>
  goToPreviousItem: () => void
  goToPreviousSubItem: () => void
}

export const APIGuideContext = createContext<ContextType>({
  headers: [],
  activeItem: {
    item: '',
    subItem: '',
  },
  setActiveItem: () => undefined,
  goToPreviousItem: () => undefined,
  goToPreviousSubItem: () => undefined,
})

interface Props {
  headers: Item[]
}

const APIGuideContextProvider: React.FC<Props> = ({ children, headers }) => {
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    item: '',
    subItem: '',
  })

  const goToPreviousItem = () => {
    setActiveItem(({ item, subItem }) => {
      const index = headers.findIndex((header) => header.slug === item)
      if (index === -1) return { item, subItem }

      const previousItem = !index ? '' : headers[index - 1].slug
      const previousChildren = !index ? [] : headers[index - 1].children
      const previousSubItem = !previousChildren.length
        ? ''
        : previousChildren.slice(-1)[0].slug

      return {
        item: previousItem,
        subItem: previousSubItem,
      }
    })
  }

  const goToPreviousSubItem = () => {
    setActiveItem(({ item, subItem }) => {
      const header = headers.find((header) => header.slug === item)
      const index = header?.children.findIndex(
        (child) => child.slug === subItem
      )

      if (!header || index === -1) return { item, subItem }

      return {
        item,
        subItem: !index ? '' : header.children[index - 1].slug,
      }
    })
  }

  return (
    <APIGuideContext.Provider
      value={{
        headers,
        activeItem,
        setActiveItem,
        goToPreviousItem,
        goToPreviousSubItem,
      }}
    >
      {children}
    </APIGuideContext.Provider>
  )
}

export default APIGuideContextProvider
