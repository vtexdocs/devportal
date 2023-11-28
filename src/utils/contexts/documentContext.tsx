import type { Dispatch, SetStateAction } from 'react'
import { createContext, useState } from 'react'

import type { Item } from 'components/table-of-contents'

type ActiveItem = {
  item: string
  subItem: string
}

type ContextType = {
  headings: Item[]
  activeItem: ActiveItem
  onThisPageOpenStatus: boolean
  setActiveItem: Dispatch<SetStateAction<ActiveItem>>
  setOnThisPageOpenStatus: Dispatch<SetStateAction<boolean>>
  goToPreviousItem: () => void
  goToPreviousSubItem: () => void
}

export const DocumentContext = createContext<ContextType>({
  headings: [],
  activeItem: {
    item: '',
    subItem: '',
  },
  onThisPageOpenStatus: false,
  setActiveItem: () => undefined,
  setOnThisPageOpenStatus: () => undefined,
  goToPreviousItem: () => undefined,
  goToPreviousSubItem: () => undefined,
})

interface Props {
  headings: Item[]
}

const DocumentContextProvider: React.FC<Props> = ({ children, headings }) => {
  const [onThisPageOpenStatus, setOnThisPageOpenStatus] = useState(false)
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    item: '',
    subItem: '',
  })

  const goToPreviousItem = () => {
    setActiveItem(({ item, subItem }) => {
      const index = headings.findIndex((heading) => heading.slug === item)
      if (index === -1) return { item, subItem }

      const previousItem = !index ? '' : headings[index - 1].slug
      const previousChildren = !index ? [] : headings[index - 1].children
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
      const heading = headings.find((heading) => heading.slug === item)
      const index = heading?.children.findIndex(
        (child) => child.slug === subItem
      )

      if (!heading || index === -1) return { item, subItem }

      return {
        item,
        subItem: !index ? '' : heading.children[index - 1].slug,
      }
    })
  }

  return (
    <DocumentContext.Provider
      value={{
        headings,
        activeItem,
        onThisPageOpenStatus,
        setActiveItem,
        setOnThisPageOpenStatus,
        goToPreviousItem,
        goToPreviousSubItem,
      }}
    >
      {children}
    </DocumentContext.Provider>
  )
}

export default DocumentContextProvider
