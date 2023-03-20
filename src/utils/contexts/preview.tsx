import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

interface Props extends Partial<ContextType> {
  children: ReactNode
}
type ContextType = {
  branchPreview: string
  setBranchPreview: Dispatch<SetStateAction<string>>
}

export const PreviewContext = createContext<ContextType>({
  branchPreview: '',
  setBranchPreview: () => undefined,
})

const PreviewContextProvider = ({ children, ...props }: Props) => {
  const [branchPreview, setBranchPreview] = useState('')

  return (
    <PreviewContext.Provider
      value={{
        branchPreview,
        setBranchPreview,
        ...props,
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export default PreviewContextProvider
