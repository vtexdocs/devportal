import React from 'react'
import CopyButton from 'components/copy-button'
import { Box, Text } from '@vtexdocs/brand-ui'
import styles from './styles'
import { childrenToString } from 'utils/string-utils'

type Component = {
  node: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const CodeBlock = ({ ...props }: Component) => {
  return (
    <Box sx={styles.CodeBlock}>
      <pre>
        <CopyButton code={childrenToString(props.children)} />
        <Text sx={styles.CodeContent} {...props} />
      </pre>
    </Box>
  )
}

export default CodeBlock
