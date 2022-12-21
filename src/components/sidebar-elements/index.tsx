import React, { Fragment, useContext } from 'react'
import { Box, Flex, Button, Link, IconCaret } from '@vtex/brand-ui'
import { useRouter } from 'next/router'
import { SidebarContext } from 'utils/contexts/sidebar'
import { MethodType } from 'utils/typings/unionTypes'
import MethodCategory from 'components/method-category'
import jp from 'jsonpath'
import useNavigation from 'utils/hooks/useNavigation'

import { styleByLevelNormal, textStyle } from './functions'
import styles from './styles'

export interface SidebarElement {
  name: string
  slug: string
  origin: string
  type: string
  method?: MethodType
  children: SidebarElement[]
}

export interface SidebarProps {
  slugPrefix?: string
  items: SidebarElement[]
  subItemLevel: number
}

const SidebarElements = ({ slugPrefix, items, subItemLevel }: SidebarProps) => {
  const {
    activeSidebarElement,
    sidebarElementStatus,
    toggleSidebarElementStatus,
  } = useContext(SidebarContext)

  const router = useRouter()
  const sidebarDataMaster = useNavigation().data

  const handleClick = (e: { preventDefault: () => void }, path: string) => {
    e.preventDefault()
    router.push(`/docs/${slugPrefix}/${path}`)
  }

  const isMarkdown = (slug: string) => {
    const boolMarkdown: boolean =
      jp.query(sidebarDataMaster, `$..*[?(@.slug=="${slug}")].type`)[0] ==
      'markdown'
        ? true
        : false
    return boolMarkdown
  }

  const ElementRoot = ({ slug, name, method, children }: SidebarElement) => {
    const isExpandable = children.length > 0
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
          {isMarkdown(slug) ? (
            <Link
              sx={textStyle(activeSidebarElement === slug, isExpandable)}
              onClick={(e: { preventDefault: () => void }) => {
                handleClick(e, slug)
                toggleSidebarElementStatus(slug)
              }}
              href={`/docs/${slugPrefix}/${slug}`}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={activeSidebarElement === slug}
                  origin="sidebar"
                  method={method}
                />
              )}
              {name}
            </Link>
          ) : (
            <Link
              sx={textStyle(activeSidebarElement === slug, isExpandable)}
              onClick={() => {
                toggleSidebarElementStatus(slug)
              }}
            >
              {method && (
                <MethodCategory
                  sx={styles.methodBox}
                  active={activeSidebarElement === slug}
                  origin="sidebar"
                  method={method}
                />
              )}
              {name}
            </Link>
          )}
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children }: SidebarElement) => {
    const isExpandable = children.length > 0

    return isExpandable &&
      sidebarElementStatus.has(slug) &&
      sidebarElementStatus.get(slug) ? (
      <Box>
        <SidebarElements
          slugPrefix={slugPrefix}
          items={children}
          subItemLevel={subItemLevel + 1}
          key={`${slug}sd`}
        />
      </Box>
    ) : null
  }

  return (
    <Box>
      {items?.map((item, index) => {
        const key = String(item.slug) + String(index)
        const slug = `${item.slug}`

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
