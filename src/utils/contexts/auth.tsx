import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { useSession } from 'next-auth/react'

// Define the shape of our auth context
type AuthContextType = {
  isAuthenticated: boolean
  isLoading: boolean
  // Only trigger auth check when actually needed
  checkAuth: () => void
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  // Using a no-op function to avoid the empty function lint error
  checkAuth: () => {
    /* no-op */
  },
})

// Provider component that wraps app and makes auth object available
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authCheckTriggered, setAuthCheckTriggered] = useState(false)
  // Destructure what we need from the session hook
  const { status } = useSession({ required: false })

  // Derived state
  const isAuthenticated = status === 'authenticated'
  const isLoading = authCheckTriggered && status === 'loading'

  // Function to trigger auth check only when needed
  const checkAuth = () => {
    if (!authCheckTriggered) {
      setAuthCheckTriggered(true)
    }
  }

  // Debug logging in development only
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        'Auth status:',
        status,
        authCheckTriggered ? '(actively checked)' : '(not checked)'
      )
    }
  }, [status, authCheckTriggered])

  // The context value that will be supplied to any descendants of this provider
  const contextValue = {
    isAuthenticated,
    isLoading,
    checkAuth,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
