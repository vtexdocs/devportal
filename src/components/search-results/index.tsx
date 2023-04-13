import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo } from 'react'

import { Box, Text } from '@vtex/brand-ui'
import { SearchContext } from 'utils/contexts/search'
import SearchCard from 'components/search-card'
import { getIcon } from 'utils/constants'

import type { MethodType } from 'utils/typings/unionTypes'
import type { ActionType } from 'components/last-updates-card/functions'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

import styles from './styles'
import { useIntl } from 'react-intl'

export interface SearchDataItemProps {
  doc: DocumentationTitle | UpdatesTitle
  title: string
  description: string
  filters?: string[]
  http?: MethodType
  actionType?: ActionType
}

const searchData: SearchDataItemProps[] = [
  {
    doc: 'Guides',
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

const SearchResults = () => {
  const router = useRouter()
  const intl = useIntl()
  const { filterSelectedSection, updateOcurrenceCount } =
    useContext(SearchContext)

  useEffect(() => {
    updateOcurrenceCount(searchData)
  }, [searchData])

  const filteredResult = useMemo(() => {
    return searchData.filter(
      (resultElement) =>
        !filterSelectedSection || resultElement.doc == filterSelectedSection
    )
  }, [filterSelectedSection, searchData])
  return (
    <Box sx={styles.resultContainer}>
      <Text sx={styles.resultText}>
        Showing {searchData.length} results for "{router.query.keyword}" in all
        results
      </Text>
      <hr />
      <Box>
        {filteredResult.map((result, index) => (
          <SearchCard
            key={`${result.doc}${result.title}${index}`}
            Icon={getIcon(result.doc, intl)!}
            {...result}
          />
        ))}
      </Box>
    </Box>
  )
}

export default SearchResults
