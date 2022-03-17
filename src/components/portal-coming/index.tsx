import React from 'react'
import { Box, Text, Skeleton, Flex } from '@vtex/brand-ui'

import IconVTEX from 'public/icons/iconVTEX'
import styles from './styles'

const DevPortalIsComing = () => {
  return (
    <Flex sx={styles.container}>
      <Box sx={styles.titleBox}>
        <Text sx={styles.title}>New Developer Portal is coming</Text>
      </Box>
      <Flex sx={styles.iconBox}>
        <IconVTEX sx={styles.icon} />
      </Flex>
      <Skeleton sx={styles.skeleton} />
    </Flex>
  )
}

export default DevPortalIsComing
