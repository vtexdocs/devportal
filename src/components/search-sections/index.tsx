import { Box } from '@vtex/brand-ui'

import { documentationData, updatesData } from 'utils/constants'
import SearchSection from 'components/search-section'
import styles from './styles'

const SearchSections = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.docsSection}>
        <SearchSection dataElement={null} />
        {documentationData.map((docsIcon, index) => (
          <SearchSection dataElement={docsIcon} index={index} />
        ))}
      </Box>
      <Box sx={styles.notesSection}>
        {updatesData.map((notesIcon, index) => (
          <SearchSection dataElement={notesIcon} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default SearchSections
