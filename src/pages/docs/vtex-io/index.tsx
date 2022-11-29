import Image from 'next/image'
import { Fragment } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'

import WhatsNextCard from 'components/whats-next-card'

import { getMessages } from 'utils/get-messages'
import { whatsNextData, resources } from 'utils/constants'

import image from '../../../../public/images/vtex-io.png'

import styles from 'styles/vtex-io'

const VTEXIOPage = () => {
  const messages = getMessages()

  return (
    <Fragment>
      <Box sx={styles.welcomeOuterContainer}>
        <Flex sx={styles.welcomeInnerContainer}>
          <Text sx={styles.welcomeText}>{messages['vtex_io_page.title']}</Text>
          <Box sx={styles.welcomeImageOuterContainer}>
            <Box sx={styles.welcomeImageInnerContainer}>
              <Box sx={styles.welcomeImageGradient}></Box>
              <Image
                alt=""
                src={image}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box sx={styles.divider(false)}></Box>
      <Box sx={styles.contentContainer}>
        <Text sx={styles.subtitle}>{messages['vtex_io_page.subtitle']}</Text>

        <Flex sx={styles.cardsContainer}>
          {whatsNextData.map((whatsNext) => (
            <WhatsNextCard {...whatsNext} />
          ))}
        </Flex>

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
    </Fragment>
  )
}

export default VTEXIOPage
