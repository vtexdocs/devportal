import React, { Fragment, useContext } from 'react'
import { Box, Flex, Button, Link, IconCaret } from '@vtex/brand-ui'

import { styleByLevelNormal, textStyle } from './functions'
import { SidebarContext } from 'utils/contexts/sidebar'
import styles from './styles'

export interface SidebarItemPropTypes {
  title: string
  url: string
  subItems: SidebarItemPropTypes[]
}

export interface SidebarProps {
  items: SidebarItemPropTypes[]
  firstActive?: number
  subItemLevel: number
}

const SidebarElements = ({ items, subItemLevel }: SidebarProps) => {
  const {
    activeSidebarElement,
    sidebarElementStatus,
    setActiveSidebarElement,
    toggleSidebarElementStatus,
    openSidebarElement,
  } = useContext(SidebarContext)

  const ItemRoot = ({ title, subItems }: SidebarItemPropTypes) => {
    const isExpandable = subItems.length > 0

    return (
      <Box sx={styles.elementContainer}>
        <Flex sx={styleByLevelNormal(subItemLevel, isExpandable || false)}>
          {isExpandable && (
            <Button
              size="regular"
              variant="tertiary"
              sx={
                sidebarElementStatus.has(title) &&
                sidebarElementStatus.get(title)
                  ? styles.arrowIconActive
                  : styles.arrowIcon
              }
              icon={() => (
                <IconCaret
                  direction={
                    sidebarElementStatus.has(title) &&
                    sidebarElementStatus.get(title)
                      ? 'down'
                      : 'right'
                  }
                  size={24}
                />
              )}
              onClick={() => toggleSidebarElementStatus(title)}
            />
          )}
          <Link
            sx={textStyle(activeSidebarElement === title, isExpandable)}
            target="_self"
            onClick={() => {
              openSidebarElement(title)
              setActiveSidebarElement(title)
            }}
          >
            {title}
          </Link>
        </Flex>
      </Box>
    )
  }

  const ItemChildren = ({ title, subItems }: SidebarItemPropTypes) => {
    const isExpandable = subItems.length > 0

    return isExpandable &&
      sidebarElementStatus.has(title) &&
      sidebarElementStatus.get(title) ? (
      <Box>
        <SidebarElements
          items={subItems}
          subItemLevel={subItemLevel + 1}
          key={`${title}sd`}
        />
      </Box>
    ) : null
  }

  return (
    <Box>
      {items?.map((item, index) => {
        const key = String(item.title) + String(index)

        return (
          <Fragment key={String(key)}>
            <ItemRoot {...item} />
            <Box>
              <ItemChildren {...item} />
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
