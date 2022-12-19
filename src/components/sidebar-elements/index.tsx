import { useRouter } from 'next/router'
import React, { Fragment, useContext } from 'react'
import { Box, Flex, Button, IconCaret } from '@vtex/brand-ui'

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
  pathPrefix?: string
  items: SidebarElement[]
  subItemLevel: number
}

const SidebarElements = ({ pathPrefix, items, subItemLevel }: SidebarProps) => {
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
    router.push(`/docs/${pathPrefix}${pathSuffix}`)
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

          <Box
            sx={textStyle(activeSidebarElement === slug, isExpandable)}
            onClick={(e: { preventDefault: () => void }) => {
              const pathSuffix = method
                ? `#${method.toLowerCase()}-${endpoint}`
                : `/${slug}`

              {
                ;(checkDocumentationType(slug, 'markdown') ||
                  checkDocumentationType(slug, 'openapi')) &&
                  handleClick(e, pathSuffix)
              }
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
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children }: SidebarElement) => {
    const isExpandable = children.length > 0
    const newPathPrefix = `${pathPrefix}${
      pathPrefix === 'api-reference' ? `/${slug}` : ''
    }`

    return isExpandable &&
      sidebarElementStatus.has(slug) &&
      sidebarElementStatus.get(slug) ? (
      <Box>
        <SidebarElements
          pathPrefix={newPathPrefix}
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
