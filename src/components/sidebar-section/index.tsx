import { Flex, Box, Text, Button } from '@vtex/brand-ui'
import { useContext, useMemo, useState } from 'react'

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
import ArrowLeftIcon from 'components/icons/arrow-left-icon'

import { SidebarContext } from 'utils/contexts/sidebar'
import { getIcon } from 'utils/constants'

import styles from './styles'

export interface SidebarSectionProps {
  documentation: DocumentationTitle | UpdatesTitle
  categories: SidebarElement[]
  slugPrefix: SlugPrefix
  isHamburgerMenu: boolean
}

const SidebarSection = ({
  documentation,
  categories,
  slugPrefix,
  isHamburgerMenu = false,
}: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const { sidebarSectionHidden, setSidebarSectionHidden } =
    useContext(SidebarContext)
  const { isEditorPreview } = useContext(SidebarContext)
  const [methodFilterList, setMethodFilterList] = useState([
    { name: 'POST', active: false },
    { name: 'GET', active: false },
    { name: 'PUT', active: false },
    { name: 'DELETE', active: false },
    { name: 'PATCH', active: false },
  ])

  const filterStatus = methodFilterList.some(
    (methodFilter) => methodFilter.active
  )

  const filteredResult = useMemo(() => {
    if (!filterStatus && searchValue === '') return categories

    const dataCopy = JSON.parse(JSON.stringify(categories))

    const filteredCategories = dataCopy
      .map((category: SidebarElement) => {
        category.children = category.children
          .map((subcategory) => {
            subcategory.children = subcategory.children.filter((endpoint) => {
              const hasMethodFilter =
                !filterStatus ||
                methodFilterList.find(
                  (methodFilter) => methodFilter.name === endpoint.method
                )?.active
              const hasInputFilter =
                searchValue === '' ||
                endpoint.name.toLowerCase().includes(searchValue.toLowerCase())
              return hasMethodFilter && hasInputFilter
            })
            return subcategory
          })
          .filter(
            (subcategory) =>
              subcategory.children.length > 0 ||
              (subcategory.type === 'markdown' &&
                subcategory.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()))
          )
        return category
      })
      .filter((category: SidebarElement) => category.children.length > 0)
    return filteredCategories
  }, [filterStatus, methodFilterList, categories, searchValue])

  const DocIcon = getIcon(documentation)

  return isHamburgerMenu ? (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarContainerHamburger}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarContainerBoxHamburger}
      >
        <Flex sx={styles.sidebarContainerTitle}>
          <Button
            sx={styles.arrowButton}
            aria-label={'Go back'}
            size="small"
            variant="tertiary"
            icon={() => <ArrowLeftIcon size={24} />}
            onClick={() => {
              setSidebarSectionHidden(true)
            }}
          />
          {DocIcon && <DocIcon />}
          <Text sx={styles.sidebarTitle}>{documentation}</Text>
        </Flex>
        <Box sx={styles.sidebarContainerBody}>
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
          {documentation == 'API Reference' && (
            <SectionFilter
              methodFilterList={methodFilterList}
              setMethodFilter={setMethodFilterList}
            />
          )}
        </Box>
        <Box sx={styles.sidebarContainerBody}>
          <SideBarElements
            items={filteredResult}
            subItemLevel={0}
            slugPrefix={slugPrefix}
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarContainer}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarContainerBox}
        data-cy="sidebar-section"
      >
        <Box sx={styles.sidebarContainerHeader}>
          {isEditorPreview && (
            <Text sx={styles.previewMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <circle cx="36" cy="36" r="36" fill="#FFB100" />
                <path
                  d="M40.4202 22.6818H31.8152V42.6377H40.4202V22.6818Z"
                  fill="white"
                />
                <path
                  d="M36.1177 54.6113C38.4939 54.6113 40.4202 52.8244 40.4202 50.6201C40.4202 48.4158 38.4939 46.6289 36.1177 46.6289C33.7415 46.6289 31.8152 48.4158 31.8152 50.6201C31.8152 52.8244 33.7415 54.6113 36.1177 54.6113Z"
                  fill="white"
                />
              </svg>
              PREVIEW MODE
            </Text>
          )}
          <Text sx={styles.sidebarTitle}>{documentation}</Text>
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <input
              style={styles.searchInput}
              className="searchComponent"
              type="text"
              placeholder={`Search in ${
                !isEditorPreview ? `in ${documentation}` : ''
              }...`}
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
