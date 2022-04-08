import React, { Fragment, useContext } from 'react'
import { Box, Flex, Button, Tooltip, Link, IconCaret } from '@vtex/brand-ui'

import { styleByLevelNormal, textStyle } from './functions'
import { Context } from 'utils/contexts/context'
import styles from './styles'

export interface SideBarItemPropTypes {
  title: string
  url: string
  subItems?: SideBarItemPropTypes[]
}

export interface SideBarProps {
  items: SideBarItemPropTypes[]
  firstActive?: number
  subItemLevel: number
}

const SideBarElements = ({ items, subItemLevel }: SideBarProps) => {
  const { appState, arrowState, toggleActive, toggleArrow } =
    useContext(Context)

  const ItemRoot = ({ title, url, subItems }: SideBarItemPropTypes) => {
    const isExpandable = subItems && subItems.length > 0

    return (
      <Flex>
        {isExpandable && (
          <Button
            size="regular"
            variant="tertiary"
            sx={
              arrowState.has(title) && arrowState.get(title)?.open
                ? styles.arrowIconActive
                : styles.arrowIcon
            }
            icon={() => (
              <IconCaret
                direction={
                  arrowState.has(title) && arrowState.get(title)?.open
                    ? 'down'
                    : 'right'
                }
                size={24}
              />
            )}
          />
        )}
        <Button
          size="regular"
          variant="tertiary"
          sx={styles.elementButton}
          onClick={() => {
            toggleActive(title, subItemLevel)
          }}
        >
          <Link
            target="_self"
            sx={textStyle(appState.has(title), isExpandable || false)}
            href={url}
          >
            {title}
          </Link>
        </Button>
      </Flex>
    )
  }

  const ItemDisabled = ({ title, url, subItems }: SideBarItemPropTypes) => {
    const isExpandable = subItems && subItems.length > 0

    return (
      <Flex sx={styleByLevelNormal(subItemLevel, isExpandable || false)}>
        <Flex>
          {isExpandable && (
            <Button
              size="regular"
              variant="tertiary"
              sx={
                arrowState.has(title) && arrowState.get(title)?.open
                  ? styles.arrowIconActive
                  : styles.arrowIcon
              }
              icon={() => (
                <IconCaret
                  direction={
                    arrowState.has(title) && arrowState.get(title)?.open
                      ? 'down'
                      : 'right'
                  }
                  size={24}
                />
              )}
              onClick={() => {
                arrowState.has(title)
                  ? toggleArrow(
                      title,
                      !arrowState.get(title)?.open,
                      subItemLevel
                    )
                  : toggleArrow(title, true, subItemLevel)
              }}
            />
          )}
          <Tooltip label="teste" placement="right">
            <Button size="regular" variant="tertiary" sx={styles.elementButton}>
              <Link
                sx={textStyle(appState.has(title), isExpandable || false)}
                target="_self"
                href={url}
              >
                {title}
              </Link>
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    )
  }

  const ItemChildren = ({ title, subItems }: SideBarItemPropTypes) => {
    const isExpandable = subItems && subItems.length > 0

    return isExpandable &&
      arrowState.has(title) &&
      arrowState.get(title)?.open ? (
      <Box>
        <SideBarElements
          items={subItems!}
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
            {!item.url ? (
              <>
                <ItemDisabled {...item} />
                {item.subItems ? (
                  <Box>
                    <ItemChildren {...item} />
                  </Box>
                ) : null}
              </>
            ) : (
              <>
                <ItemRoot {...item} />
                <Box>
                  <ItemChildren {...item} />
                </Box>
              </>
            )}
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

export default SideBarElements
