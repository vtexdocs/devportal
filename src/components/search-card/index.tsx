import { Box, Flex, Text, IconCaret } from '@vtex/brand-ui'
import { IconComponent } from 'utils/typings/types'

import { methodStyle } from './functions'
import styles from './styles'
import { ActionType, getAction } from 'components/last-updates-card/functions'
import Link from 'next/link'
import CustomHighlight from 'components/search-input/customHighlight'
import {
  DocumentationTitle,
  MethodType,
  UpdatesTitle,
} from 'utils/typings/unionTypes'
import { useState } from 'react'
import ExpandedResultsIcon from 'components/icons/expanded-results-icon'
import { Hit } from 'react-instantsearch-core'

export type FilteredHit = Hit & { filteredMatches?: Hit[] }
interface SearchCardProps {
  doc: DocumentationTitle | UpdatesTitle
  title: string
  filters?: string[]
  http?: MethodType
  actionType?: ActionType
  Icon: IconComponent
  url: string
  hit: FilteredHit
}

const SearchCard = ({
  Icon,
  title,
  http,
  filters,
  actionType,
  url,
  hit,
}: SearchCardProps) => {
  const actionValue = actionType ? getAction(actionType) : null
  const [toggleChildResults, setToggleChildResults] = useState<boolean>(false)
  return (
    <Link href={url} legacyBehavior>
      <Flex sx={styles.container}>
        <Box>
          <Text className="searchCardTitle" sx={styles.title}>
            {Icon && <Icon sx={styles.icon} />}
            {http ? <Text sx={methodStyle(http)}>{http}</Text> : null}
            {title === 'overview' && `${hit.doccategory} `}
            {title}
          </Text>
          <Text className="searchCardDescription" sx={styles.description}>
            <Flex>
              <CustomHighlight
                hit={hit}
                attribute="content"
                {...{ searchPage: true }}
              />
            </Flex>
            {toggleChildResults &&
              hit.filteredMatches?.map((childHit, index: number) => (
                <Box
                  sx={styles.descriptionExpandedItem}
                  key={`search-card-${hit.objectID}-${index}`}
                >
                  <CustomHighlight
                    hit={childHit}
                    attribute="content"
                    {...{ searchPage: true }}
                  />
                </Box>
              ))}
          </Text>
          {filters ? (
            <Flex sx={styles.filterContainer}>
              <Text sx={styles.filterIn}>In</Text>
              {filters.map((filter, index) => (
                <Text sx={styles.filter} key={`${filter}${index}`}>
                  {filter}
                  {index < filters.length - 1 ? (
                    <IconCaret direction="right" sx={styles.filterArrow} />
                  ) : null}
                </Text>
              ))}
            </Flex>
          ) : null}
          {actionValue ? (
            <Flex sx={styles.actionContainer}>
              <actionValue.Icon sx={styles.actionIcon} />{' '}
              <Text>{actionValue?.title}</Text>
            </Flex>
          ) : null}
        </Box>
        {hit.filteredMatches && hit.filteredMatches.length > 0 && (
          <Box
            sx={styles.descriptionToggle}
            onClick={(event: Event) => {
              setToggleChildResults(!toggleChildResults)
              event.stopPropagation()
            }}
          >
            <ExpandedResultsIcon active={toggleChildResults} />
          </Box>
        )}
      </Flex>
    </Link>
  )
}

export default SearchCard
