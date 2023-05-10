import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  connectStateResults,
  connectHitInsights,
} from 'react-instantsearch-dom'
import {
  Hit,
  StateResultsProvided,
  WrappedInsightsClient,
} from 'react-instantsearch-core'
import aa from 'search-insights'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import { getIcon, messages } from 'utils/constants'
import { getBreadcrumbs, getRelativeURL } from 'utils/search-utils'
import CustomHighlight from './customHighlight'
import styles from './styles'
interface HitProps {
  hit: Hit
  insights: WrappedInsightsClient
}

interface HitsBoxProps extends StateResultsProvided {
  changeFocus: (value: boolean) => void
}

const Hit = ({ hit, insights }: HitProps) => {
  const breadcrumbsList = getBreadcrumbs(hit)
  const DocIcon = getIcon(hit.doctype)
  return (
    <Link href={getRelativeURL(hit.url)} legacyBehavior>
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
            <Text sx={styles.hitContent}>
              <CustomHighlight hit={hit} attribute="content" />
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
      </a>
    </Link>
  )
}

const HitWithInsights = connectHitInsights(aa)(Hit)

const HitsBox = connectStateResults<HitsBoxProps>(
  ({ searchState, searchResults, changeFocus }) => {
    const router = useRouter()

    const seeAllSubmit = (keyword: string) => {
      router.push({
        pathname: '/search',
        query: { keyword },
      })
      changeFocus(false)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setQueryIDAndPosition = (hit: Hit, index: number): any => {
      return {
        ...hit,
        __queryID: searchResults.queryID || '',
        __position: searchResults.hitsPerPage * searchResults.page + index + 1,
      }
    }

    return (
      <>
        {searchResults && (
          <Box sx={styles.resultsOuterContainer}>
            <Box sx={styles.resultsInnerContainer}>
              <Box sx={searchResults.hits.length && styles.resultsBox}>
                {searchResults.hits.map(
                  (searchResult, index) =>
                    index < 7 && (
                      <Box
                        key={`matched-result-${index}`}
                        onClick={() => changeFocus(false)}
                      >
                        <HitWithInsights
                          hit={setQueryIDAndPosition(searchResult, index)}
                        />
                      </Box>
                    )
                )}
              </Box>
              {searchResults.hits.length > 7 && (
                <Box
                  sx={styles.seeAll}
                  onClick={() => seeAllSubmit(searchState.query || '')}
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
  }
)

export default HitsBox
