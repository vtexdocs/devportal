import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  connectStateResults,
  connectHitInsights,
} from 'react-instantsearch-dom'
import {
  Hit,
  SearchState,
  WrappedInsightsClient,
} from 'react-instantsearch-core'
import aa from 'search-insights'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import { getIcon } from 'utils/constants'
import { getBreadcrumbs, getRelativeURL } from './functions'
import CustomHighlight from './customHighlight'
import styles from './styles'
import { FormattedMessage, useIntl } from 'react-intl'
interface HitProps {
  hit: Hit
  insights: WrappedInsightsClient
}

const Hit = ({ hit, insights }: HitProps) => {
  const breadcrumbsList = getBreadcrumbs(hit)
  const intl = useIntl()
  const DocIcon = getIcon(hit.doctype, intl)
  return (
    <Link href={getRelativeURL(hit)} legacyBehavior>
      <a
        onClick={() =>
          insights('clickedObjectIDsAfterSearch', {
            eventName: 'Search in top bar',
            objectIDs: [hit.objectID],
          })
        }
      >
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

const HitWithInsights = connectHitInsights(aa)(Hit)

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setQueryIDAndPosition = (hit: Hit, index: number): any => {
    return {
      ...hit,
      __queryID: searchResults.queryID || '',
      __position: searchResults.hitsPerPage * searchResults.page + index + 1,
    }
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
                    <Box
                      key={`matched-result-${index}`}
                      onClick={() => setSearchStateActive({})}
                    >
                      <HitWithInsights
                        hit={setQueryIDAndPosition(searchResult, index)}
                      />
                    </Box>
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
                <Text>
                  <FormattedMessage id="search_input.empty" />
                </Text>
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
