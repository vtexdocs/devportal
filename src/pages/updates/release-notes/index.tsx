import { Flex } from '@vtex/brand-ui'

import ReleaseSection from '../../../components/release-section'

import styles from 'styles/api-guides'

const ReleasePage = () => {
  return (
    <Flex sx={styles.container}>
      <ReleaseSection />
    </Flex>
  )
}

export default ReleasePage
