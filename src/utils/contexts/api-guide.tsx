import { Dispatch, SetStateAction, useState } from 'react'
import { createContext } from 'react'

type ContextType = {
  activeItem: string
  activeSubItem: string
  setActiveItem: Dispatch<SetStateAction<string>>
  setActiveSubItem: Dispatch<SetStateAction<string>>
}

export const APIGuideContext = createContext<ContextType>({
  activeItem: '',
  activeSubItem: '',
  setActiveItem: () => undefined,
  setActiveSubItem: () => undefined,
})

const APIGuideContextProvider: React.FC = ({ children }) => {
  const [activeItem, setActiveItem] = useState('')
  const [activeSubItem, setActiveSubItem] = useState('')

  return (
    <APIGuideContext.Provider
      value={{
        activeItem,
        activeSubItem,
        setActiveItem,
        setActiveSubItem,
      }}
    >
      {children}
    </APIGuideContext.Provider>
  )
}

export default APIGuideContextProvider
