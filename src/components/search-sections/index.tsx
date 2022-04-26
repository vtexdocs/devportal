import { Box, Flex, Text } from '@vtex/brand-ui'

import { docsIcons, notesIcons } from 'pages/search/index'
import SearchSection from 'components/search-section'
import styles from './styles'

const SearchSections = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.docsSection}>
        <Flex sx={styles.allResultsContainer}>
          <Text className="search-section-title" sx={styles.allResultsText}>
            All results
          </Text>
          <Box className="search-section-count" sx={styles.sectionCount}>
            25
          </Box>
        </Flex>
        {docsIcons.map((docsIcon, index) => (
          <SearchSection dataElement={docsIcon} index={index} />
        ))}
      </Box>
      <Box sx={styles.notesSection}>
        {notesIcons.map((notesIcon, index) => (
          <SearchSection dataElement={notesIcon} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default SearchSections
