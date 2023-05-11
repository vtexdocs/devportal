import { useEffect, useRef, useState, useContext } from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  flattenJSON,
  getKeyByEndpoint,
  getParents,
} from 'utils/navigation-utils'

import styles from './styles'
import type { SidebarSectionProps } from 'components/sidebar-section'
import type { DocDataElement, UpdatesDataElement } from 'utils/typings/types'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import {
  documentationData as docsIcons,
  updatesData as notesIcons,
} from 'utils/constants'

import SidebarSection from 'components/sidebar-section'
import Tooltip from 'components/tooltip'
import { iconTooltipStyle } from './functions'

import { SidebarContext } from 'utils/contexts/sidebar'
import useNavigation from 'utils/hooks/useNavigation'

interface SideBarSectionState {
  parentsArray?: string[]
}

const Sidebar = ({ parentsArray = [] }: SideBarSectionState) => {
  const [expandDelayStatus, setExpandDelayStatus] = useState(true)

  const {
    activeSectionName,
    setActiveSectionName,
    activeSidebarElement,
    sidebarDataMaster,
    setSidebarDataMaster,
    setActiveSidebarElement,
    openSidebarElement,
    closeSidebarElements,
    isEditorPreview,
  } = useContext(SidebarContext)

  const sidebarNavigation = useNavigation().data

  useEffect(() => {
    if (!isEditorPreview) setSidebarDataMaster(sidebarNavigation)
  }, [sidebarNavigation])

  const router = useRouter()
  const flattenedSidebar = flattenJSON(sidebarNavigation)
  let activeSlug = ''
  const querySlug = router.query.slug
  if (querySlug && router.pathname === '/docs/api-reference/[...slug]') {
    activeSlug = router.asPath.replace('/docs/api-reference/', '')
    const docPath = activeSlug.split('/')
    const apiSlug = docPath[0].split('#')[0]
    const endpoint = '/' + docPath.splice(1, docPath.length).join('/')
    let keyPath
    if (endpoint == '/') {
      activeSlug = apiSlug
      keyPath = getKeyByEndpoint(flattenedSidebar, '', apiSlug)
    } else {
      const method = docPath[0].split('#')[1].split('-')[0]
      keyPath = getKeyByEndpoint(flattenedSidebar, endpoint, apiSlug, method)
    }
    parentsArray.push(activeSlug)
    if (keyPath) {
      getParents(keyPath, 'slug', flattenedSidebar, parentsArray)
    }
  } else {
    activeSlug = parentsArray[parentsArray.length - 1]
  }

  useEffect(() => {
    const timer = setTimeout(() => setExpandDelayStatus(false), 5000)
    closeSidebarElements(parentsArray)
    parentsArray.forEach((slug: string) => {
      openSidebarElement(slug)
    })
    setActiveSidebarElement(activeSlug)
    return () => {
      clearTimeout(timer)
    }
  }, [activeSidebarElement, router])

  const SideBarIcon = (iconElement: DocDataElement | UpdatesDataElement) => {
    const [iconTooltip, setIconTooltip] = useState(false)
    const [tooltipLabel, setTooltipLabel] = useState(iconElement.title)
    const titleRef = useRef<HTMLElement>()

    useEffect(() => {
      const resizeObserver = new MutationObserver(function (entries) {
        const target = entries[0].target as HTMLElement
        if (target.offsetWidth < target.scrollWidth) setIconTooltip(true)
        else setIconTooltip(false)

        if (target.offsetWidth > 0)
          setTooltipLabel(target.innerText as DocumentationTitle | UpdatesTitle)
      })
      if (titleRef.current) {
        if (titleRef.current.offsetWidth < titleRef.current.scrollWidth)
          setIconTooltip(true)
        resizeObserver.observe(titleRef.current, {
          childList: true,
        })
      }
      return () => {
        resizeObserver.disconnect
      }
    }, [titleRef.current])

    return (
      <Box sx={styles.linkContainer}>
        <Tooltip
          sx={iconTooltipStyle(iconTooltip)}
          placement="right"
          label={tooltipLabel}
        >
          <Link
            href={!isEditorPreview ? iconElement.link : '/'}
            onClick={(e) => {
              if (isEditorPreview) {
                e.preventDefault()
              }
              setActiveSectionName(iconElement.title)
            }}
            passHref
            aria-label={iconElement.title}
          >
            <Flex
              sx={
                activeSectionName === iconElement.title
                  ? styles.iconBoxActive
                  : styles.iconBox
              }
            >
              <iconElement.Icon
                sx={
                  activeSectionName === iconElement.title
                    ? styles.iconActive
                    : styles.icon
                }
              />
              <Text
                className={expandDelayStatus ? 'iconDescriptionExpanded' : ''}
                ref={titleRef}
                sx={styles.iconTitle}
              >
                {iconElement.title}
              </Text>
            </Flex>
          </Link>
        </Tooltip>
      </Box>
    )
  }

  return (
    <Flex sx={styles.sidebar}>
      <Flex
        className={expandDelayStatus ? 'iconContainerExpanded' : ''}
        sx={styles.sidebarIcons}
      >
        <Flex sx={styles.sidebarIconsContainer}>
          {docsIcons.map((docsIconElement) => (
            <SideBarIcon
              {...docsIconElement}
              key={`sidebar-icon-${docsIconElement.title}`}
            />
          ))}
        </Flex>
        <Box sx={styles.sectionDivider}>
          <hr />
        </Box>
        <Flex sx={styles.sidebarIconsContainer}>
          {notesIcons.map((notesIconElement) => (
            <SideBarIcon
              {...notesIconElement}
              key={`sidebar-icon-${notesIconElement.title}`}
            />
          ))}
        </Flex>
      </Flex>
      {activeSectionName ? (
        <SidebarSection
          {...(Array.isArray(sidebarDataMaster)
            ? sidebarDataMaster?.find(
                (section: SidebarSectionProps) =>
                  section.documentation === activeSectionName
              )
            : null)}
        />
      ) : null}
    </Flex>
  )
}

export default Sidebar
