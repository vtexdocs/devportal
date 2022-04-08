import { Flex, Box, Text } from '@vtex/brand-ui'
import { useState } from 'react'

import HelpIcon from 'components/icons/help-icon'
import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import SideBarElements from 'components/sidebar-elements'

import type { SideBarItemPropTypes } from 'components/sidebar-elements'
import styles from './styles'

export interface SideBarSection {
  title: string
  data: SideBarItemPropTypes[]
}

const SidebarSection = ({ title, data }: SideBarSection) => {
  const [searchValue, setSearchValue] = useState('')
  const [sideBarToggle, setSideBarToggle] = useState(false)
  return (
    <Box
      className={sideBarToggle ? 'active' : ''}
      sx={styles.sidebarElementsContainer}
    >
      <Box
        className={sideBarToggle ? 'sidebarHide' : ''}
        sx={styles.sidebarElementsBox}
      >
        <Text sx={styles.sidebarTitle}>
          {title}
          <HelpIcon sx={styles.sidebarHelpIcon} />
        </Text>
        <Flex sx={styles.searchBox}>
          <SearchIcon sx={styles.searchIcon} />
          <input
            style={styles.searchInput}
            className="searchComponent"
            type="text"
            placeholder="Filter in Title..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </Flex>
        <SideBarElements items={data} subItemLevel={0} />
      </Box>
      <Flex
        className="toggleIcon"
        sx={sideBarToggle ? styles.toggleIconBoxActive : styles.toggleIconBox}
      >
        <SideBarToggleIcon
          onClick={() => {
            setSideBarToggle(!sideBarToggle)
          }}
          sx={sideBarToggle ? styles.toggleIcon : {}}
        />
      </Flex>
    </Box>
  )
}

export default SidebarSection
