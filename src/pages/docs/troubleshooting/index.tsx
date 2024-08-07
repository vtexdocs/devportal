import { Fragment, useState, useContext, useMemo } from 'react'
import { Box, Flex, Link, Text } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/troubleshooting-image-header.png'
import styles from 'styles/documentation-landing-page'
import { TroubleshootingCardsElements } from 'utils/typings/types'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'
import getTroubleshootingData from 'utils/getTroubleshootingData'
import TroubleshootingCard from 'components/troubleshooting-card'
import Pagination from 'components/pagination'
import { resourceTroubleshooting } from 'utils/constants'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  branch: string
  troubleshootingData: TroubleshootingCardsElements[]
}

const TroubleshootingPage: NextPage<Props> = ({
  troubleshootingData,
  branch,
}) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  const itemsPerPage = 4
  const [page, setPage] = useState({
    curr: 1,
    total: Math.ceil(troubleshootingData.length / itemsPerPage),
  })
  const paginatedResult = useMemo(() => {
    return troubleshootingData.slice(
      (page.curr - 1) * itemsPerPage,
      page.curr * itemsPerPage
    )
  }, [page])
  function handleClick(props: { selected: number }) {
    if (props.selected !== undefined && props.selected !== page.curr)
      setPage({ ...page, curr: props.selected })
  }
  return (
    <>
      <Head>
        <title>{messages['troubleshooting.title']}</title>
        <meta
          property="og:title"
          content={messages['troubleshooting.subtitle']}
          key="title"
        />
        <meta
          name="docsearch:doctitle"
          content={messages['troubleshooting.title']}
        />
        <meta name="docsearch:doctype" content="Troubleshooting" />
      </Head>
      <Fragment>
        <PageHeader
          title={messages['troubleshooting.title']}
          description={messages['troubleshooting.subtitle']}
          imageUrl={image}
          imageAlt={messages['troubleshooting.title']}
        />
        <Box sx={styles.contentContainer}>
          {paginatedResult.map((item: TroubleshootingCardsElements) => (
            <Flex>
              <TroubleshootingCard
                title={item.title}
                description={item.description}
                slug={item.slug}
              />
            </Flex>
          ))}

          <Pagination
            forcePage={page.curr}
            pageCount={page.total}
            onPageChange={handleClick}
          />
          <Box sx={styles.resourcesSectionContainer}>
            <Text sx={styles.contentTitle}>
              {messages['troubleshooting_page_other_resources.title']}
            </Text>
            <Box>
              {resourceTroubleshooting.map((resourceTroubleshooting) => (
                <Box
                  key={resourceTroubleshooting.title}
                  sx={styles.resourceContainer}
                >
                  <Link
                    target="_blank"
                    href={resourceTroubleshooting.link}
                    sx={styles.resourceTitle}
                  >
                    {resourceTroubleshooting.title}
                  </Link>
                  <Text sx={styles.resourceDescription}>
                    {resourceTroubleshooting.description}
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
  const troubleshootingData = await getTroubleshootingData(branch)
  return {
    props: {
      sidebarfallback,
      sectionSelected,
      troubleshootingData,
      branch,
    },
  }
}

export default TroubleshootingPage
