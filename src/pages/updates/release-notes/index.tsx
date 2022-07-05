import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import SidebarContextProvider from 'utils/contexts/sidebar'
import ReleaseSection from '../../../components/release-section'

import styles from 'styles/api-guides'

const ReleasePage = () => {
  return (
    <SidebarContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected={'Release Notes'} />
        <ReleaseSection />
      </Flex>
    </SidebarContextProvider>
  )
}

export default ReleasePage
