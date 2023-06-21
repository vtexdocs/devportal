import { Fragment, useContext } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import PageHeader from 'components/page-header'

import WhatsNextCard from 'components/whats-next-card'

import { getMessages } from 'utils/get-messages'
import { troubleshootingData, resources } from 'utils/constants'

import image from '../../../../public/images/troubleshooting.png'

import styles from 'styles/documentation-landing-page'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
}

const TroubleshootingPage: NextPage<Props> = ({ branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()

  return (
    <>
      <Head>
        <title>{messages['troubleshooting_page.title']}</title>
        <meta
          property="og:title"
          content={messages['troubleshooting_page.subtitle']}
          key="title"
        />
        <meta
          name="docsearch:doctitle"
          content={messages['troubleshooting_page.title']}
        />
        <meta name="docsearch:doctype" content="App Development" />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['troubleshooting_page.title']}
          description={messages['troubleshooting_page.subtitle']}
          imageUrl={image}
          imageAlt={messages['troubleshooting_page.title']}
        />
        <Box sx={styles.contentContainer}>
          <Flex sx={styles.cardsContainer}>
            {troubleshootingData.map((data) => (
              <WhatsNextCard {...data} key={data.title} />
            ))}
          </Flex>
          <Box sx={styles.resourcesSectionContainer}>
            <Text sx={styles.contentTitle}>
              {messages['troubleshooting_page_other_resources.title']}
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Troubleshooting'

  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      branch,
    },
  }
}

export default TroubleshootingPage
