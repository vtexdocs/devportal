import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import styles from './styles'
import { cardContainer, cardTitle, titleContainer } from './functions'
import { DataElement } from 'utils/typings/types'
import { MouseEventHandler } from 'react'

export interface DocumentProps extends DataElement {
  title: string
}
export interface CardProps extends DocumentProps {
  containerType: 'dropdown' | 'see-also' | 'mobile'
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}
const DocumentationCard = ({
  title,
  description,
  link,
  containerType,
  Icon,
  onClick,
}: CardProps) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      style={{ width: '100%', display: 'block' }}
    >
      <Box sx={cardContainer(containerType)}>
        <Flex sx={titleContainer(containerType)}>
          <Icon sx={{ color: '#4A596B' }} size={24} />
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
