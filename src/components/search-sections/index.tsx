import { Box, Flex, Text } from '@vtex/brand-ui'

import { docsIcons, notesIcons } from 'pages/search/index'
import SearchSection from 'components/search-section'
import styles from './styles'

const SearchSections = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.docsSection}>
        <Flex sx={styles.sectionContainer}>
          <Text sx={styles.allResults}>All results</Text>
          <Box sx={styles.sectionCount}>25</Box>
        </Flex>
        {docsIcons.map((docsIcon, index) => (
          <SearchSection iconElement={docsIcon} index={index} />
        ))}
      </Box>
      <Box sx={styles.notesSection}>
        {notesIcons.map((notesIcon, index) => (
          <SearchSection iconElement={notesIcon} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default SearchSections
