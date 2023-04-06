import { Box } from '@vtex/brand-ui'
import { MDXRemote } from 'next-mdx-remote'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXRemote2: any = MDXRemote
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import components from './components'
import '@highlightjs/cdn-assets/styles/github.min.css'

interface Props {
  serialized: MDXRemoteSerializeResult
}

const MarkdownRenderer = ({ serialized }: Props) => (
  <Box>
    <MDXRemote2 components={components} lazy {...serialized} />
  </Box>
)

export default MarkdownRenderer
