import Image from 'next/image'
import { useState } from 'react'
import { Box, Flex, Text } from '@vtex/brand-ui'

import ContextProvider from 'utils/contexts/context'
import Sidebar from 'components/sidebar'

import { getMessages } from 'utils/get-messages'
import { resources } from 'utils/constants'

import image from '../../../../public/images/vtex-io.png'

import styles from 'styles/vtex-io'

const VTEXIOPage = () => {
  const messages = getMessages()
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)

  return (
    <ContextProvider
      sidebarSectionHidden={sidebarSectionHidden}
      setSidebarSectionHidden={setSidebarSectionHidden}
    >
      <Flex sx={styles.container}>
        <Sidebar sectionSelected="VTEX IO" />
        <Box sx={styles.mainContainer}>
          <Box sx={styles.welcomeOuterContainer}>
            <Flex sx={styles.welcomeInnerContainer}>
              <Text sx={styles.welcomeText}>
                {messages['vtex_io_page.title']}
              </Text>
              <Box sx={styles.welcomeImageOuterContainer}>
                <Box sx={styles.welcomeImageInnerContainer}>
                  <Image src={image} />
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box sx={styles.divider(sidebarSectionHidden)}></Box>

          <Box sx={styles.contentContainer}>
            <Text sx={styles.subtitle}>
              {messages['vtex_io_page.subtitle']}
            </Text>

            <Box sx={styles.resourcesSectionContainer}>
              <Text sx={styles.resourcesSectionTitle}>
                {messages['vtex_io_page_other_resources.title']}
              </Text>
              <Box>
                {resources.map((resource) => (
                  <Box key={resource.title} sx={styles.resourceContainer}>
                    <a href={resource.link} target="_blank">
                      <Text sx={styles.resourceTitle}>{resource.title}</Text>
                    </a>
                    <Text sx={styles.resourceDescription}>
                      {resource.description}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </ContextProvider>
  )
}

export default VTEXIOPage
