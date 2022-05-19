import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import styles from 'styles/api-guides'
import ContextProvider from 'utils/contexts/context'
import ReleaseSection from '../../../components/release-section'

const ReleasePage = () => {
  return (
    <ContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected={'Release Notes'} />
        <ReleaseSection />
      </Flex>
    </ContextProvider>
  )
}

export default ReleasePage
