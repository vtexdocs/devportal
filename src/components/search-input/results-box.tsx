import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { connectStateResults } from 'react-instantsearch-dom'
import { Hit, SearchState } from 'react-instantsearch-core'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import { getIcon, messages } from 'utils/constants'
import { getBreadcrumbs, getRelativeURL } from './functions'
import CustomHighlight from './customHighlight'
import styles from './styles'

interface HitProps {
  hit: Hit
  setSearchStateActive: Dispatch<SetStateAction<SearchState>>
}

const Hit = ({ hit, setSearchStateActive }: HitProps) => {
  const breadcrumbsList = getBreadcrumbs(hit)
  const DocIcon = getIcon(hit.doctype)
  return (
    <Link href={getRelativeURL(hit)} legacyBehavior>
      <a onClick={() => setSearchStateActive({})}>
        <Box sx={styles.hitBox}>
          <Flex>
            {DocIcon && <DocIcon className="hit-icon" sx={styles.hitIcon} />}
            <CustomHighlight hit={hit} attribute="content" />
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
      {searchStateActive?.query && searchResults && (
        <Box sx={styles.resultsOuterContainer}>
          <Box sx={styles.resultsInnerContainer}>
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
                <Text>{messages['search_input.empty']}</Text>
              </Flex>
            )}
          </Box>
        </Box>
      )}
    </>
  )
})

export default function Results() {
  return <HitsBox />
}
