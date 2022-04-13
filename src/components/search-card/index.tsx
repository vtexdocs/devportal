import { Box, Flex, Text, IconCaret } from '@vtex/brand-ui'
import { IconComponent } from 'utils/typings/types'
import type { SearchDataItemProps } from 'pages/search'

import { methodStyle } from './functions'
import styles from './styles'
import { getAction } from 'components/last-updates-card/functions'

export interface SearchCardProps extends SearchDataItemProps {
  Icon: IconComponent
}

const SearchCard = ({
  Icon,
  title,
  description,
  http,
  filters,
  actionType,
}: SearchCardProps) => {
  const actionValue = actionType ? getAction(actionType) : null
  return (
    <Box sx={styles.container}>
      <Text className="searchCardTitle" sx={styles.title}>
        <Icon sx={styles.icon} />
        {http ? <Text sx={methodStyle(http)}>{http}</Text> : null}
        {title}
      </Text>
      <Text className="searchCardDescription" sx={styles.description}>
        {description}
      </Text>
      {filters ? (
        <Flex sx={styles.filterContainer}>
          <Text sx={styles.filterIn}>In</Text>
          {filters.map((filter, index) => (
            <Text sx={styles.filter}>
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
  )
}

export default SearchCard
