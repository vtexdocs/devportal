import { Box } from '@vtex/brand-ui'
import { MDXRemote } from 'next-mdx-remote'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXRemote2: any = MDXRemote
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import components from './components'
import Head from 'next/head'

interface Props {
  serialized: MDXRemoteSerializeResult
}

const MarkdownRenderer = ({ serialized }: Props) => (
  <Box>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github.min.css"
        integrity="sha512-0aPQyyeZrWj9sCA46UlmWgKOP0mUipLQ6OZXu8l4IcAmD2u31EPEy9VcIMvl7SoAaKe8bLXZhYoMaE/in+gcgA=="
        crossOrigin="anonymous"
      />
    </Head>
    <MDXRemote2 components={components} lazy {...serialized} />
  </Box>
)

export default MarkdownRenderer
