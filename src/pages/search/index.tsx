import { useRouter } from 'next/router'
import { Flex, Box, Text } from '@vtex/brand-ui'
import styles from 'styles/search-page'

import { getIcon } from 'utils/constants'
import { MethodType } from 'utils/typings/unionTypes'
import { ActionType } from 'components/last-updates-card/functions'

import SideBar from 'components/sidebar'
import SearchCard from 'components/search-card'
import SearchSections from 'components/search-sections'

export interface SearchDataItemProps {
  doc: string
  title: string
  description: string
  filters?: string[]
  http?: MethodType
  actionType?: ActionType
}

const SearchPage = () => {
  const router = useRouter()
  const searchData: SearchDataItemProps[] = [
    {
      doc: 'API Guides',
      title: 'SKU Selector',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      filters: ['label', 'label', 'label'],
    },
    {
      doc: 'API Reference',
      title: 'GET SKU seller',
      http: 'POST',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      filters: ['label', 'label', 'label'],
    },
    {
      doc: 'Release Notes',
      title: 'SKU Selector',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      actionType: 'removed',
    },
  ]
  return (
    <Flex sx={styles.body}>
      <SideBar />
      <SearchSections />
      <Box sx={styles.resultContainer}>
        <Text sx={styles.resultText}>
          Showing {searchData.length} results for "{router.query.keyword}" in
          all results
        </Text>
        <hr />
        <Box>
          {searchData.map((result, index) => (
            <SearchCard
              key={`${result.doc}${result.title}${index}`}
              Icon={getIcon(result.doc)!}
              {...result}
            />
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default SearchPage
