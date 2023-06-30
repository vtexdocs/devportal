import type { PropsWithChildren } from 'react'

export type SectionListProps = {
  grid?: 'row' | 'column'
  columns?: 3 | 2
  classes?: string
}

const SectionList = ({
  children,
  grid = 'row',
  columns = 3,
  classes,
  ...otherProps
}: PropsWithChildren<SectionListProps>) => {
  const scopedClasses = classes?.split(' ').map((klass) => klass ?? '') ?? []
  const stylizedClasses = scopedClasses.reduce(
    (acc, klass) => `${acc} ${klass}`,
    ''
  )

  return (
    <section
      className={`faststore-sectionList' ${stylizedClasses}`}
      {...otherProps}
    >
      <ul data-doc-section-grid={grid} data-doc-section-grid-columns={columns}>
        {children}
      </ul>
    </section>
  )
}

export default SectionList
