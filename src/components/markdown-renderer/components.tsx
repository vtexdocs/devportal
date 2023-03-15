/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react'
import { InView } from 'react-intersection-observer'
import Image from 'next/image'
import { APIGuideContext } from 'utils/contexts/api-guide'
import { childrenToString, slugify } from 'utils/string-utils'
import OverviewCard from 'components/overview-card'
import WhatsNextCard from 'components/whats-next-card'
import YoutubeFrame from 'components/youtube-frame'
import CodeBlock from 'components/code-block'

import styles from './styles.module.css'
import { Flex } from '@vtex/brand-ui'
import LightBox from 'components/lightbox'
import { messages } from 'utils/constants'

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
  const toSlugify = childrenToString(headingProps.children)
  const slug = slugify(toSlugify)
  return (
    <InView
      threshold={0.5}
      rootMargin="0px 0px -80% 0px"
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

const Callout = ({ node, icon, ...props }: Component) => {
  const blockquoteType: string = icon ? icon : 'info'
  return (
    <blockquote
      className={`${styles.blockquote} ${
        blockquoteType === 'info'
          ? styles.blockquoteInfo
          : blockquoteType === 'danger'
          ? styles.blockquoteDanger
          : blockquoteType === 'warning'
          ? styles.blockquoteWarning
          : blockquoteType === 'success'
          ? styles.blockquoteSuccess
          : ''
      }`}
    >
      <p {...props} />
    </blockquote>
  )
}

export default {
  OverviewCard,
  WhatsNextCard,
  YoutubeFrame,
  Flex: ({ node, ...props }: Component) => (
    <Flex className={styles.flexWrap} {...props} />
  ),
  table: ({ node, ...props }: Component) => <table {...props} />,
  td: ({ node, ...props }: Component) => <td {...props} />,
  img: ({ node, ...props }: Component) => {
    const [imageHasError, setImageHasError] = useState(false)
    const [srcHasError, setSrcHasError] = useState(false)
    const regularImg = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.src}
        alt={props.alt}
        onError={() => setSrcHasError(true)}
      />
    )
    const errorMessage = (
      <blockquote
        className={`${styles.blockquote} ${styles.blockquoteWarning}`}
      >
        {messages['error_loading_image']} {props.src}
      </blockquote>
    )

    let data: { base64: string; img: object } = { base64: '', img: {} }
    try {
      data = JSON.parse(props.alt)
    } catch (error) {
      console.log(`Error parsing`, error)
      return errorMessage
    }
    return !imageHasError ? (
      <LightBox>
        <Image
          className={styles.img}
          loading="lazy"
          src={props.src}
          alt={props.alt}
          placeholder="blur"
          blurDataURL={data.base64}
          style={{
            objectFit: 'contain',
            height: 'auto',
          }}
          onError={() => setImageHasError(true)}
          {...data?.img}
        />
      </LightBox>
    ) : !srcHasError ? (
      <LightBox>{regularImg}</LightBox>
    ) : (
      errorMessage
    )
  },
  blockquote: ({ ...props }: Component) => {
    return <Callout {...props} />
  },
  code: ({ node, ...props }: Component) => {
    return <code className={styles.code} {...props}></code>
  },
  pre: ({ ...props }: Component) => {
    return <CodeBlock {...props} />
  },
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
