import { ReactElement, useEffect } from 'react'
import { Box, Flex, Button, Text } from '@vtex/brand-ui'
import { signIn, signOut } from 'next-auth/react'

import { useAuth } from 'utils/contexts/auth'
import styles from './styles'

interface Props {
  children: ReactElement[] | ReactElement
}

const Auth = ({ children }: Props) => {
  const { isAuthenticated, isLoading, checkAuth } = useAuth()

  // Trigger auth check when component mounts
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return (
      <Flex sx={styles.signInOuterContainer}>
        <Box sx={styles.signInInnerContainer}>
          <Text sx={styles.signInText}>Loading...</Text>
        </Box>
      </Flex>
    )
  }

  if (isAuthenticated) {
    return (
      <>
        {children}
        <Button sx={styles.signOutButton} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    )
  }

  return (
    <Flex sx={styles.signInOuterContainer}>
      <Box sx={styles.signInInnerContainer}>
        <Text sx={styles.signInText}>
          You need to log in to access this content!
        </Text>
        <Button sx={styles.signInButton} onClick={() => signIn('github')}>
          Sign In
        </Button>
      </Box>
    </Flex>
  )
}

export default Auth
