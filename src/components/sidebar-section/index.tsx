import { Flex, Box, Text } from '@vtex/brand-ui'
import { useContext, useState } from 'react'

import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import SideBarElements from 'components/sidebar-elements'

import { SidebarContext } from 'utils/contexts/sidebar'
import type { SidebarElement } from 'components/sidebar-elements'
import MethodCategory from 'components/method-category'
import { MethodType } from 'utils/typings/unionTypes'

import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import styles from './styles'
export interface SidebarSectionProps {
  documentation: DocumentationTitle | UpdatesTitle
  categories: SidebarElement[]
}

const SidebarSection = ({ documentation, categories }: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const { sidebarSectionHidden, setSidebarSectionHidden } =
    useContext(SidebarContext)
  const [methodFilter, setMethodFilter] = useState([
    { method: 'POST', active: false },
    { method: 'GET', active: false },
    { method: 'PUT', active: false },
    { method: 'DELETE', active: false },
  ])

  const setFilter = (method: MethodType) => {
    setMethodFilter(
      methodFilter.map((methodChanged) =>
        methodChanged.method === method
          ? { method: method, active: !methodChanged.active }
          : methodChanged
      )
    )
  }

  return (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarElementsContainer}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarElementsBox}
      >
        <Text sx={styles.sidebarTitle}>{documentation}</Text>
        <Flex sx={styles.searchBox}>
          <SearchIcon sx={styles.searchIcon} />
          <input
            style={styles.searchInput}
            className="searchComponent"
            type="text"
            placeholder={`Search in ${documentation}...`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </Flex>
        <Box sx={styles.filterContainer}>
          <Text sx={styles.filterText}>Filter by</Text>
          <Flex>
            {methodFilter.map((item) => (
              <Box onClick={() => setFilter(item.method as MethodType)}>
                <MethodCategory
                  sx={styles.filterCategory}
                  active={item.active}
                  method={item.method as MethodType}
                  origin={'filter'}
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <SideBarElements items={categories} subItemLevel={0} />
      </Box>
      <Flex
        className="toggleIcon"
        sx={
          sidebarSectionHidden
            ? styles.toggleIconBoxActive
            : styles.toggleIconBox
        }
      >
        <SideBarToggleIcon
          onClick={() => {
            setSidebarSectionHidden(
              (sidebarSectionHidden) => !sidebarSectionHidden
            )
          }}
          sx={sidebarSectionHidden ? styles.toggleIcon : {}}
        />
      </Flex>
    </Box>
  )
}

export default SidebarSection
