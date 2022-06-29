import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { cardContainer, cardTitle, titleContainer } from './functions'
import { DataElement } from 'utils/typings/types'

export interface DocumentProps extends DataElement {
  title: string
}
export interface CardProps extends DocumentProps {
  containerType: string
}
const DocumentationCard = ({
  title,
  description,
  link,
  containerType,
  Icon,
}: CardProps) => {
  return (
    <Link href={link}>
      <a>
        <Box sx={cardContainer(containerType)}>
          <Flex sx={titleContainer(containerType)}>
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
