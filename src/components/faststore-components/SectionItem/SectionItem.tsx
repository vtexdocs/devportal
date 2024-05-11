import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import ArrowRightIcon from 'components/icons/arrow-right-icon'
import { Text } from '@vtex/brand-ui'

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
        <Text sx={{ fontWeight: 'bold', fontSize: '1.125em' }}>{title}</Text>
        <ReactMarkdown>{description as string}</ReactMarkdown>
        {actionPath && (
          <Link href={actionPath}>
            See more
            <ArrowRightIcon
              direction="right"
              size={18}
              sx={{
                display: 'inline',
                verticalAlign: 'text-top',
                ml: '3px',
              }}
            />
          </Link>
        )}
      </article>
    </li>
  )
}

export default SectionItem
