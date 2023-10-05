import { Box } from '@vtex/brand-ui'

import DocumentationCard from 'components/documentation-card'
import { documentationData, adminData, updatesData } from 'utils/constants'

import styles from './styles'

interface Props {
  isEditor: boolean
}

const DropdownMenu = ({ isEditor }: Props) => {
  return (
    <Box sx={styles.outerContainer}>
      <Box sx={styles.innerContainer} data-cy="dropdown-menu">
        <Box
          sx={styles.documentationContainer}
          data-cy="dropdown-menu-first-section"
        >
          {!isEditor
            ? documentationData.map((card) => (
                <DocumentationCard
                  containerType="dropdown"
                  key={card.title}
                  {...card}
                />
              ))
            : adminData.map((card) => (
                <DocumentationCard
                  containerType="dropdown"
                  key={card.title}
                  {...card}
                />
              ))}
        </Box>
        {!isEditor && (
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
        )}
      </Box>
    </Box>
  )
}

export default DropdownMenu
