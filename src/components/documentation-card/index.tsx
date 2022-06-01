import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import type { IconComponent } from 'utils/typings/types'

import styles from './styles'
import { cardContainer, cardTitle } from './functions'

export interface CardProps {
  title: string
  description: string
  to: string
  Icon: IconComponent
  containerType: string
}

const DocumentationCard = ({
  title,
  description,
  to,
  Icon,
  containerType,
}: CardProps) => {
  return (
    <Link href={to}>
      <a>
        <Box sx={cardContainer(containerType)}>
          <Flex sx={styles.titleContainer}>
            <Icon sx={styles.icon} />
            <Text className="title" sx={cardTitle(containerType)}>
              {title}
            </Text>
          </Flex>
          <Text className="description" sx={styles.description}>
            {description}
          </Text>
        </Box>
      </a>
    </Link>
  )
}

export default DocumentationCard
