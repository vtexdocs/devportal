import { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { Text } from '@vtex/brand-ui'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export type CardItemProps = {
  title: string
  actionPath: string
  description: string | ReactNode
  zoomOut?: boolean
  fullWidth?: boolean
  containerStyle?: CSSProperties
}

const CardItem = ({
  title,
  description,
  children,
  zoomOut,
  fullWidth,
  actionPath,
  containerStyle,
  ...otherProps
}: PropsWithChildren<CardItemProps>) => {
  return (
    <li data-doc-card-item {...otherProps}>
      <a data-doc-card-item-link href={actionPath}>
        <div
          data-doc-card-item-component
          data-doc-card-item-component-zoom={zoomOut}
          data-doc-card-item-component-full-width={fullWidth}
          style={containerStyle}
          className="overviewSectionContent"
        >
          {children}
        </div>
        <article data-doc-card-item-content>
          <Text sx={{ fontWeight: 'bold', fontSize: '1.125em' }}>{title}</Text>
          <ReactMarkdown>{description}</ReactMarkdown>
        </article>
      </a>
    </li>
  )
}

export default CardItem
