import { Flex, Box, Text } from '@vtex/brand-ui'
import { useState } from 'react'

import HelpIcon from 'components/icons/help-icon'
import SearchIcon from 'components/icons/search-icon'
import SideBarElements from 'components/sidebar-elements'

import type { SideBarItemPropTypes } from 'components/sidebar-elements'
import styles from './styles'

export interface SideBarSection {
  title: string
  data: SideBarItemPropTypes[]
}

const SidebarSection = ({ title, data }: SideBarSection) => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={styles.sidebarElementsContainer}>
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
  )
}

export default SidebarSection
