import { createContext, useState } from 'react'

type ContextType = {
  appState: Map<string, number>
  arrowState: Map<string, { open: boolean; level: number }>
  toggleActive: (title: string, level: number) => void
  toggleArrow: (title: string, open: boolean, level: number) => void
}

export const Context = createContext<ContextType>({
  appState: new Map(),
  arrowState: new Map(),
  toggleActive: () => undefined,
  toggleArrow: () => undefined,
})

const ContextProvider: React.FC = ({ children }) => {
  const [appState, changeState] = useState(new Map())
  const [arrowState, changeArrow] = useState(new Map())

  const toggleActive = (title: string, level: number) => {
    appState.clear()
    changeState(new Map(appState.set(title, level)))
  }

  const toggleArrow = (title: string, open: boolean, level: number) => {
    changeArrow(new Map(arrowState.set(title, { open, level })))
  }

  return (
    <Context.Provider
      value={{ appState, arrowState, toggleActive, toggleArrow }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
