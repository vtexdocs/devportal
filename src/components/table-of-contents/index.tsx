import Link from 'next/link'
import { useContext } from 'react'
import { Box, Text } from '@vtex/brand-ui'
import AnimateHeight from 'react-animate-height'

import { APIGuideContext } from 'utils/contexts/api-guide'

import styles from './styles'

interface SubItem {
  title: string
  slug: string
}

export interface Item extends SubItem {
  children: SubItem[]
}

const TableOfContents = () => {
  const { headings, activeItem, setActiveItem, setOnThisPageOpenStatus } =
    useContext(APIGuideContext)

  const Item = ({
    title,
    slug,
    level,
    active,
  }: {
    title: string
    slug: string
    level: number
    active: boolean
  }) => {
    return (
      <Link
        href={`#${slug}`}
        onClick={() => {
          setOnThisPageOpenStatus(false)
          setActiveItem(({ item }) => ({
            item: level === 1 ? slug : item,
            subItem: level === 1 ? '' : slug,
          }))
        }}
      >
        <Text sx={styles.item(level, active)}>{title}</Text>
      </Link>
    )
  }

  return (
    <Box sx={styles.itemsContainer}>
      {headings.map((item) => (
        <Box key={item.slug}>
          <Item
            title={item.title}
            slug={item.slug}
            level={1}
            active={item.slug === activeItem.item}
          />
          <AnimateHeight
            duration={300}
            height={item.slug === activeItem.item ? 'auto' : 0}
          >
            <Box sx={styles.subItemsContainer}>
              {item.children.map((subItem) => (
                <Item
                  key={subItem.slug}
                  title={subItem.title}
                  slug={subItem.slug}
                  level={2}
                  active={subItem.slug === activeItem.subItem}
                />
              ))}
            </Box>
          </AnimateHeight>
        </Box>
      ))}
    </Box>
  )
}

export default TableOfContents
