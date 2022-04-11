import { createContext, useState } from 'react'

type ContextType = {
  sidebarElementActive: Map<string, number>
  sidebarElementStatus: Map<string, { open: boolean; level: number }>
  toggleSidebarElementActive: (title: string, level: number) => void
  toggleSidebarElementStatus: (
    title: string,
    open: boolean,
    level: number
  ) => void
}

export const Context = createContext<ContextType>({
  sidebarElementActive: new Map(),
  sidebarElementStatus: new Map(),
  toggleSidebarElementActive: () => undefined,
  toggleSidebarElementStatus: () => undefined,
})

const ContextProvider: React.FC = ({ children }) => {
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
    <Context.Provider
      value={{
        sidebarElementActive,
        sidebarElementStatus,
        toggleSidebarElementActive,
        toggleSidebarElementStatus,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
