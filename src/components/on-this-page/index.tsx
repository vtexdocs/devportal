import { useState } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'

import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'

import styles from './styles'
import TableOfContents from 'components/table-of-contents'

const OnThisPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <Flex sx={styles.container}>
      {open && (
        <Box sx={styles.contentContainer}>
          <Text sx={styles.onThisPageTitle}>On this page</Text>
          <Box>
            <TableOfContents />
          </Box>
        </Box>
      )}

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setOpen((open) => !open)}
      >
        {!open && <Text sx={styles.title}>On this page</Text>}
        <Box sx={styles.iconContainer}>
          {!open ? <MenuIcon size={32} /> : <CloseIcon size={32} />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default OnThisPage
