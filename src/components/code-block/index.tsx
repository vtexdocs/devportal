import React from 'react'
import CopyButton from 'components/copy-button'
import { Box, Text } from '@vtex/brand-ui'
import styles from './styles'
import { childrenToString } from 'utils/string-utils'

type Component = {
  node: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const CodeBlock = ({ ...props }: Component) => {
  console.log(childrenToString(props.children))
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
