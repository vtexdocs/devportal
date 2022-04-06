import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import type { IconComponent } from 'utils/typings/types'

import styles from './styles'

export interface CardProps {
  title: string
  description: string
  to: string
  Icon: IconComponent
}

const DropdownCard = ({ title, description, to, Icon }: CardProps) => {
  return (
    <Link href={to}>
      <a>
        <Box sx={styles.cardContainer}>
          <Flex sx={styles.titleContainer}>
            <Icon sx={styles.icon} />
            <Text className="title" sx={styles.title}>
              {title}
            </Text>
          </Flex>
          <Text sx={styles.description}>{description}</Text>
        </Box>
      </a>
    </Link>
  )
}

export default DropdownCard
