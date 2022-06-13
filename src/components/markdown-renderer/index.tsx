/* eslint-disable @typescript-eslint/no-unused-vars */
import remarkGFM from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useContext, useState } from 'react'
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
    const [y, setY] = useState(Infinity)
    const { activeItem, setActiveItem, goToPreviousItem } =
      useContext(APIGuideContext)

    const slug = slugify(childrenToString(props.children))
    return (
      <InView
        threshold={1}
        rootMargin="0px 0px -50% 0px"
        onChange={(inView, entry) => {
          if (inView) {
            setActiveItem(({ item, subItem }) => ({
              item: slug,
              subItem: item !== slug ? '' : subItem,
            }))
          } else if (
            entry.boundingClientRect.y > y &&
            activeItem.item === slug
          ) {
            goToPreviousItem()
          }

          setY(entry.boundingClientRect.y)
        }}
      >
        <h2 id={slug} className={styles.header} {...props} />
      </InView>
    )
  },
  h3: ({ node, ...props }: Component) => {
    const [y, setY] = useState(Infinity)
    const { activeItem, setActiveItem, goToPreviousSubItem } =
      useContext(APIGuideContext)

    const slug = slugify(childrenToString(props.children))
    return (
      <InView
        threshold={1}
        rootMargin="0px 0px -50% 0px"
        onChange={(inView, entry) => {
          if (inView) {
            setActiveItem(({ item }) => ({
              item,
              subItem: slug,
            }))
          } else if (
            entry.boundingClientRect.y > y &&
            activeItem.subItem === slug
          ) {
            goToPreviousSubItem()
          }

          setY(entry.boundingClientRect.y)
        }}
      >
        <h3 id={slug} className={styles.header} {...props} />
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
