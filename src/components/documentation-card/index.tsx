import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { cardContainer, cardTitle, titleContainer } from './functions'
import { DataElement } from 'utils/typings/types'

export interface DocumentProps extends DataElement {
  title: string
}
export interface CardProps extends DocumentProps {
  containerType: 'dropdown' | 'see-also' | 'mobile'
}
const DocumentationCard = ({
  title,
  description,
  link,
  containerType,
  Icon,
}: CardProps) => {
  return (
    <Link href={link} legacyBehavior>
      <Box sx={cardContainer(containerType)}>
        <Flex sx={titleContainer(containerType)}>
          <Icon size={24} />
          <Text className="title" sx={cardTitle(containerType)}>
            {title}
          </Text>
        </Flex>
        <Text className="description" sx={styles.description}>
          {description}
        </Text>
      </Box>
    </Link>
  )
}

export default DocumentationCard
