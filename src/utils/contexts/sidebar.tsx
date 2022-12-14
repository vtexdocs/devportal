import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'
import { SWRConfig } from 'swr'

type ContextType = {
  sidebarSectionHidden: boolean
  activeSidebarElement: string
  sidebarElementStatus: Map<string, boolean>
  setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>
  setActiveSidebarElement: Dispatch<SetStateAction<string>>
  toggleSidebarElementStatus: (title: string) => void
  openSidebarElement: (title: string) => void
  closeSidebarElements: (parents: string[]) => void
}

export const SidebarContext = createContext<ContextType>({
  sidebarSectionHidden: false,
  activeSidebarElement: '',
  sidebarElementStatus: new Map(),
  setSidebarSectionHidden: () => undefined,
  setActiveSidebarElement: () => undefined,
  toggleSidebarElementStatus: () => undefined,
  openSidebarElement: () => undefined,
  closeSidebarElements: () => undefined,
})

interface Props extends Partial<ContextType> {
  children: ReactNode
  fallback?: any //eslint-disable-line
}

const SidebarContextProvider = ({ children, ...props }: Props) => {
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)
  const [activeSidebarElement, setActiveSidebarElement] = useState('')
  const [sidebarElementStatus, setSidebarElementStatus] = useState(new Map())

  const { fallback } = props

  const closeSidebarElements = (parents: string[]) => {
    const closeSidebar = sidebarElementStatus
    closeSidebar.forEach((value: boolean, key: string) => {
      parents.includes(key) ? '' : closeSidebar.set(key, false)
    })
    setSidebarElementStatus(closeSidebar)
  }

  const toggleSidebarElementStatus = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      const open =
        sidebarElementStatus.has(title) === false
          ? true
          : !sidebarElementStatus.get(title)

      return new Map(sidebarElementStatus.set(title, open))
    })
  }

  const openSidebarElement = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      return new Map(sidebarElementStatus.set(title, true))
    })
  }

  return (
    <SidebarContext.Provider
      value={{
        sidebarSectionHidden,
        activeSidebarElement,
        sidebarElementStatus,
        setSidebarSectionHidden,
        setActiveSidebarElement,
        toggleSidebarElementStatus,
        closeSidebarElements,
        openSidebarElement,
        ...props,
      }}
    >
      <SWRConfig
        value={{
          fallback: {
            '/api/navigation': fallback ? fallback : [],
          },
        }}
      >
        {children}
      </SWRConfig>
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
