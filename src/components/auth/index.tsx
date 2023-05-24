import { ReactElement } from 'react'
import { Box, Flex, Button, Text } from '@vtexdocs/brand-ui'
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from './styles'

interface Props {
  children: ReactElement[]
}

const Auth = ({ children }: Props) => {
  const { status } = useSession()
  if (status === 'authenticated') {
    return (
      <>
        {children}
        <Button sx={styles.signOutButton} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    )
  }

  if (status === 'unauthenticated') {
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

  return <></>
}

export default Auth
