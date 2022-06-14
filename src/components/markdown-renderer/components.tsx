/* eslint-disable @typescript-eslint/no-unused-vars */
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

interface ObservableHeadingProps {
  level: 2 | 3
  onEnterView: (slug: string) => void
  onLeaveView: (
    slug: string,
    entry: IntersectionObserverEntry,
    y: number
  ) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const ObservableHeading = ({
  level,
  onEnterView,
  onLeaveView,
  ...headingProps
}: ObservableHeadingProps) => {
  const [y, setY] = useState(Infinity)
  const slug = slugify(childrenToString(headingProps.children))

  return (
    <InView
      threshold={0.5}
      rootMargin="0px 0px -50% 0px"
      onChange={(inView, entry) => {
        if (inView) onEnterView(slug)
        else onLeaveView(slug, entry, y)

        setY(entry.boundingClientRect.y)
      }}
    >
      {level === 2 ? (
        <h2 id={slug} className={styles.heading} {...headingProps} />
      ) : (
        <h3 id={slug} className={styles.heading} {...headingProps} />
      )}
    </InView>
  )
}

export default {
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
    const { activeItem, setActiveItem, goToPreviousItem } =
      useContext(APIGuideContext)

    return (
      <ObservableHeading
        level={2}
        onEnterView={(slug) => {
          setActiveItem(({ item, subItem }) => ({
            item: slug,
            subItem: item !== slug ? '' : subItem,
          }))
        }}
        onLeaveView={(slug, entry, y) => {
          if (entry.boundingClientRect.y > y && activeItem.item === slug) {
            goToPreviousItem()
          }
        }}
        {...props}
      />
    )
  },
  h3: ({ node, ...props }: Component) => {
    const { activeItem, setActiveItem, goToPreviousSubItem } =
      useContext(APIGuideContext)

    return (
      <ObservableHeading
        level={3}
        onEnterView={(slug) => {
          setActiveItem(({ item }) => ({
            item,
            subItem: slug,
          }))
        }}
        onLeaveView={(slug, entry, y) => {
          if (entry.boundingClientRect.y > y && activeItem.subItem === slug) {
            goToPreviousSubItem()
          }
        }}
        {...props}
      />
    )
  },
}
