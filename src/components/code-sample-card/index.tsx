import { Box, Flex, Text, IconCaret, Link } from '@vtex/brand-ui'
import GithubIcon from 'components/icons/github-icon'

import type { CodeSamplesElement } from 'utils/typings/types'

import styles from './styles'

const CodeSampleCard = ({
  title,
  description,
  builders,
  linkTitle,
  linkTo,
  repoLink,
}: CodeSamplesElement) => {
  return (
    <Box sx={styles.container}>
      <Flex sx={styles.flexLinks}>
        <Text sx={styles.title} className="title">
          {title}
        </Text>
        <Link href={repoLink}>
          <GithubIcon size={30} sx={styles.link} />
        </Link>
      </Flex>
      <Text sx={styles.description} className="description">
        {description}
      </Text>

      <Box sx={styles.builderList}>
        {builders.map((builder) => (
          <Text sx={styles.builderListItem}>{builder}</Text>
        ))}
      </Box>
      <Link href={linkTo}>
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
      </Link>
    </Box>
  )
}

export default CodeSampleCard
