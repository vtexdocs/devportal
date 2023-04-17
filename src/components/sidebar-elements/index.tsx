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

import { styleByLevelNormal, textStyle } from './functions'
import styles from './styles'

export interface SidebarElement {
  name: string
  slug: string
  origin: string
  type: string
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

  const handleClick = (e: { preventDefault: () => void }, slug: string) => {
    e.preventDefault()
    router.push(getHref(slugPrefix || '', slug))
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

  const getHref = (slugPrefix: string, slug: string) => {
    const href = `/${slugPrefix}/${slug}`
    return href.replaceAll('//', '/')
  }

  const ElementRoot = ({ slug, name, children }: SidebarElement) => {
    const locale = useRouter().locale ? useRouter().locale : 'en'
    const localizedName: string =
      typeof name === 'string' ? name : name[`${locale}`]
    const isExpandable = children.length > 0
    const activeItem = slug
    return (
      <Box sx={styles.elementContainer}>
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
                  handleClick(e, slug)
                }
                toggleSidebarElementStatus(activeItem)
              }}
              href={getHref(slugPrefix || '', slug)}
              target={isEditorPreview === true ? '_blank' : '_self'}
            >
              {localizedName}
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
              {localizedName}
            </Box>
          )}
        </Flex>
      </Box>
    )
  }

  const ElementChildren = ({ slug, children }: SidebarElement) => {
    const isExpandable = children.length > 0
    // const newPathPrefix =
    //   slugPrefix === 'api-reference' ? `/api-reference/${slug}` : slugPrefix
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
    <Box className="sidebar-component">
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
