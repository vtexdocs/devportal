import Image from 'next/image'
import { useState } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'

import SidebarContextProvider from 'utils/contexts/sidebar'
import Sidebar from 'components/sidebar'
import WhatsNextCard from 'components/whats-next-card'
import SubscribeNewsletterSection from 'components/subscribe-newsletter-section'

import { getMessages } from 'utils/get-messages'
import { whatsNextData, resources } from 'utils/constants'

import image from '../../../../public/images/vtex-io.png'

import styles from 'styles/vtex-io'

const VTEXIOPage = () => {
  const messages = getMessages()
  const [sidebarSectionHidden, setSidebarSectionHidden] = useState(false)

  return (
    <SidebarContextProvider
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
                  <Box sx={styles.welcomeImageGradient}></Box>
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

            <Flex sx={styles.cardsContainer}>
              {whatsNextData.map((whatsNext) => (
                <WhatsNextCard {...whatsNext} />
              ))}
            </Flex>

            <SubscribeNewsletterSection containerType={'io'} />

            <Box sx={styles.resourcesSectionContainer}>
              <Text sx={styles.resourcesSectionTitle}>
                {messages['vtex_io_page_other_resources.title']}
              </Text>
              <Box>
                {resources.map((resource) => (
                  <Box key={resource.title} sx={styles.resourceContainer}>
                    <Link
                      target="_blank"
                      href={resource.link}
                      sx={styles.resourceTitle}
                    >
                      {resource.title}
                    </Link>
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
    </SidebarContextProvider>
  )
}

export default VTEXIOPage
