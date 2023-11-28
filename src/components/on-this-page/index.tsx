import { useContext } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { DocumentContext } from 'utils/contexts/documentContext'

import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'

import styles from './styles'
import { FormattedMessage } from 'react-intl'
import { TableOfContents } from '@vtexdocs/components'

const OnThisPage = () => {
  const { onThisPageOpenStatus, setOnThisPageOpenStatus } =
    useContext(DocumentContext)

  return (
    <Flex sx={styles.container}>
      <AnimateHeight
        duration={300}
        delay={onThisPageOpenStatus ? 300 : 0}
        height={onThisPageOpenStatus ? 'auto' : 0}
      >
        <Box sx={styles.contentContainer}>
          <Text sx={styles.onThisPageTitle}>
            <FormattedMessage id="api_guide_documentation_page_on_this_page.title" />
          </Text>
          <Box>
            <TableOfContents />
          </Box>
        </Box>
      </AnimateHeight>

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setOnThisPageOpenStatus((open) => !open)}
      >
        <Text sx={styles.title(onThisPageOpenStatus)}>
          <FormattedMessage id="api_guide_documentation_page_on_this_page.title" />
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
