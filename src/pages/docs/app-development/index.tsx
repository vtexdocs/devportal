import Image from 'next/image'
import { Fragment } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'

import WhatsNextCard from 'components/whats-next-card'

import { getMessages } from 'utils/get-messages'
import { whatsNextData, resources } from 'utils/constants'

import image from '../../../../public/images/vtex-io.png'

import styles from 'styles/api-reference'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const AppDevelopmentPage: NextPage<Props> = () => {
  const messages = getMessages()

  return (
    <Fragment>
      <Box sx={styles.welcomeOuterContainer}>
        <Flex sx={styles.welcomeInnerContainer}>
          <Box sx={styles.welcomeHeader}>
            <Text sx={styles.welcomeText}>
              {messages['app_development_page.title']}
            </Text>
            <Text sx={styles.welcomeSubtitle}>
              Learn how to develop apps and integrations in the cloud with VTEX
              IO.
            </Text>
          </Box>
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
        <Flex sx={styles.cardsContainer}>
          {whatsNextData.map((whatsNext) => (
            <WhatsNextCard {...whatsNext} />
          ))}
        </Flex>

        <Box sx={styles.resourcesSectionContainer}>
          <Text sx={styles.resourcesSectionTitle}>
            {messages['app_development_page_other_resources.title']}
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

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'App Development'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default AppDevelopmentPage
