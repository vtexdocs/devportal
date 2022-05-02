/* eslint-disable @typescript-eslint/no-unused-vars */
import remarkGFM from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import styles from './styles.module.css'

type Component = {
  node: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const components = {
  table: ({ node, ...props }: Component) => (
    <table className={styles.table} {...props} />
  ),
  td: ({ node, ...props }: Component) => (
    <td className={styles.td} {...props} />
  ),
}

interface Props {
  markdown: string
}

const MarkdownRenderer = ({ markdown }: Props) => (
  <ReactMarkdown components={components} remarkPlugins={[remarkGFM]}>
    {markdown}
  </ReactMarkdown>
)

export default MarkdownRenderer
