import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
  sidebarSectionHidden: boolean
  sidebarElementActive: Map<string, number>
  sidebarElementStatus: Map<string, { open: boolean; level: number }>
  setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>
  toggleSidebarElementActive: (title: string, level: number) => void
  toggleSidebarElementStatus: (
    title: string,
    open: boolean,
    level: number
  ) => void
}

export const SidebarContext = createContext<ContextType>({
  sidebarSectionHidden: false,
  sidebarElementActive: new Map(),
  sidebarElementStatus: new Map(),
  setSidebarSectionHidden: () => undefined,
  toggleSidebarElementActive: () => undefined,
  toggleSidebarElementStatus: () => undefined,
})

interface Props extends Partial<ContextType> {
  children: ReactNode
}

const SidebarContextProvider = ({ children, ...props }: Props) => {
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)
  const [sidebarElementActive, changeSidebarElementActive] = useState(new Map())
  const [sidebarElementStatus, changeSidebarElementStatus] = useState(new Map())

  const toggleSidebarElementActive = (title: string, level: number) => {
    sidebarElementActive.clear()
    changeSidebarElementActive(new Map(sidebarElementActive.set(title, level)))
  }

  const toggleSidebarElementStatus = (
    title: string,
    open: boolean,
    level: number
  ) => {
    changeSidebarElementStatus(
      new Map(sidebarElementStatus.set(title, { open, level }))
    )
  }

  return (
    <SidebarContext.Provider
      value={{
        sidebarSectionHidden,
        sidebarElementActive,
        sidebarElementStatus,
        setSidebarSectionHidden,
        toggleSidebarElementActive,
        toggleSidebarElementStatus,
        ...props,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
