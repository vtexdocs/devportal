import { Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/release-notes'
import getReleasesData from 'utils/getReleasesData'
import { UpdateElement } from 'utils/typings/types'
import Head from 'next/head'
import { getMessages } from 'utils/get-messages'
import { PreviewContext } from 'utils/contexts/preview'
import { useContext } from 'react'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  releasesData: UpdateElement[]
  branch: string
}

const messages = getMessages()

const ReleasePage: NextPage<Props> = ({ releasesData, branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  return (
    <>
      <Head>
        <title>{messages['release_notes_page.title']}</title>
        <meta
          property="og:title"
          content={messages['release_notes_page.subtitle']}
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
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Release Notes'
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'
  const releasesData = await getReleasesData(branch)

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
