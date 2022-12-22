import { Flex, Box, Text } from '@vtex/brand-ui'
import { useContext, useEffect, useMemo, useState } from 'react'

import type { SidebarElement } from 'components/sidebar-elements'
import type {
  DocumentationTitle,
  UpdatesTitle,
  SlugPrefix,
} from 'utils/typings/unionTypes'

import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import SideBarElements from 'components/sidebar-elements'
import SectionFilter from 'components/sidebar-section-filter'

import { SidebarContext } from 'utils/contexts/sidebar'

import styles from './styles'

export interface SidebarSectionProps {
  documentation: DocumentationTitle | UpdatesTitle
  categories: SidebarElement[]
  slugPrefix: SlugPrefix
}

const SidebarSection = ({
  documentation,
  categories,
  slugPrefix,
}: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const { sidebarSectionHidden, setSidebarSectionHidden } =
    useContext(SidebarContext)
  const [filterStatus, setFilterStatus] = useState(false)
  const [methodFilterList, setMethodFilterList] = useState([
    { name: 'POST', active: false },
    { name: 'GET', active: false },
    { name: 'PUT', active: false },
    { name: 'DELETE', active: false },
  ])

  useEffect(() => {
    setFilterStatus(
      methodFilterList.some((methodFilter) => methodFilter.active)
    )
  }, [methodFilterList])

  const filteredResult = useMemo(() => {
    if (!filterStatus) return categories

    const dataCopy = JSON.parse(JSON.stringify(categories))

    const filteredCategories = dataCopy
      .map((category: SidebarElement) => {
        category.children = category.children
          .map((subcategory) => {
            subcategory.children = subcategory.children.filter(
              (endpoint) =>
                endpoint.method &&
                filterStatus &&
                methodFilterList.find(
                  (methodFilter) => methodFilter.name === endpoint.method
                )?.active
            )
            return subcategory
          })
          .filter((subcategory) => subcategory.children.length > 0)
        return category
      })
      .filter((category: SidebarElement) => category.children.length > 0)

    return filteredCategories
  }, [filterStatus, methodFilterList, categories])

  return (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarContainer}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarContainerBox}
      >
        <Box sx={styles.sidebarContainerHeader}>
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
        </Box>
        {documentation == 'API Reference' && (
          <SectionFilter
            methodFilterList={methodFilterList}
            setMethodFilter={setMethodFilterList}
          />
        )}
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements
            items={filteredResult}
            subItemLevel={0}
            slugPrefix={slugPrefix}
          />
        </Box>
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
