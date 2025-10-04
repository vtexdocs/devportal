import styles from './styles'

import { Box, Flex, Button, Text } from '@vtex/brand-ui'
import { Action, ActionType } from 'components/last-updates-card/functions'

import { useRef, useState } from 'react'

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
  }>({ left: false, right: true })

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
    if (containerRef.current) {
      const offsetWidth = 20

      const isLeftmostScroll: boolean = containerRef.current.scrollLeft === 0
      const isRightmostScroll: boolean =
        containerRef.current.scrollLeft +
          containerRef.current.clientWidth +
          offsetWidth >=
        containerRef.current.scrollWidth

      if (isLeftmostScroll) {
        return setShouldDisplayArrows({ ...shouldDisplayArrows, left: false })
      }
      if (isRightmostScroll) {
        return setShouldDisplayArrows({ ...shouldDisplayArrows, right: false })
      }

      return setShouldDisplayArrows({ right: true, left: true })
    }
  }

  return (
    <Flex style={styles.chipButtonWrapper}>
      {shouldDisplayArrows.left && (
        <Box style={styles.leftArrowContainer}>
          <Button
            variant="tertiary"
            size="small"
            sx={styles.arrowButton}
            onClick={handleLeftArrowClick}
          >
            {`‹`}
          </Button>
          <Box style={styles.leftArrowBlur}></Box>
        </Box>
      )}
      <Box
        style={styles.chipsContainer}
        ref={containerRef}
        onScroll={handleContainerScroll}
      >
        <Box style={styles.optionsContainer}>
          <MainChip
            value={'All results'}
            isActive={!filters.length}
            applyCategory={() => resetFilters()}
          />
          {categories.map((category) => (
            <Chip
              key={category.type}
              removeCategory={() => removeCategory(category.type)}
              value={category.title}
              categoryAmount={getCategoryAmount(category.type)}
              applyCategory={() => applyCategory(category.type)}
              isActive={isCategoryActive(category.type)}
              category={category.type}
            />
          ))}
        </Box>
      </Box>
      <Box style={styles.rightArrowContainer}>
        <Button
          variant="tertiary"
          size="small"
          sx={{
            ...styles.arrowButton,
            opacity: shouldDisplayArrows.right ? [1, 1, 1, 1, 0] : 0,
            pointerEvents: shouldDisplayArrows.right ? 'auto' : 'none',
          }}
          onClick={handleRightArrowClick}
        >{`›`}</Button>{' '}
        <Box style={styles.rightArrowBlur}></Box>
      </Box>
    </Flex>
  )
}

interface ChipProps {
  value: string
  isActive: boolean
  applyCategory: () => void
  categoryAmount: number
  removeCategory: () => void
  category: ActionType
}

function Chip({
  value,
  isActive,
  applyCategory,
  categoryAmount,
  removeCategory,
  category,
}: ChipProps) {
  function handleChipClick(active: boolean) {
    if (active) {
      return removeCategory()
    }
    applyCategory()
  }

  return (
    <Button
      variant="tertiary"
      size="small"
      type="button"
      sx={styles.getCategoryStyles(category, isActive)}
      onClick={() => handleChipClick(isActive)}
    >
      {value}
      {isActive && categoryAmount !== undefined && (
        <Text style={styles.articlesAmount}>{categoryAmount}</Text>
      )}
    </Button>
  )
}

interface MainChipProps {
  value: string
  isActive: boolean
  applyCategory: () => void
}

function MainChip({ value, isActive, applyCategory }: MainChipProps) {
  return (
    <Button
      variant="tertiary"
      size="small"
      type="button"
      sx={isActive ? styles.activeChip : styles.inactiveChip}
      onClick={() => applyCategory()}
    >
      {value}
    </Button>
  )
}
