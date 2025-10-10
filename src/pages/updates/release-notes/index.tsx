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

type UpdateWithTs = UpdateElement & { __ts: number }
type ReleasesByType = Record<string, UpdateWithTs[]>

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  releasesByType: ReleasesByType
  actionTypes: SelectOption[]
  branch: string
  availableTags: string[]
}

const messages = getMessages()

const ReleasePage: NextPage<Props> = ({
  releasesByType,
  branch,
  availableTags,
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
        <ReleaseSection
          releasesByType={releasesByType}
          availableTags={availableTags}
        />
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

  const releasesDataRaw: UpdateElement[] = await getReleasesData(branch)

  const releasesData: UpdateWithTs[] = releasesDataRaw
    .map((r) => ({
      ...r,
      __ts: new Date(r.createdAt).getTime(),
    }))
    .sort((a, b) => b.__ts - a.__ts)

  const grouped: Record<string, UpdateWithTs[]> = {}
  for (const item of releasesData) {
    const type = item.actionType ?? 'other'
    ;(grouped[type] ??= []).push(item)
  }

  const releasesByType: Record<string, UpdateWithTs[]> = {
    all: releasesData,
    ...grouped,
  }

  const allTags = new Set<string>()
  releasesDataRaw.forEach((release) => {
    const tags = release.tags
    tags?.forEach((tag) => allTags.add(tag))
  })
  const availableTags = Array.from(allTags).sort()

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      releasesByType,
      branch,
      availableTags,
    },
  }
}

export default ReleasePage
