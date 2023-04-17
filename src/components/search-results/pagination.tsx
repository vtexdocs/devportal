import { useContext, useEffect } from 'react'
import { Flex, Text } from '@vtex/brand-ui'
import { connectPagination } from 'react-instantsearch-dom'
import { SearchContext } from 'utils/contexts/search'
import styles from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pagination = ({ currentRefinement, nbPages, refine }: any) => {
  const { filterSelectedSection } = useContext(SearchContext)
  useEffect(() => {
    if (currentRefinement !== 1) refine(1)
  }, [filterSelectedSection])
  return (
    <Flex sx={styles.paginationContainer}>
      <Text
        sx={
          currentRefinement > 1
            ? styles.paginationLink
            : styles.paginationLinkDisabled
        }
        onClick={() => {
          if (currentRefinement > 1) refine(currentRefinement - 1)
        }}
      >
        previous
      </Text>
      <Text sx={styles.paginationNumber}>
        page
        <Text sx={styles.paginationActualNumber}>{currentRefinement}</Text>
        of {nbPages}
      </Text>
      <Text
        sx={
          currentRefinement < nbPages
            ? styles.paginationLink
            : styles.paginationLinkDisabled
        }
        onClick={() => {
          if (currentRefinement < nbPages) refine(currentRefinement + 1)
        }}
      >
        more
      </Text>
    </Flex>
  )
}

export default connectPagination(Pagination)
