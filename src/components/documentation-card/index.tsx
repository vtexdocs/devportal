import type { IconComponent } from 'utils/typings/types'

import Link from 'next/link'
import { Flex, Text } from '@vtex/brand-ui'

import styles from './styles'

export interface CardProps {
  Icon: IconComponent
  title: string
  description: string
  link: string
}

const DocumentationCard = ({ Icon, title, description, link }: CardProps) => {
  return (
    <Link href={link}>
      <a>
        <Flex sx={styles.cardContainer}>
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
            <Text className="quickStartedText" sx={styles.quickStartedText}>
              Quick Started
            </Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}

export default DocumentationCard
