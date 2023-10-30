import { useContext } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { APIGuideContext } from 'utils/contexts/api-guide'

import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'

import { TableOfContents } from '@components-library/index.mjs'

import { getMessages } from 'utils/get-messages'

import styles from './styles'

const OnThisPage = () => {
  const messages = getMessages()
  const { onThisPageOpenStatus, setOnThisPageOpenStatus, headings } =
    useContext(APIGuideContext)

  return (
    <Flex sx={styles.container}>
      <AnimateHeight
        duration={300}
        delay={onThisPageOpenStatus ? 300 : 0}
        height={onThisPageOpenStatus ? 'auto' : 0}
      >
        <Box sx={styles.contentContainer}>
          <Text sx={styles.onThisPageTitle}>
            {messages['api_guide_documentation_page_on_this_page.title']}
          </Text>
          <Box>
            <TableOfContents headingList={headings} />
          </Box>
        </Box>
      </AnimateHeight>

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setOnThisPageOpenStatus((open) => !open)}
      >
        <Text sx={styles.title(onThisPageOpenStatus)}>
          {messages['api_guide_documentation_page_on_this_page.title']}
        </Text>
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
