import { Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/release-notes'
import getReleasesData from 'utils/getReleasesData'
import { SelectOption, UpdateElement } from 'utils/typings/types'
import Head from 'next/head'
import { getMessages } from 'utils/get-messages'
import { PreviewContext } from 'utils/contexts/preview'
import { useContext } from 'react'
import getActionTypes from 'utils/getActionTypes'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  releasesData: UpdateElement[]
  actionTypes: SelectOption[]
  branch: string
}

const messages = getMessages()

const ReleasePage: NextPage<Props> = ({
  releasesData,
  actionTypes,
  branch,
}) => {
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
        <ReleaseSection releasesData={releasesData} actionTypes={actionTypes} />
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
  const releasesData = (await getReleasesData(branch)).sort(
    (a: UpdateElement, b: UpdateElement) => {
      const aDate = new Date(a.createdAt ?? 0).getTime()
      const bDate = new Date(b.createdAt ?? 0).getTime()
      return bDate - aDate
    }
  )
  const actionTypes = getActionTypes(releasesData)

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      releasesData,
      actionTypes,
      branch,
    },
  }
}

export default ReleasePage
