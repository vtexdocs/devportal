import { Box } from '@vtexdocs/brand-ui'

import DocumentationCard from 'components/documentation-card'
import { documentationData, updatesData } from 'utils/constants'

import styles from './styles'

const DropdownMenu = () => {
  return (
    <Box sx={styles.outerContainer}>
      <Box sx={styles.innerContainer} data-cy="dropdown-menu">
        <Box
          sx={styles.documentationContainer}
          data-cy="dropdown-menu-first-section"
        >
          {documentationData.map((card) => (
            <DocumentationCard
              containerType="dropdown"
              key={card.title}
              {...card}
            />
          ))}
        </Box>
        <Box
          sx={styles.updatesContainer}
          data-cy="dropdown-menu-second-section"
        >
          {updatesData.map((card) => (
            <DocumentationCard
              containerType="dropdown"
              key={card.title}
              {...card}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DropdownMenu
