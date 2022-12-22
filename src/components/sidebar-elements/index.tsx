import { useRouter } from 'next/router'
import React, { Fragment, useContext } from 'react'
import { Box, Flex, Link, Button, IconCaret } from '@vtex/brand-ui'

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
  endpoint?: string
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

  const handleClick = (
    e: { preventDefault: () => void },
    pathSuffix: string
  ) => {
    e.preventDefault()
    router.push(`/docs/${slugPrefix}${pathSuffix}`)
  }

  const checkDocumentationType = (slug: string, type: string) => {
    return (
      jp.query(sidebarDataMaster, `$..*[?(@.slug=="${slug}")].type`)[0] == type
    )
  }

  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children,
  }: SidebarElement) => {
    const isExpandable = children.length > 0
    const pathSuffix = method
      ? `#${method.toLowerCase()}-${endpoint}`
      : `/${slug}`
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
          {!checkDocumentationType(slug, 'category') ? (
            <Link
              sx={textStyle(activeSidebarElement === slug, isExpandable)}
              onClick={(e: { preventDefault: () => void }) => {
                handleClick(e, pathSuffix)
                toggleSidebarElementStatus(slug)
              }}
              href={
                'api-reference'
                  ? `/docs/${slugPrefix}/${pathSuffix}`
                  : `/docs/${slugPrefix}/${slug}`
              }
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
            <Box
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
            </Box>
          )}
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children }: SidebarElement) => {
    const isExpandable = children.length > 0
    const newPathPrefix =
      slugPrefix === 'api-reference' ? `/api-reference/${slug}` : slugPrefix
    return isExpandable &&
      sidebarElementStatus.has(slug) &&
      sidebarElementStatus.get(slug) ? (
      <Box>
        <SidebarElements
          slugPrefix={newPathPrefix}
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
