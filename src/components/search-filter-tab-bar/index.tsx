import { useContext } from 'react'
import { Flex, Text } from '@vtex/brand-ui'

import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

import { SearchContext } from 'utils/contexts/search'
import { documentationData, updatesData } from 'utils/constants'

import styles from './styles'

const SearchFilterTab = ({
  filter,
}: {
  filter: '' | DocumentationTitle | UpdatesTitle
}) => {
  const { filterSelectedSection, changeFilterSelectedSection, ocurrenceCount } =
    useContext(SearchContext)

  return (
    <Flex
      sx={styles.tab(filterSelectedSection === filter)}
      onClick={() => changeFilterSelectedSection(filter)}
    >
      <Text sx={styles.tabTitle(filterSelectedSection === filter)}>
        {filter || 'All Results'}
      </Text>
      <Text sx={styles.tabCount}>{ocurrenceCount.get(filter) || 0}</Text>
    </Flex>
  )
}

const SearchFilterTabBar = () => {
  return (
    <Flex sx={styles.container}>
      <SearchFilterTab filter="" />
      {documentationData.map(({ title }) => (
        <SearchFilterTab key={title} filter={title} />
      ))}
      {updatesData.map(({ title }) => (
        <SearchFilterTab key={title} filter={title} />
      ))}
    </Flex>
  )
}

export default SearchFilterTabBar
