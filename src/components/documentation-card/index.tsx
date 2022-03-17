import type { IconProps } from '@vtex/brand-ui'
import { Box, Flex, Text } from '@vtex/brand-ui'
import Link from 'next/link'

import styles from './styles'

export interface CardProps {
  Icon: (props: IconProps) => JSX.Element
  title: string
  description: string
}

const DocumentationCard = ({ Icon, title, description }: CardProps) => {
  return (
    <Link href="/">
      <a>
        <Box sx={styles.cardContainer}>
          <Flex sx={styles.infoContainer}>
            <Icon sx={styles.icon} />
            <Text className="title" sx={styles.title}>
              {title}
            </Text>
            <Text className="description" sx={styles.description}>
              {description}
            </Text>
          </Flex>
          <Flex
            className="quickStartedContainer"
            sx={styles.quickStartedContainer}
          >
            <Text sx={styles.quickStartedText}>Quick Started</Text>
          </Flex>
        </Box>
      </a>
    </Link>
  )
}

export default DocumentationCard
