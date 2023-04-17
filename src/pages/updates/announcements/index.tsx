import { Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/release-notes'
import getReleasesData from 'utils/getReleasesData'
import { UpdateElement } from 'utils/typings/types'
import Head from 'next/head'
import { PreviewContext } from 'utils/contexts/preview'
import { useContext } from 'react'
import { useIntl } from 'react-intl'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  releasesData: UpdateElement[]
  branch: string
}

const ReleasePage: NextPage<Props> = ({ releasesData, branch }) => {
  const intl = useIntl()
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
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
        <ReleaseSection releasesData={releasesData} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  locale,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Announcements'
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  const currentLocale = locale ? locale : 'en'
  const releasesData = await getReleasesData(branch, currentLocale)

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      releasesData,
      branch,
    },
  }
}

export default ReleasePage
