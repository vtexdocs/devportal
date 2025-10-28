import React, { useMemo, useState, useCallback } from 'react'
import { Box, Text, Button } from '@vtex/brand-ui'

import ReleaseNote from '../release-note'
import styles from 'components/release-section/styles'
import { getMessages } from 'utils/get-messages'
import { UpdateElement } from 'utils/typings/types'
import ChipFilter from 'components/chip-filter'
import { Action, actions } from 'components/last-updates-card/functions'
import Filter from 'components/filter'

const messages = getMessages()

type UpdateWithTs = UpdateElement & { __ts: number }
const VISIBLE_BATCH_SIZE = 100

const ReleaseSection = ({
  releasesByType,
  availableTags,
}: {
  releasesByType: Record<string, UpdateWithTs[]>
  availableTags: string[]
}) => {
  const [tagFilters, setTagFilters] = useState<string[]>([])
  const [actionTypeFilters, setActionTypeFilters] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(VISIBLE_BATCH_SIZE)
  const chipCategories: Action[] = actions

  const monthYearFmt = useMemo(
    () => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }),
    []
  )

  const filteredResult = useMemo<UpdateWithTs[]>(() => {
    const allReleases = releasesByType['all'] ?? []

    if (!tagFilters.length && !actionTypeFilters.length) {
      return allReleases
    }

    return allReleases.filter((release) => {
      const matchesTagFilter =
        !tagFilters.length ||
        tagFilters.some((tag) => release.tags?.includes(tag))

      const matchesActionTypeFilter =
        !actionTypeFilters.length ||
        actionTypeFilters.includes(release.actionType ?? 'other')

      return matchesTagFilter && matchesActionTypeFilter
    })
  }, [tagFilters, actionTypeFilters, releasesByType])

  const getCategoryAmount = useCallback(
    (category: string) => {
      const allReleases = releasesByType['all'] ?? []
      return allReleases.filter((release) => {
        const matchesTagFilter =
          !tagFilters.length ||
          tagFilters.some((tag) => release.tags?.includes(tag))

        const matchesCategory = release.actionType === category

        return matchesTagFilter && matchesCategory
      }).length
    },
    [releasesByType, tagFilters]
  )

  const handleCategoriesSelection = useCallback((category: string) => {
    setActionTypeFilters((prev) =>
      prev.includes(category) ? prev : [...prev, category]
    )
    setVisibleCount(VISIBLE_BATCH_SIZE)
  }, [])

  const handleFilterRemoval = useCallback((category: string) => {
    setActionTypeFilters((prev) => prev.filter((c) => c !== category))
    setVisibleCount(VISIBLE_BATCH_SIZE)
  }, [])

  const handleFilterReset = useCallback(() => {
    setActionTypeFilters([])
    setTagFilters([])
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

      <Filter
        filterName="Products"
        checkBoxFilter={availableTags}
        onApply={(newFilters) => setTagFilters(newFilters.checklist)}
        selectedCheckboxes={tagFilters}
      />

      <ChipFilter
        removeCategory={handleFilterRemoval}
        resetFilters={handleFilterReset}
        filters={actionTypeFilters}
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
