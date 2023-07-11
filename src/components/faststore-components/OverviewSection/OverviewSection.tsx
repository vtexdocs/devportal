import React, { CSSProperties, ReactElement } from 'react'

type Direction = 'column' | 'row'

export type OverviewSectionProps = {
  children: ReactElement[]
  dark?: boolean
  direction?: Direction
  bigGap?: boolean
  containerStyle?: CSSProperties
}

const OverviewSection = ({
  children,
  dark,
  direction,
  containerStyle,
  bigGap,
  ...otherProps
}: OverviewSectionProps) => {
  return (
    <div
      className="faststore-overviewSection"
      data-doc-overview-section
      data-doc-overview-dark={dark}
      data-doc-overview-direction={direction}
      data-doc-overview-big-gap={bigGap}
      style={containerStyle}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default OverviewSection
