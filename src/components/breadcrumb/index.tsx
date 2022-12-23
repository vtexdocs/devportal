import { Link, Flex, IconCaret, Text } from '@vtex/brand-ui'

import styles from './styles'

interface Props {
  breadcumbList: { slug: string; name: string; type: string }[]
}

const Breadcrumb = ({ breadcumbList }: Props) => {
  return (
    <Flex sx={styles.breadcrumb}>
      {breadcumbList.map((item, idx) =>
        item.type === 'category' ? (
          <>
            <Text>{item.name}</Text>
            {idx < breadcumbList.length - 1 ? (
              <IconCaret direction="right" sx={styles.caret} />
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            <Link sx={styles.breadcrumbItem} href={item.slug}>
              {item.name}
            </Link>
            {idx < breadcumbList.length - 1 ? (
              <IconCaret direction="right" sx={styles.caret} />
            ) : (
              ''
            )}
          </>
        )
      )}
    </Flex>
  )
}

export default Breadcrumb
