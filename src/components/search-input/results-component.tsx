import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { connectStateResults } from 'react-instantsearch-dom'
import { Hit, SearchState } from 'react-instantsearch-core'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import { getIcon } from 'utils/constants'
import { breadcrumbs } from './functions'
import styles from './styles'

interface HitProps {
  hit: Hit
  setSearchStateActive: Dispatch<SetStateAction<SearchState>>
}

const Hit = ({ hit, setSearchStateActive }: HitProps) => {
  const breadCrumbs = breadcrumbs(hit)

  const DocIcon = getIcon(hit.doctype)

  return (
    <Link href={hit.url}>
      <a onClick={() => setSearchStateActive({})}>
        <Box sx={styles.hitBox}>
          <Flex>
            {DocIcon && <DocIcon className="hit-icon" sx={styles.hitIcon} />}
            <Text className="hit-content-title" sx={styles.hitContent}>
              {hit.content}
            </Text>
          </Flex>
          <Flex sx={styles.alignCenter}>
            <Text sx={styles.hitBreadCrumbIn}>{`In ${hit.doctype}`}</Text>
            {breadCrumbs.length > 0 && (
              <IconCaret direction="right" sx={styles.hitBreadCrumbArrow} />
            )}
            {breadCrumbs.map((filter: string, index: number) => (
              <Flex sx={styles.alignCenter}>
                <Text sx={styles.hitBreadCrumb} key={`${filter}${index}`}>
                  {filter}
                </Text>
                {index < breadCrumbs.length - 1 ? (
                  <IconCaret direction="right" sx={styles.hitBreadCrumbArrow} />
                ) : null}
              </Flex>
            ))}
          </Flex>
        </Box>
      </a>
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
        <Box sx={styles.container}>
          <Box sx={styles.resultsBox}>
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
          {searchResults.hits.length > 7 && (
            <Box
              sx={styles.seeAll}
              onClick={() => seeAllSubmit(searchStateActive.query!)}
            >
              <Text>See all results</Text>
            </Box>
          )}
        </Box>
      )}
    </>
  )
})

export default function Results() {
  return <HitsBox />
}
