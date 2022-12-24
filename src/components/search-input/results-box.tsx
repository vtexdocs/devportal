import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { connectStateResults } from 'react-instantsearch-dom'
import { Hit, SearchState } from 'react-instantsearch-core'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import { getIcon } from 'utils/constants'
import { getBreadcrumbs, getRelativeURL } from './functions'
import styles from './styles'

interface HitProps {
  hit: Hit
  setSearchStateActive: Dispatch<SetStateAction<SearchState>>
}

const Hit = ({ hit, setSearchStateActive }: HitProps) => {
  const breadcrumbsList = getBreadcrumbs(hit)
  const [title, setTitle] = useState<string>('')
  const DocIcon = getIcon(hit.doctype)

  useEffect(() => {
    if (hit.type === 'content') setTitle(hit.content)
    else {
      const hierarchy = JSON.parse(JSON.stringify(hit.hierarchy))
      setTitle(hierarchy[hit.type])
    }
  }, [])

  return (
    <Link
      href={getRelativeURL(hit)}
      onClick={() => setSearchStateActive({})}
      legacyBehavior
    >
      <Box sx={styles.hitBox}>
        <Flex>
          {DocIcon && <DocIcon className="hit-icon" sx={styles.hitIcon} />}
          <Text className="hit-content-title" sx={styles.hitContent}>
            {title}
          </Text>
        </Flex>
        <Flex sx={styles.alignCenter}>
          <Text sx={styles.hitBreadCrumbIn}>{`In ${hit.doctype}`}</Text>
          {breadcrumbsList.length > 0 && (
            <IconCaret direction="right" sx={styles.hitBreadCrumbArrow} />
          )}
          {breadcrumbsList.map((filter: string, index: number) => (
            <Flex sx={styles.alignCenter} key={`${filter}${index}`}>
              <Text sx={styles.hitBreadCrumb}>{filter}</Text>
              {index < breadcrumbsList.length - 1 ? (
                <IconCaret direction="right" sx={styles.hitBreadCrumbArrow} />
              ) : null}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Link>
  )
}

const HitsBox = connectStateResults(({ searchState, searchResults }) => {
  const router = useRouter()
  const [searchStateActive, setSearchStateActive] =
    useState<SearchState>(searchState)

  const seeAllSubmit = (keyword: string) => {
    setSearchStateActive({})
    router.push({
      pathname: '/search',
      query: { keyword },
    })
  }

  useEffect(() => {
    setSearchStateActive(searchState)
  }, [searchState])

  return (
    <>
      {searchStateActive?.query && (
        <Box sx={styles.resultsContainer}>
          <Box sx={searchResults.hits.length && styles.resultsBox}>
            {searchResults.hits.map(
              (searchResult, index) =>
                index < 7 && (
                  <Hit
                    key={searchResult.objectID}
                    hit={searchResult}
                    setSearchStateActive={setSearchStateActive}
                  />
                )
            )}
          </Box>
          {false && searchResults.hits.length > 7 && (
            <Box
              sx={styles.seeAll}
              onClick={() => seeAllSubmit(searchStateActive.query!)}
            >
              <Text>See all results</Text>
            </Box>
          )}
          {!searchResults.hits.length && (
            <Flex sx={styles.noResults}>
              <Text>No results =(</Text>
            </Flex>
          )}
        </Box>
      )}
    </>
  )
})

export default function Results() {
  return <HitsBox />
}
