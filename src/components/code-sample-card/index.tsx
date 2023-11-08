import { Box, Flex, Text, IconCaret, Link } from '@vtex/brand-ui'

import type { CodeSamplesElement } from 'utils/typings/types'

import styles from './styles'

const CodeSampleCard = ({
  title,
  description,
  builders,
  linkTo,
  repoLink,
  category,
}: CodeSamplesElement) => {
  return (
    <Flex sx={styles.container}>
      <Box sx={styles.innerContent}>
        {category && <Text sx={styles.category}>{category}</Text>}
        <Text sx={styles.title} className="title">
          {title}
        </Text>
        <Text sx={styles.description} className="description">
          {description}
        </Text>
        <Box sx={styles.builderList}>
          {builders.map((builder) => (
            <Text sx={styles.builderListItem}>{builder}</Text>
          ))}
        </Box>
        <Link href={repoLink} target="_blank">
          <Text sx={styles.link} className="link">
            View GitHub repository
          </Text>
        </Link>
      </Box>

      {linkTo && (
        <Flex sx={styles.ctaLink}>
          <Link href={linkTo}>
            <Flex sx={styles.linkContainer}>
              <Text sx={styles.ctaLinkText} className="ctaLinkText">
                View documentation
              </Text>
              <IconCaret
                className="caret"
                color="#A1A8B3"
                direction="right"
                size={20}
              />
            </Flex>
          </Link>
        </Flex>
      )}
    </Flex>
  )
}

export default CodeSampleCard
