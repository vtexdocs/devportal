import React, { useMemo, useState, useCallback } from 'react'
import { Box, Text, Button } from '@vtex/brand-ui'

import ReleaseNote from '../release-note'
import styles from 'components/release-section/styles'
import { getMessages } from 'utils/get-messages'
import { UpdateElement } from 'utils/typings/types'
import ChipFilter from 'components/chip-filter'
import { Action, actions } from 'components/last-updates-card/functions'

const messages = getMessages()

type UpdateWithTs = UpdateElement & { __ts: number }
const VISIBLE_BATCH_SIZE = 100

const mergeSorted = (lists: UpdateWithTs[][]): UpdateWithTs[] => {
  const heads = lists.map(() => 0)
  const out: UpdateWithTs[] = []

  while (true) {
    let bestList = -1
    let bestItem: UpdateWithTs | null = null

    for (let li = 0; li < lists.length; li++) {
      const idx = heads[li]
      const list = lists[li]
      if (idx >= list.length) continue
      const cand = list[idx]
      if (!bestItem || cand.__ts > bestItem.__ts) {
        bestItem = cand
        bestList = li
      }
    }
    if (!bestItem) break
    out.push(bestItem)
    heads[bestList]++
  }
  return out
}

const ReleaseSection = ({
  releasesByType,
}: {
  releasesByType: Record<string, UpdateWithTs[]>
}) => {
  const [filters, setFilters] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(VISIBLE_BATCH_SIZE)
  const chipCategories: Action[] = actions

  const monthYearFmt = useMemo(
    () => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }),
    []
  )

  const filteredResult = useMemo<UpdateWithTs[]>(() => {
    if (!filters.length) return releasesByType['all'] ?? []
    if (filters.length === 1) return releasesByType[filters[0]] ?? []

    const lists = filters
      .map((f) => releasesByType[f] ?? [])
      .filter((l) => l.length)
    if (lists.length <= 1) return lists[0] ?? []
    return mergeSorted(lists)
  }, [filters, releasesByType])

  const getCategoryAmount = useCallback(
    (category: string) => releasesByType[category]?.length ?? 0,
    [releasesByType]
  )

  const handleCategoriesSelection = useCallback((category: string) => {
    setFilters((prev) => (prev.includes(category) ? prev : [...prev, category]))
    setVisibleCount(VISIBLE_BATCH_SIZE)
  }, [])

  const handleFilterRemoval = useCallback((category: string) => {
    setFilters((prev) => prev.filter((c) => c !== category))
    setVisibleCount(VISIBLE_BATCH_SIZE)
  }, [])

  const handleFilterReset = useCallback(() => {
    setFilters([])
    setVisibleCount(VISIBLE_BATCH_SIZE)
  }, [])

  const totalItems = filteredResult.length
  const visibleItems = useMemo(
    () => filteredResult.slice(0, visibleCount),
    [filteredResult, visibleCount]
  )

  const visibleGroups = useMemo(() => {
    const map = new Map<string, UpdateWithTs[]>()
    for (let i = 0; i < visibleItems.length; i++) {
      const item = visibleItems[i]
      const label = monthYearFmt.format(new Date(item.__ts))
      const bucket = map.get(label)
      if (bucket) {
        bucket.push(item)
      } else {
        map.set(label, [item])
      }
    }
    return Array.from(map, ([label, items]) => ({ label, items }))
  }, [visibleItems, monthYearFmt])

  const handleSeeMore = useCallback(() => {
    setVisibleCount((prev) => prev + VISIBLE_BATCH_SIZE)
  }, [])

  return (
    <Box sx={styles.outerContainer}>
      <Text sx={styles.sectionTitle}>
        {messages['release_notes_page.title']}
      </Text>
      <Text sx={styles.sectionSubtitle}>
        {messages['release_notes_page.subtitle']}
      </Text>

      <Box sx={styles.sectionDivider} role="separator" aria-hidden="true">
        <hr aria-hidden="true" />
      </Box>

      <ChipFilter
        removeCategory={handleFilterRemoval}
        resetFilters={handleFilterReset}
        filters={filters}
        getCategoryAmount={getCategoryAmount}
        categories={chipCategories}
        applyCategory={handleCategoriesSelection}
      />

      {visibleGroups.map((group, gIdx) => (
        <React.Fragment key={group.label}>
          <Text sx={styles.releaseMonth}>{group.label}</Text>

          {group.items.map((release, idx) => (
            <ReleaseNote
              key={release.slug}
              isFirst={gIdx === 0 && idx === 0}
              {...release}
            />
          ))}
        </React.Fragment>
      ))}

      {visibleCount < totalItems && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            onClick={handleSeeMore}
            variant="tertiary"
            aria-label={`See more ${totalItems - visibleCount} items`}
          >
            See more ({totalItems - visibleCount} more)
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default React.memo(ReleaseSection)
