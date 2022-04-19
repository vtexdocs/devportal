import { Box, Flex, Text } from '@vtex/brand-ui'
import { DocDataElement, UpdatesDataElement } from 'pages/search'

import styles from './styles'

interface SearchSectionProps {
  dataElement: DocDataElement | UpdatesDataElement
  index: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  return (
    <Flex
      sx={styles.sectionContainer}
      key={`search-section-${dataElement.title}${index}`}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <dataElement.Icon sx={styles.sectionIcon} />
        <Text className="search-section-title" sx={styles.sectionTitle}>
          {dataElement.title}
        </Text>
      </Flex>
      <Box className="search-section-count" sx={styles.sectionCount}>
        100
      </Box>
    </Flex>
  )
}

export default SearchSection
