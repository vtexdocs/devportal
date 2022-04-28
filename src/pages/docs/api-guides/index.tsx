import { Flex } from '@vtex/brand-ui'

import Sidebar from 'components/sidebar'
import styles from 'styles/api-guides'
import ContextProvider from 'utils/contexts/context'

const ApiGuidesPage = () => {
  return (
    <ContextProvider>
      <Flex sx={styles.container}>
        <Sidebar sectionSelected={'API Guides'} />
        <h2>Hello world</h2>
      </Flex>
    </ContextProvider>
  )
}

export default ApiGuidesPage
