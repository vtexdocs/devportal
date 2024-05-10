import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import { Icon, LinkButton } from '@faststore/ui'
import ReactMarkdown from 'react-markdown'

export type SectionItemProps = {
  title: string
  description?: string | ReactNode
  actionPath?: string
  containerStyle?: CSSProperties
  zoomOut?: boolean
  fullWidth?: boolean
  smallHeight?: boolean
}

const SectionItem = ({
  title,
  description,
  children,
  actionPath,
  containerStyle,
  zoomOut,
  fullWidth,
  smallHeight,
  ...otherProps
}: PropsWithChildren<SectionItemProps>) => {
  return (
    <li
      className="faststore-sectionItem"
      {...otherProps}
      data-doc-section-item-zoom-out={zoomOut}
      data-doc-section-item-full-width={fullWidth}
      data-doc-section-item-small-height={smallHeight}
      {...otherProps}
    >
      <div className="overviewSectionContent" style={containerStyle}>
        {children}
      </div>
      <article className="faststore-sectionItem-description">
        <h3 className="faststore-sectionItem-title">{title}</h3>
        <ReactMarkdown>{description as string}</ReactMarkdown>
        {actionPath && (
          <LinkButton
            size="small"
            variant="tertiary"
            href={actionPath}
            icon={
              <Icon
                width={18}
                name="ArrowRight"
                onReset={undefined}
                onResetCapture={undefined}
              />
            }
            iconPosition="right"
          >
            See more
          </LinkButton>
        )}
      </article>
    </li>
  )
}

export default SectionItem
