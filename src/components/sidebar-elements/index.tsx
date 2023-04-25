import { useRouter } from 'next/router'
import React, { Fragment, useContext } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  IconCaret,
  IconExternalLink,
} from '@vtex/brand-ui'

import { SidebarContext } from 'utils/contexts/sidebar'
import { MethodType } from 'utils/typings/unionTypes'

import MethodCategory from 'components/method-category'

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
    sidebarDataMaster,
  } = useContext(SidebarContext)
  const { isEditorPreview } = useContext(SidebarContext)
  const router = useRouter()

  const handleClick = (
    e: { preventDefault: () => void },
    pathSuffix: string,
    slug: string
  ) => {
    e.preventDefault()
    router.push(getHref(slugPrefix || '', pathSuffix, slug))
  }

  // eslint-disable-next-line
  // @ts-ignore
  const checkDocumentationType = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sidebarData: any,
    slug: string,
    type: string
  ) => {
    if (
      !sidebarData ||
      (typeof sidebarData !== 'object' && !Array.isArray(sidebarData))
    ) {
      return false
    } else if (sidebarData?.slug == slug && sidebarData?.type == type) {
      return true
    } else if (Array.isArray(sidebarData)) {
      for (let i = 0; i < sidebarData.length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = checkDocumentationType(sidebarData[i], slug, type)
        if (result) {
          return result
        }
      }
    } else {
      for (const k in sidebarData) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = checkDocumentationType(sidebarData[k], slug, type)
        if (result) {
          return result
        }
      }
    }

    return false
  }

  const getHref = (slugPrefix: string, pathSuffix: string, slug: string) => {
    const href =
      slugPrefix === 'docs/api-reference'
        ? `/${slugPrefix}/${slug}/${pathSuffix}`
        : `/${slugPrefix}/${slug}`
    return href.replaceAll('//', '/')
  }

  const ElementRoot = ({
    slug,
    name,
    method,
    endpoint,
    children,
  }: SidebarElement) => {
    const isExpandable = children.length > 0
    const pathSuffix = method ? `#${method.toLowerCase()}-${endpoint}` : ''
    const activeItem = method ? `${slug}${pathSuffix}` : slug
    return (
      <Flex sx={styleByLevelNormal(subItemLevel, isExpandable || false)}>
        {isExpandable && (
          <Button
            aria-label={
              sidebarElementStatus.has(slug) && sidebarElementStatus.get(slug)
                ? 'Collapse category'
                : 'Expand category'
            }
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
        {!checkDocumentationType(sidebarDataMaster, slug, 'category') &&
        !checkDocumentationType(sidebarDataMaster, slug, 'link') ? (
          <Link
            sx={textStyle(activeSidebarElement === activeItem, isExpandable)}
            onClick={(e: { preventDefault: () => void }) => {
              if (!isEditorPreview) {
                handleClick(e, pathSuffix, slug)
              }
              toggleSidebarElementStatus(activeItem)
            }}
            href={getHref(slugPrefix || '', pathSuffix, slug)}
            target={isEditorPreview === true ? '_blank' : '_self'}
          >
            {method && (
              <MethodCategory
                sx={styles.methodBox}
                active={activeSidebarElement === activeItem}
                origin="sidebar"
                method={method}
              />
            )}
            {name}
          </Link>
        ) : checkDocumentationType(sidebarDataMaster, slug, 'link') ? (
          <Link href={slug} target="_blank" sx={styles.elementText}>
            <IconExternalLink size={16} sx={{ marginRight: '10px' }} />
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
    )
  }

  const isExpandable = ({ slug, children }: SidebarElement) => {
    const hasChildren = children.length > 0
    return (
      hasChildren &&
      sidebarElementStatus.has(slug) &&
      sidebarElementStatus.get(slug)
    )
  }

  const ElementChildren = ({ slug, children }: SidebarElement) => {
    return (
      <SidebarElements
        slugPrefix={slugPrefix}
        items={children}
        subItemLevel={subItemLevel + 1}
        key={`${slug}sd`}
      />
    )
  }

  return (
    <Box className="sidebar-component">
      {items?.map((item, index) => {
        const key = String(item.slug) + String(index)
        const slug = `${item.slug}`

        return (
          <Fragment key={String(key)}>
            <ElementRoot {...item} slug={slug} />
            {isExpandable({ ...item }) && (
              <ElementChildren {...item} slug={slug} />
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

export default SidebarElements
