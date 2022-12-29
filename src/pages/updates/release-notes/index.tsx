import { Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/api-guides'
import getReleasesData from 'utils/getReleasesData'
import { UpdateElement } from 'utils/typings/types'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  releasesData: UpdateElement[]
}

const ReleasePage: NextPage<Props> = ({ releasesData }) => {
  return (
    <Flex sx={styles.container}>
      <ReleaseSection releasesData={releasesData} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Release Notes'
  const releasesData = await getReleasesData()

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      releasesData,
    },
  }
}

export default ReleasePage
