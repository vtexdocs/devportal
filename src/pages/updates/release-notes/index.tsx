import { Flex } from '@vtex/brand-ui'
import { GetStaticProps, NextPage } from 'next'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import getNavigation from 'utils/getNavigation'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/api-guides'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const ReleasePage: NextPage<Props> = () => {
  return (
    <Flex sx={styles.container}>
      <ReleaseSection />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'Release Notes'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default ReleasePage
