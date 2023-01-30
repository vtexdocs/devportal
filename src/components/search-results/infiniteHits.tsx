/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex } from '@vtex/brand-ui'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { connectInfiniteHits } from 'react-instantsearch-dom'
import { Hit, InfiniteHitsProvided } from 'react-instantsearch-core'

import SearchCard from 'components/search-card'
import { getRelativeURL } from 'utils/search-utils'
import { getIcon } from 'utils/constants'
import {
  DocumentationTitle,
  MethodType,
  UpdatesTitle,
} from 'utils/typings/unionTypes'
import { ActionType } from 'components/last-updates-card/functions'
import { SearchContext } from 'utils/contexts/search'

export type FilteredHit = Hit & { filteredMatches?: Hit[] }

interface HitProps {
  hit: FilteredHit
}

const Hit = ({ hit }: HitProps) => {
  const [description, setDescription] = useState<string>('')
  const breadcrumbs = [
    hit.docType,
    ...(hit.docCategory ? [hit.docCategory] : []),
    ,
    hit.docTitle,
  ]
  const DocIcon = getIcon(hit.docType)
  useEffect(() => {
    if (hit.type === 'content') setDescription(hit.content)
    else {
      const hierarchy = JSON.parse(JSON.stringify(hit.hierarchy))
      setDescription(hierarchy[hit.type])
    }
  }, [])
  return (
    <SearchCard
      doc={hit.docType as DocumentationTitle | UpdatesTitle}
      Icon={DocIcon!}
      title={hit.docTitle}
      description={description}
      http={(hit.http as MethodType) || undefined}
      filters={(breadcrumbs as string[]) || []}
      actionType={(hit.actionType as ActionType) || undefined}
      url={getRelativeURL(hit.url)}
      hit={hit}
    />
  )
}

const InfiniteHits = ({ hits, hasMore, refineNext }: InfiniteHitsProvided) => {
  const infiniteRef = useRef<HTMLElement>(null)
  const { filterSelectedSection, updateOcurrenceCount } =
    useContext(SearchContext)

  const filteredResult = useMemo(() => {
    const mergeHits: FilteredHit[] = []
    hits.forEach((hit) => {
      const alreadyExists = mergeHits.findIndex((e) => e.url === hit.url)
      const filteredHit: FilteredHit = { ...hit, filteredMatches: [] }
      if (alreadyExists >= 0) {
        mergeHits[alreadyExists].filteredMatches?.push(filteredHit)
      } else mergeHits.push(filteredHit)
    })

    updateOcurrenceCount(mergeHits)
    return mergeHits.filter(
      (resultElement) =>
        !filterSelectedSection ||
        resultElement.docType === filterSelectedSection
    )
  }, [filterSelectedSection, hits])

  useEffect(() => {
    if (!hasMore) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) refineNext()
    })

    if (infiniteRef.current) observer.observe(infiniteRef.current)
    return () => {
      observer.disconnect()
    }
  }, [hasMore])

  return (
    <Box className="ais-InfiniteHits">
      <Box className="ais-InfiniteHits-list">
        {filteredResult.map((hit: Hit, index: number) => (
          <Flex key={hit.objectID} className="ais-InfiniteHits-item">
            <Hit hit={hit} key={index} />
          </Flex>
        ))}
        <Box className="ais-InfiniteHits-sentinel" ref={infiniteRef} />
      </Box>
    </Box>
  )
}

export default connectInfiniteHits(InfiniteHits)
