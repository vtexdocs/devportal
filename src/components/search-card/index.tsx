import { Box, Flex, Text, IconCaret, Button } from '@vtex/brand-ui'
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
import { FilteredHit } from 'components/search-results/infiniteHits'
import { useState } from 'react'

interface SearchCardProps {
  doc: DocumentationTitle | UpdatesTitle
  title: string
  description: string
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
      <Box sx={styles.container}>
        <Text className="searchCardTitle" sx={styles.title}>
          <Icon sx={styles.icon} />
          {http ? <Text sx={methodStyle(http)}>{http}</Text> : null}
          {title === 'overview' && `${hit.docCategory} `}
          {title}
        </Text>
        <Text className="searchCardDescription" sx={styles.description}>
          <Flex>
            <CustomHighlight hit={hit} attribute="content" />
            {hit.filteredMatches && (
              <Button
                variant="tertiary"
                sx={styles.descriptionToggle}
                icon={() => (
                  <IconCaret
                    direction={toggleChildResults ? 'up' : 'down'}
                    size={24}
                  />
                )}
                onClick={(event) => {
                  setToggleChildResults(!toggleChildResults)
                  event.stopPropagation()
                }}
              />
            )}
          </Flex>
          <Box>
            {toggleChildResults &&
              hit.filteredMatches?.map((childHit, index: number) => (
                <CustomHighlight
                  key={`${hit.objectID}-${index}`}
                  hit={childHit}
                  attribute="content"
                />
              ))}
          </Box>
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
    </Link>
  )
}

export default SearchCard
