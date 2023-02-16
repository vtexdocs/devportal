import { Header, HamburgerMenu as VtexHamburgerMenu, Box } from '@vtex/brand-ui'
import styles from './styles'

import DocumentationCard from 'components/documentation-card'
import { documentationData, updatesData } from 'utils/constants'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { useContext, useEffect } from 'react'
import { SidebarContext } from 'utils/contexts/sidebar'

const HamburgerMenu = ({ sectionSelected = 'API Reference' }) => {
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSidebarTab,
    setActiveSidebarTab,
    setSidebarSectionHidden,
  } = useContext(SidebarContext)

  useEffect(() => {
    if (!activeSidebarTab) {
      setActiveSidebarTab(sectionSelected)
    }
  }, [activeSidebarTab])

  return (
    <Header.ActionButton>
      <VtexHamburgerMenu sx={styles.hamburgerContainer}>
        <VtexHamburgerMenu.Menu sx={styles.innerHambugerContainer}>
          <Box
            sx={styles.menuContainer}
            className={sidebarSectionHidden ? '' : 'menuHidden'}
          >
            <Box sx={styles.cardContainer}>
              <Box
                sx={styles.documentationContainer}
                data-cy="dropdown-menu-first-section"
              >
                {documentationData.map((card) => (
                  <DocumentationCard
                    containerType="mobile"
                    key={card.title}
                    {...card}
                    onClick={() => {
                      setActiveSidebarTab(card.title)
                      setSidebarSectionHidden(false)
                    }}
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
            </Box>
            <Box sx={styles.sideMenuContainer}>
              {activeSidebarTab ? (
                <SidebarSection
                  isHamburgerMenu={true}
                  {...(Array.isArray(sidebarDataMaster)
                    ? sidebarDataMaster?.find(
                        (section: SidebarSectionProps) =>
                          section.documentation === activeSidebarTab
                      )
                    : null)}
                />
              ) : null}
            </Box>
          </Box>
        </VtexHamburgerMenu.Menu>
      </VtexHamburgerMenu>
    </Header.ActionButton>
  )
}

export default HamburgerMenu
