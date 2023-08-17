import React, { useContext, useEffect, useMemo, useRef } from 'react'
import {
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom'
import {
  Hit,
  InfiniteHitsProvided,
  StateResultsProvided,
} from 'react-instantsearch-core'
import {
  DocumentationTitle,
  MethodType,
  UpdatesTitle,
} from 'utils/typings/unionTypes'
import SearchCard from 'components/search-card'
import { getRelativeURL } from 'utils/search-utils'
import { getIcon } from 'utils/constants'
import { ActionType } from 'components/last-updates-card/functions'
import { Box, Flex } from '@vtex/brand-ui'
import { SearchContext } from 'utils/contexts/search'

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

const StateResults = connectStateResults(
  ({ searchResults }: StateResultsProvided) => {
    const { updateOcurrenceCount } = useContext(SearchContext)
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = searchResults as any
      if (results && results._state.filters === '') {
        const facets = searchResults?.facets[0]
        updateOcurrenceCount({ ...facets?.data, '': searchResults?.nbHits })
      }
    }, [searchResults?.queryID])
    return null
  }
)

const InfiniteHits = ({ hits, hasMore, refineNext }: InfiniteHitsProvided) => {
  const scrollRef = useRef<HTMLSpanElement>(null)

  function onSentinelIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && hasMore) {
        refineNext()
      }
    })
  }

  const filteredResult = useMemo(() => {
    const mergeHits: FilteredHit[] = [] //hitsData
    hits.forEach((hit) => {
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
  }, [hits])

  useEffect(() => {
    const observer = new IntersectionObserver(onSentinelIntersection, {})

    if (scrollRef.current) observer.observe(scrollRef.current)
    return () => {
      observer.disconnect()
    }
  }, [hits])
  return (
    <Box>
      <StateResults />
      {filteredResult.map((hit: Hit, index: number) => (
        <Flex key={hit.objectID}>
          <Hit hit={hit} key={index} />
        </Flex>
      ))}
      <span ref={scrollRef}></span>
    </Box>
  )
}

export default connectInfiniteHits(InfiniteHits)
