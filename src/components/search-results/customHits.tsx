import { useContext, useEffect, useMemo } from 'react'
import { connectStateResults } from 'react-instantsearch-dom'
import { Hit, StateResultsProvided, BasicDoc } from 'react-instantsearch-core'
import { getRelativeURL } from 'utils/search-utils'
import { getIcon } from 'utils/constants'
import { ActionType } from 'components/last-updates-card/functions'
import { SearchContext } from 'utils/contexts/search'
import SearchCard from 'components/search-card'

import {
  DocumentationTitle,
  MethodType,
  UpdatesTitle,
} from 'utils/typings/unionTypes'
import { Box, Flex } from '@vtex/brand-ui'

export type FilteredHit = Hit & { filteredMatches?: Hit[] }

interface HitProps {
  hit: FilteredHit
}

const Hit = ({ hit }: HitProps) => {
  const breadcrumbs = [
    hit.doctype,
    ...(hit.doccategory ? [hit.doccategory] : []),
    ,
    hit.doctitle,
  ]
  const DocIcon = getIcon(hit.doctype)

  return (
    <SearchCard
      doc={hit.doctype as DocumentationTitle | UpdatesTitle}
      Icon={DocIcon!}
      title={hit.doctitle}
      method={(hit.method as MethodType) || undefined}
      breadcrumbs={(breadcrumbs as string[]) || []}
      actionType={(hit.actiontype as ActionType) || undefined}
      url={getRelativeURL(hit.url)}
      hit={hit}
    />
  )
}

const CustomHits = ({ searchResults }: StateResultsProvided<BasicDoc>) => {
  const { filterSelectedSection, updateOcurrenceCount } =
    useContext(SearchContext)

  const filteredResult = useMemo(() => {
    const mergeHits: FilteredHit[] = []
    searchResults?.hits.forEach((hit) => {
      const alreadyExists = mergeHits.findIndex(
        (e) => e.url_without_anchor === hit.url_without_anchor
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filteredHit: any = { ...hit, filteredMatches: [] }
      if (alreadyExists >= 0) {
        mergeHits[alreadyExists].filteredMatches?.push(filteredHit)
      } else mergeHits.push(filteredHit)
    })

    return mergeHits
  }, [searchResults])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results = searchResults as any
    if (results && results._state.filters === '') {
      const facets = searchResults?.facets[0]
      updateOcurrenceCount({ ...facets?.data, '': searchResults?.nbHits })
    }
  }, [searchResults?.queryID])

  return (
    <Box>
      {filteredResult
        .filter(
          (resultElement) =>
            !filterSelectedSection ||
            resultElement.doctype === filterSelectedSection
        )
        .map((hit: Hit, index: number) => (
          <Flex key={hit.objectID}>
            <Hit hit={hit} key={index} />
          </Flex>
        ))}
    </Box>
  )
}

export default connectStateResults(CustomHits)
