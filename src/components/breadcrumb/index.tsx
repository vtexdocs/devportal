import { Link, Flex, IconCaret, Text } from '@vtex/brand-ui'
import { useEffect, useRef, useState } from 'react'

import styles from './styles'

interface Props {
  breadcumbList: { slug: string; name: string; type: string }[]
}

const Breadcrumb = ({ breadcumbList }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTruncated, setIsTruncated] = useState(false)
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const lastItemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (breadcrumbRef.current && lastItemRef.current) {
      const breadcrumbWidth = breadcrumbRef.current.offsetWidth
      const lastItemWidth = lastItemRef.current.offsetWidth

      setIsTruncated(breadcrumbWidth < lastItemWidth)
    }
  }, [breadcumbList])

  return (
    <Flex sx={styles.breadcrumb} ref={breadcrumbRef}>
      {breadcumbList.map((item, idx) => (
        <>
          {item.type === 'category' ? (
            <Text
              ref={idx === breadcumbList.length - 1 ? lastItemRef : undefined}
              title={item.name}
              sx={styles.breadcrumbItem}
            >
              {item.name}
            </Text>
          ) : (
            <Link
              ref={idx === breadcumbList.length - 1 ? lastItemRef : undefined}
              sx={styles.breadcrumbItem}
              href={item.slug}
              title={item.name}
            >
              {item.name}
            </Link>
          )}
          {idx < breadcumbList.length - 1 && (
            <IconCaret direction="right" size={16} />
          )}
        </>
      ))}
    </Flex>
  )
}

export default Breadcrumb
