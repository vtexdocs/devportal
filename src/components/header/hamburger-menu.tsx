import { Header, HamburgerMenu as VtexHamburgerMenu, Box } from '@vtex/brand-ui'
import styles from './styles'

import DocumentationCard from 'components/documentation-card'
import { documentationData, updatesData } from 'utils/constants'
const HamburgerMenu = () => {
  return (
    <Header.ActionButton>
      <VtexHamburgerMenu sx={styles.hamburgerContainer}>
        <VtexHamburgerMenu.Menu>
          <Box
            sx={styles.documentationContainer}
            data-cy="dropdown-menu-first-section"
          >
            {documentationData.map((card) => (
              <DocumentationCard
                containerType="mobile"
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
                containerType="mobile"
                key={card.title}
                {...card}
              />
            ))}
          </Box>
        </VtexHamburgerMenu.Menu>
      </VtexHamburgerMenu>
    </Header.ActionButton>
  )
}

export default HamburgerMenu
