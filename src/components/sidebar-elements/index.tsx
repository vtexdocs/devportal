import React, { Fragment, useContext } from 'react'
import { Box, Flex, Button, Link, IconCaret } from '@vtex/brand-ui'

import { SidebarContext } from 'utils/contexts/sidebar'

import { styleByLevelNormal, textStyle } from './functions'
import styles from './styles'

export interface SidebarElement {
  title: string
  url: string
  subItems: SidebarElement[]
}

export interface SidebarProps {
  slugPrefix?: string
  items: SidebarElement[]
  subItemLevel: number
}

interface SidebarElementProps extends SidebarElement {
  slug: string
}

const SidebarElements = ({ slugPrefix, items, subItemLevel }: SidebarProps) => {
  const {
    activeSidebarElement,
    sidebarElementStatus,
    setActiveSidebarElement,
    toggleSidebarElementStatus,
    openSidebarElement,
  } = useContext(SidebarContext)

  const ElementRoot = ({ slug, title, subItems }: SidebarElementProps) => {
    const isExpandable = subItems.length > 0

    return (
      <Box sx={styles.elementContainer}>
        <Flex sx={styleByLevelNormal(subItemLevel, isExpandable || false)}>
          {isExpandable && (
            <Button
              size="regular"
              variant="tertiary"
              sx={
                sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug)
                  ? styles.arrowIconActive
                  : styles.arrowIcon
              }
              icon={() => (
                <IconCaret
                  direction={
                    sidebarElementStatus.has(slug) &&
                    sidebarElementStatus.get(slug)
                      ? 'down'
                      : 'right'
                  }
                  size={24}
                />
              )}
              onClick={() => toggleSidebarElementStatus(slug)}
            />
          )}
          <Link
            sx={textStyle(activeSidebarElement === slug, isExpandable)}
            target="_self"
            onClick={() => {
              openSidebarElement(slug)
              setActiveSidebarElement(slug)
            }}
          >
            {title}
          </Link>
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, subItems }: SidebarElementProps) => {
    const isExpandable = subItems.length > 0

    return isExpandable &&
      sidebarElementStatus.has(slug) &&
      sidebarElementStatus.get(slug) ? (
      <Box>
        <SidebarElements
          slugPrefix={slug}
          items={subItems}
          subItemLevel={subItemLevel + 1}
          key={`${slug}sd`}
        />
      </Box>
    ) : null
  }

  return (
    <Box>
      {items?.map((item, index) => {
        const key = String(item.title) + String(index)
        const slug = `${slugPrefix || ''}${item.title}`

        return (
          <Fragment key={String(key)}>
            <ElementRoot {...item} slug={slug} />
            <Box>
              <ElementChildren {...item} slug={slug} />
            </Box>
            {subItemLevel == 0 ? (
              <Box sx={styles.sectionDivider}>
                <hr />
              </Box>
            ) : null}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default SidebarElements
