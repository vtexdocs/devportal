import Link from 'next/link'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import type { WhatsNextDataElement } from 'utils/typings/types'

import styles from './styles'

const WhatsNextCard = ({ title, description, link }: WhatsNextDataElement) => {
  return (
    <Link href={link.to}>
      <a>
        <Box sx={styles.container}>
          <Text sx={styles.title} className="title">
            {title}
          </Text>
          <Text sx={styles.description} className="description">
            {description}
          </Text>
          <Flex sx={styles.linkContainer}>
            <Text sx={styles.link} className="link">
              {link.title}
            </Text>
            <IconCaret direction="right" size={16} />
          </Flex>
        </Box>
      </a>
    </Link>
  )
}

export default WhatsNextCard
