import { useContext } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { APIGuideContext } from 'utils/contexts/api-guide'

import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'

import TableOfContents from 'components/table-of-contents'

import styles from './styles'

const OnThisPage = () => {
  const { onThisPageOpenStatus, setOnThisPageOpenStatus } =
    useContext(APIGuideContext)

  return (
    <Flex sx={styles.container}>
      <AnimateHeight
        duration={300}
        delay={onThisPageOpenStatus ? 300 : 0}
        height={onThisPageOpenStatus ? 'auto' : 0}
      >
        <Box sx={styles.contentContainer}>
          <Text sx={styles.onThisPageTitle}>On this page</Text>
          <Box>
            <TableOfContents />
          </Box>
        </Box>
      </AnimateHeight>

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setOnThisPageOpenStatus((open) => !open)}
      >
        <Text sx={styles.title(onThisPageOpenStatus)}>On this page</Text>
        <Box sx={styles.iconContainer}>
          {!onThisPageOpenStatus ? (
            <MenuIcon size={32} />
          ) : (
            <CloseIcon size={32} />
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default OnThisPage
