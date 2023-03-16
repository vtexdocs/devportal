import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'
import { SWRConfig } from 'swr'

type ContextType = {
  isEditorPreview: boolean
  sidebarSectionHidden: boolean
  activeSidebarElement: string
  activeSidebarTab: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarDataMaster: any
  sidebarElementStatus: Map<string, boolean>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSidebarDataMaster: Dispatch<SetStateAction<any>>
  setIsEditorPreview: Dispatch<SetStateAction<boolean>>
  setSidebarSectionHidden: Dispatch<SetStateAction<boolean>>
  setActiveSidebarElement: Dispatch<SetStateAction<string>>
  setActiveSidebarTab: Dispatch<SetStateAction<string>>
  toggleSidebarElementStatus: (title: string) => void
  openSidebarElement: (title: string) => void
  closeSidebarElements: (parentsArray: string[]) => void
}

export const SidebarContext = createContext<ContextType>({
  isEditorPreview: false,
  sidebarSectionHidden: false,
  activeSidebarElement: '',
  activeSidebarTab: '',
  sidebarDataMaster: {},
  setIsEditorPreview: () => undefined,
  sidebarElementStatus: new Map(),
  setSidebarDataMaster: () => undefined,
  setSidebarSectionHidden: () => undefined,
  setActiveSidebarElement: () => undefined,
  setActiveSidebarTab: () => undefined,
  toggleSidebarElementStatus: () => undefined,
  openSidebarElement: () => undefined,
  closeSidebarElements: () => undefined,
})

interface Props extends Partial<ContextType> {
  children: ReactNode
  fallback?: any //eslint-disable-line
  isPreview?: boolean
}

const SidebarContextProvider = ({ children, ...props }: Props) => {
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)
  const [activeSidebarElement, setActiveSidebarElement] = useState('')
  const [activeSidebarTab, setActiveSidebarTab] = useState('')
  const [sidebarElementStatus, setSidebarElementStatus] = useState(new Map())
  const [sidebarDataMaster, setSidebarDataMaster] = useState(props.fallback)
  const [isEditorPreview, setIsEditorPreview] = useState(props.isPreview)

  const { fallback } = props

  const toggleSidebarElementStatus = (title: string) => {
    setSidebarElementStatus((sidebarElementStatus) => {
      const open =
        sidebarElementStatus.has(title) === false
          ? true
          : !sidebarElementStatus.get(title)

      return new Map(sidebarElementStatus.set(title, open))
    })
  }

  const closeSidebarElements = (parentsArray: string[]) => {
    sidebarElementStatus.forEach((_value, key) => {
      if (!parentsArray.includes(key)) {
        setSidebarElementStatus((sidebarElementStatus) => {
          return new Map(sidebarElementStatus.set(key, false))
        })
      }
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
        isEditorPreview,
        setIsEditorPreview,
        sidebarSectionHidden,
        activeSidebarElement,
        activeSidebarTab,
        sidebarElementStatus,
        setSidebarSectionHidden,
        setActiveSidebarElement,
        setActiveSidebarTab,
        toggleSidebarElementStatus,
        openSidebarElement,
        closeSidebarElements,
        sidebarDataMaster,
        setSidebarDataMaster,
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
