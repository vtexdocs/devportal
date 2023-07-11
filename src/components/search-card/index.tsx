import { Box, Flex, Text, IconCaret, Tooltip } from '@vtex/brand-ui'
import { IconComponent } from 'utils/typings/types'

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
import MethodCategory from 'components/method-category'

export type FilteredHit = Hit & { filteredMatches?: Hit[] }
interface SearchCardProps {
  doc: DocumentationTitle | UpdatesTitle
  title: string
  breadcrumbs?: string[]
  method?: MethodType
  actionType?: ActionType
  Icon: IconComponent
  url: string
  hit: FilteredHit
}

const SearchCard = ({
  Icon,
  title,
  method,
  breadcrumbs,
  actionType,
  url,
  hit,
}: SearchCardProps) => {
  const actionValue = actionType ? getAction(actionType) : null
  const [toggleChildResults, setToggleChildResults] = useState<boolean>(true)
  return (
    <Link href={url} legacyBehavior>
      <Flex sx={styles.containerActive(method)}>
        <Box>
          <Text className="searchCardTitle" sx={styles.title}>
            {Icon && <Icon sx={styles.icon} />}
            {method ? (
              <MethodCategory
                sx={styles.httpMethod}
                origin="search"
                method={method}
                active={false}
              />
            ) : null}
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
          {breadcrumbs ? (
            <Box sx={styles.breadcrumbsContainer}>
              <Text sx={styles.breadcrumbsIn}>In</Text>
              {breadcrumbs.map((breadcrumb, index) => (
                <Flex
                  sx={index === 0 ? styles.documentation : styles.alignCenter}
                  key={`${breadcrumb}${index}`}
                >
                  <Tooltip label={breadcrumb} placement="top">
                    <Text sx={styles.breadcrumb}>{breadcrumb}</Text>
                  </Tooltip>
                  {index < breadcrumbs.length - 1 ? (
                    <IconCaret direction="right" sx={styles.breadcrumbsArrow} />
                  ) : null}
                </Flex>
              ))}
            </Box>
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
