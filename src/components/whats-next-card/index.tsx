import { Box, Flex, IconCaret, Text, Link } from '@vtex/brand-ui'
import Image from 'next/image'

import type { WhatsNextDataElement } from 'utils/typings/types'

import styles from './styles'

const WhatsNextCard = ({
  title,
  description,
  linkTitle = 'See more',
  linkTo,
  imgSrc,
}: WhatsNextDataElement) => {
  return (
    <Link href={linkTo} sx={styles.container}>
      <Box>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={title}
            width={50}
            height={50}
            style={{ marginBottom: '8px' }}
          />
        )}
        <Text sx={styles.title} className="title">
          {title}
        </Text>
        <Text sx={styles.description} className="description">
          {description}
        </Text>
        <Flex sx={styles.linkContainer}>
          <Text sx={styles.link} className="link">
            {linkTitle}
          </Text>
          <IconCaret
            className="caret"
            color="#A1A8B3"
            direction="right"
            size={16}
          />
        </Flex>
      </Box>
    </Link>
  )
}

export default WhatsNextCard
