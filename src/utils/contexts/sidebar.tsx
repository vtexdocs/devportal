import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
  sidebarSectionHidden: boolean
  activeSidebarElement: string
  sidebarElementStatus: Map<string, boolean>
  setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>
  setActiveSidebarElement: Dispatch<SetStateAction<string>>
  toggleSidebarElementStatus: (title: string) => void
  openSidebarElement: (title: string) => void
}

export const SidebarContext = createContext<ContextType>({
  sidebarSectionHidden: false,
  activeSidebarElement: '',
  sidebarElementStatus: new Map(),
  setSidebarSectionHidden: () => undefined,
  setActiveSidebarElement: () => undefined,
  toggleSidebarElementStatus: () => undefined,
  openSidebarElement: () => undefined,
})

interface Props extends Partial<ContextType> {
  children: ReactNode
}

const SidebarContextProvider = ({ children, ...props }: Props) => {
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)
  const [activeSidebarElement, setActiveSidebarElement] = useState('')
  const [sidebarElementStatus, setSidebarElementStatus] = useState(new Map())

  const toggleSidebarElementStatus = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      const open =
        !sidebarElementStatus.has(title) || !sidebarElementStatus.get(title)

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
        openSidebarElement,
        ...props,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
