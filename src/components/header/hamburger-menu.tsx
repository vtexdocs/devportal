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
    activeSidebarElement,
    setActiveSidebarElement,
    setSidebarSectionHidden,
  } = useContext(SidebarContext)

  useEffect(() => {
    if (!activeSidebarElement) {
      setActiveSidebarElement(sectionSelected)
    }
  }, [activeSidebarElement])

  return (
    <Header.ActionButton>
      <VtexHamburgerMenu sx={styles.hamburgerContainer}>
        <VtexHamburgerMenu.Menu sx={styles.noPadding}>
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
                      setActiveSidebarElement(card.title)
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
              {activeSidebarElement ? (
                <SidebarSection
                  isHamburgerMenu={true}
                  {...(Array.isArray(sidebarDataMaster)
                    ? sidebarDataMaster?.find(
                        (section: SidebarSectionProps) =>
                          section.documentation === activeSidebarElement
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
