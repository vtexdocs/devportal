import { Text, Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useIntl } from 'react-intl'
import getNavigation from 'utils/getNavigation'
//import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

import styles from 'styles/release-notes'
//import { PreviewContext } from 'utils/contexts/preview'
//import { useContext } from 'react'

// interface Props {
//   sidebarfallback: any //eslint-disable-line
//   sectionSelected?: DocumentationTitle | UpdatesTitle | ''
//   releasesData: UpdateElement[]
//   branch: string
// }

const ReleasePage: NextPage = () => {
  const intl = useIntl()
  //const { setBranchPreview } = useContext(PreviewContext)
  //setBranchPreview(branch)
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({
            id: 'announcements_page.title',
          })}
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: 'announcements_page.subtitle',
          })}
          key="title"
        />
      </Head>
      <Flex sx={styles.container}>
        <Text>WIP</Text>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  // locale,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'News'
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  // const currentLocale = locale ? locale : 'en'
  // const releasesData = await getReleasesData(branch, currentLocale)

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      // releasesData,
      branch,
    },
  }
}

export default ReleasePage
