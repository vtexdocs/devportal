import styles from './styles'

import { Box, Flex, Button, Text } from '@vtex/brand-ui'
import { Action } from 'components/last-updates-card/functions'
import type { IconComponent } from 'utils/typings/types'

import { useEffect, useRef, useState } from 'react'

interface ChipFilterProps {
  filters: string[]
  categories: Action[]
  applyCategory: (option: string) => void
  resetFilters: () => void
  removeCategory: (option: string) => void
  getCategoryAmount: (category: string) => number
}

export default function ChipFilter({
  filters,
  categories,
  applyCategory,
  resetFilters,
  removeCategory,
  getCategoryAmount,
}: ChipFilterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [shouldDisplayArrows, setShouldDisplayArrows] = useState<{
    left: boolean
    right: boolean
  }>({ left: false, right: false })

  const totalCount = categories.reduce(
    (sum, category) => sum + getCategoryAmount(category.type),
    0
  )

  function handleLeftArrowClick() {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 180
    }
  }

  function handleRightArrowClick() {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 180
    }
  }

  function isCategoryActive(category: string) {
    return filters.includes(category)
  }

  function handleContainerScroll() {
    if (!containerRef.current) return

    const offsetWidth = 20
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current
    const isLeftmostScroll = scrollLeft <= 0
    const isRightmostScroll =
      scrollLeft + clientWidth + offsetWidth >= scrollWidth
    const hasOverflow = scrollWidth > clientWidth + offsetWidth

    setShouldDisplayArrows({
      left: hasOverflow && !isLeftmostScroll,
      right: hasOverflow && !isRightmostScroll,
    })
  }

  useEffect(() => {
    handleContainerScroll()
    window.addEventListener('resize', handleContainerScroll)
    return () => window.removeEventListener('resize', handleContainerScroll)
  }, [categories, filters])

  return (
    <Flex sx={styles.chipButtonWrapper}>
      {shouldDisplayArrows.left && (
        <Box sx={styles.leftArrowContainer}>
          <Button
            variant="tertiary"
            size="small"
            sx={styles.arrowButton}
            onClick={handleLeftArrowClick}
          >
            {`‹`}
          </Button>
          <Box sx={styles.leftArrowBlur} />
        </Box>
      )}
      <Box
        sx={styles.chipsContainer}
        ref={containerRef}
        onScroll={handleContainerScroll}
      >
        <Box sx={styles.optionsContainer}>
          <FilterChip
            value="All results"
            isActive={!filters.length}
            count={totalCount}
            applyCategory={() => resetFilters()}
          />
          {categories.map((category) => (
            <FilterChip
              key={category.type}
              value={category.title}
              count={getCategoryAmount(category.type)}
              applyCategory={() =>
                isCategoryActive(category.type)
                  ? removeCategory(category.type)
                  : applyCategory(category.type)
              }
              isActive={isCategoryActive(category.type)}
              Icon={category.Icon}
            />
          ))}
        </Box>
      </Box>
      {shouldDisplayArrows.right && (
        <Box sx={styles.rightArrowContainer}>
          <Button
            variant="tertiary"
            size="small"
            sx={styles.arrowButton}
            onClick={handleRightArrowClick}
          >
            {`›`}
          </Button>
          <Box sx={styles.rightArrowBlur} />
        </Box>
      )}
    </Flex>
  )
}

interface FilterChipProps {
  value: string
  isActive: boolean
  count: number
  applyCategory: () => void
  Icon?: IconComponent
}

function FilterChip({
  value,
  isActive,
  count,
  applyCategory,
  Icon,
}: FilterChipProps) {
  return (
    <Flex sx={styles.chip(isActive)} onClick={applyCategory}>
      {Icon ? <Icon sx={styles.chipIcon} /> : null}
      <Text className="filter-chip-title" sx={styles.chipTitle(isActive)}>
        {value}
      </Text>
      <Text sx={styles.chipCount}>{count}</Text>
    </Flex>
  )
}
