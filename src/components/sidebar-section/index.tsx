import { Flex, Box, Text } from '@vtex/brand-ui'
import { useContext, useEffect, useMemo, useState } from 'react'

import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import SideBarElements from 'components/sidebar-elements'

import { SidebarContext } from 'utils/contexts/sidebar'
import type { SidebarElement } from 'components/sidebar-elements'
import MethodCategory from 'components/method-category'
import { MethodType } from 'utils/typings/unionTypes'

import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import styles from './styles'
import { getMessages } from 'utils/get-messages'
export interface SidebarSectionProps {
  documentation: DocumentationTitle | UpdatesTitle
  categories: SidebarElement[]
}

const SidebarSection = ({ documentation, categories }: SidebarSectionProps) => {
  const messages = getMessages()
  const [searchValue, setSearchValue] = useState('')
  const { sidebarSectionHidden, setSidebarSectionHidden } =
    useContext(SidebarContext)
  const [filterStatus, setFilterStatus] = useState(false)
  const [methodFilter, setMethodFilter] = useState([
    { name: 'POST', active: false },
    { name: 'GET', active: false },
    { name: 'PUT', active: false },
    { name: 'DELETE', active: false },
  ])

  const setFilter = (methodChanged: MethodType) => {
    setMethodFilter(
      methodFilter.map((method) =>
        method.name === methodChanged
          ? { name: methodChanged, active: !method.active }
          : method
      )
    )
  }

  useEffect(() => {
    setFilterStatus(methodFilter.some((method) => method.active))
  }, [methodFilter])

  const filteredResult = useMemo(() => {
    if (!filterStatus) return categories

    const dataCopy = JSON.parse(JSON.stringify(categories))

    const filteredCategories = dataCopy
      .map((category: SidebarElement) => {
        category.childrens = category.childrens
          .map((subcategory) => {
            subcategory.childrens = subcategory.childrens.filter(
              (endpoint) =>
                endpoint.method &&
                filterStatus &&
                methodFilter.find((method) => method.name === endpoint.method)
                  ?.active
            )
            return subcategory
          })
          .filter((subcategory) => subcategory.childrens.length > 0)
        return category
      })
      .filter((category: SidebarElement) => category.childrens.length > 0)

    return filteredCategories
  }, [filterStatus, methodFilter, categories])

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
          <Box sx={styles.filterContainer}>
            <Text sx={styles.filterText}>
              {messages['api_reference_sidebar_filter']}
            </Text>
            <Flex>
              {methodFilter.map((item) => (
                <Box
                  key={`filter-category-${item.name}`}
                  onClick={() => setFilter(item.name as MethodType)}
                >
                  <MethodCategory
                    sx={styles.filterCategory}
                    active={item.active}
                    method={item.name as MethodType}
                    origin={'filter'}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        )}
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements items={filteredResult} subItemLevel={0} />
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
