import {
  Header,
  HamburgerMenu as VtexHamburgerMenu,
  Box,
  IconCaret,
  Button,
} from '@vtex/brand-ui'
import styles from './styles'

import DocumentationCard from 'components/documentation-card'
import { documentationData, updatesData } from 'utils/constants'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { useContext } from 'react'
import { SidebarContext } from 'utils/contexts/sidebar'

const HamburgerMenu = () => {
  const {
    sidebarDataMaster,
    sidebarSectionHidden,
    activeSidebarTab,
    setActiveSidebarTab,
    setSidebarSectionHidden,
  } = useContext(SidebarContext)

  return (
    <Header.ActionButton>
      <VtexHamburgerMenu sx={styles.hamburgerContainer}>
        <VtexHamburgerMenu.Menu sx={styles.innerHambugerContainer}>
          <Box sx={styles.menuContainer}>
            <Box sx={styles.cardContainer}>
              <Box
                sx={styles.documentationContainer}
                data-cy="dropdown-menu-first-section"
              >
                {documentationData.map((card) => (
                  <Box sx={styles.innerCardContainer}>
                    <DocumentationCard
                      containerType="mobile"
                      key={card.title}
                      {...card}
                    />
                    <Button
                      aria-label={'Open sidebar'}
                      size="regular"
                      variant="tertiary"
                      icon={() => <IconCaret direction="right" size={24} />}
                      sx={
                        activeSidebarTab === card.title && !sidebarSectionHidden
                          ? styles.arrowIconActive
                          : styles.arrowIcon
                      }
                      onClick={() => {
                        setActiveSidebarTab(card.title)
                        setSidebarSectionHidden(false)
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <Box
                sx={styles.updatesContainer}
                data-cy="dropdown-menu-second-section"
              >
                {updatesData.map((card) => (
                  <Box sx={styles.innerCardContainer}>
                    <DocumentationCard
                      containerType="mobile"
                      key={card.title}
                      {...card}
                    />
                    <Button
                      aria-label={'Open sidebar'}
                      size="regular"
                      variant="tertiary"
                      icon={() => <IconCaret direction="right" size={24} />}
                      sx={styles.arrowIcon}
                      onClick={() => {
                        setActiveSidebarTab(card.title)
                        setSidebarSectionHidden(false)
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              className={
                sidebarSectionHidden || !activeSidebarTab ? '' : 'menuHidden'
              }
              sx={styles.sideMenuContainer}
            >
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
