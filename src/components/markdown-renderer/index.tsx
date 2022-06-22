import remarkGFM from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import components from './components'

interface Props {
  markdown: string
}

const MarkdownRenderer = ({ markdown }: Props) => (
  <ReactMarkdown components={components} remarkPlugins={[remarkGFM]}>
    {markdown}
  </ReactMarkdown>
)

export default MarkdownRenderer
