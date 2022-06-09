/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react'
import remarkGFM from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { InView } from 'react-intersection-observer'

import { APIGuideContext } from 'utils/contexts/api-guide'
import { childrenToString, slugify } from 'utils/string-utils'

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
  img: ({ node, ...props }: Component) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.img} {...props} />
  ),
  h2: ({ node, ...props }: Component) => {
    const slug = slugify(childrenToString(props.children))
    const { activeItem, setActiveItem, setActiveSubItem } =
      useContext(APIGuideContext)

    return (
      <InView
        onChange={(inView) => {
          if (inView) {
            setActiveItem(slug)
            if (activeItem !== slug) {
              setActiveSubItem('')
            }
          }
        }}
      >
        <h2 id={slug} {...props} />
      </InView>
    )
  },
  h3: ({ node, ...props }: Component) => {
    const slug = slugify(childrenToString(props.children))
    const { setActiveSubItem } = useContext(APIGuideContext)

    return (
      <InView
        onChange={(inView) => {
          if (inView) {
            setActiveSubItem(slug)
          }
        }}
      >
        <h3 id={slug} {...props} />
      </InView>
    )
  },
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
