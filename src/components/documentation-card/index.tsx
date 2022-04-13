import type { IconComponent } from 'utils/typings/types'

import Link from 'next/link'
import { Flex, Text } from '@vtex/brand-ui'

import { getMessages } from 'utils/get-messages'

import styles from './styles'

export interface CardProps {
  Icon: IconComponent
  title: string
  description: string
  link: string
}

const DocumentationCard = ({ Icon, title, description, link }: CardProps) => {
  const messages = getMessages()
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
              {
                messages[
                  'landing_page_documentation_documentation_card.quickStartedText'
                ]
              }
            </Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}

export default DocumentationCard
