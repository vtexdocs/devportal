import { Box, Button, Checkbox, Flex, Text } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import FilterIcon from 'components/icons/filter-icon'
import TrashcanIcon from 'components/icons/trashcan-icon'
import Tag from 'components/tag'
import { useState } from 'react'
import styles from './styles'

interface Filter {
  name: string
  options: { id: string; name: string }[]
}

interface Props {
  tagFilter?: string[]
  checkBoxFilter?: string[]
  selectedCheckboxes?: string[]
  selectedTags?: string[]
  onApply: (filters: { tag: string[]; checklist: string[] }) => void
  filterName: string
}

interface SelectedFilters {
  tag: string[]
  checklist: string[]
}

const Filter = ({
  tagFilter,
  checkBoxFilter,
  onApply,
  selectedCheckboxes,
  selectedTags,
  filterName,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tempFilters, setTempFilters] = useState<SelectedFilters>({
    tag: [],
    checklist: [],
  })
  const numberOfFilters =
    getSelectedFiltersLength(selectedTags) +
    getSelectedFiltersLength(selectedCheckboxes)

  function getSelectedFiltersLength(filters: string[] | undefined) {
    if (!filters) {
      return 0
    }
    return filters.length
  }

  function handleFilterClick(option: string, type: 'tag' | 'checklist') {
    if (tempFilters[type].includes(option)) {
      const updatedFilters = tempFilters[type].filter(
        (filter) => filter !== option
      )
      setTempFilters((prev) => ({ ...prev, [type]: updatedFilters }))
    } else {
      setTempFilters((prev) => ({
        ...prev,
        [type]: [...prev[type], option],
      }))
    }
  }

  function isFilterSelected(option: string, type: 'tag' | 'checklist') {
    // Check tempFilters when modal is open, otherwise check selected filters
    if (isModalOpen) {
      return tempFilters[type].find((filter) => filter === option)
        ? true
        : false
    }

    // When modal is closed, check the actual selected filters
    if (type === 'tag') {
      return selectedTags?.includes(option) ?? false
    } else {
      return selectedCheckboxes?.includes(option) ?? false
    }
  }

  const FilterButton = () => {
    return (
      <Flex
        sx={styles.filterButton}
        onClick={() => {
          setTempFilters({
            checklist: selectedCheckboxes ?? [],
            tag: selectedTags ?? [],
          })
          setIsModalOpen(true)
        }}
      >
        <FilterIcon size={16} />
        <Text sx={styles.filterButtonText}>Filters</Text>
        {numberOfFilters > 0 && (
          <Text sx={styles.numberOfFilters}>{numberOfFilters}</Text>
        )}
      </Flex>
    )
  }

  const TagFilter = () => {
    if (!tagFilter) return <></>
    return (
      <Box sx={styles.filterContainer}>
        <Text sx={styles.filterTitle}>{tagFilter}</Text>
        <Flex sx={styles.tagContainer}>
          {tagFilter.map((option, index) => (
            <Tag
              sx={styles.tag}
              key={index}
              color={isFilterSelected(option, 'tag') ? 'Selected' : 'Default'}
              onClick={() => handleFilterClick(option, 'tag')}
            >
              {option}
            </Tag>
          ))}
        </Flex>
      </Box>
    )
  }

  const CheckboxFilter = () => {
    if (!checkBoxFilter) return <></>
    return (
      <Box sx={styles.filterContainer}>
        <Text sx={styles.filterTitle}>{filterName}</Text>
        <Box sx={styles.checkBoxContainer}>
          {checkBoxFilter.map((option, index) => (
            <Checkbox
              key={index}
              label={option}
              checked={isFilterSelected(option, 'checklist')}
              onClick={() => handleFilterClick(option, 'checklist')}
            />
          ))}
        </Box>
      </Box>
    )
  }

  const Divider = () => {
    return (
      <Box sx={styles.sectionDivider}>
        <hr />
      </Box>
    )
  }

  const FilterModal = () => {
    return (
      <>
        <Box sx={styles.blanket} onClick={() => setIsModalOpen(false)} />
        <Box sx={styles.container}>
          <Box sx={styles.topContainer}>
            <Text sx={styles.modalTitle}>Filters</Text>
            <Flex
              sx={styles.closeButtonContainer}
              onClick={() => setIsModalOpen(false)}
            >
              <CloseIcon size={32} />
            </Flex>
          </Box>
          <Box sx={styles.innerContainer}>
            <TagFilter />
            {checkBoxFilter && tagFilter && <Divider />}
            <CheckboxFilter />
          </Box>
          <Flex sx={styles.buttonsContainer}>
            <Button
              sx={styles.removeButton}
              icon={() => <TrashcanIcon sx={{ mr: '8px' }} size={18} />}
              onClick={() => setTempFilters({ tag: [], checklist: [] })}
            >
              Remove filters
            </Button>
            <Button
              onClick={() => {
                setIsModalOpen(false)
                onApply(tempFilters)
              }}
            >
              Apply filters
            </Button>
          </Flex>
        </Box>
      </>
    )
  }

  return (
    <>
      <FilterButton />
      {isModalOpen && <FilterModal />}
    </>
  )
}

export default Filter
