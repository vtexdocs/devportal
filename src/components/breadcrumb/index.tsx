import { Link, Flex, IconCaret, Text } from '@vtex/brand-ui'
import { useRef } from 'react'

import styles from './styles'

interface Props {
  breadcumbList: { slug: string; name: string; type: string }[]
}

const Breadcrumb = ({ breadcumbList }: Props) => {
  const breadcrumbRef = useRef<HTMLDivElement>(null)
  const lastItemRef = useRef<HTMLDivElement>(null)

  return (
    <Flex sx={styles.breadcrumb} ref={breadcrumbRef}>
      {breadcumbList.map((item, idx) => (
        <div key={`breadcrumb-item-${item.slug}-${idx}`}>
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
        </div>
      ))}
    </Flex>
  )
}

export default Breadcrumb
