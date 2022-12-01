import { useEffect, useRef, useState, useContext } from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

import useNavigation from 'utils/hooks/useNavigation'
import jp from 'jsonpath'
import { SidebarContext } from 'utils/contexts/sidebar'

interface SideBarSectionState {
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const Sidebar = ({ sectionSelected }: SideBarSectionState) => {
  const [activeSectionName, setActiveSectionName] = useState('')
  const [expandDelayStatus, setExpandDelayStatus] = useState(true)
  const { setActiveSidebarElement, openSidebarElement } =
    useContext(SidebarContext)
  const sidebarDataMaster = useNavigation().data
  const { asPath } = useRouter()
  const slug = asPath.split('/')[3]

  const getSlugPath = () => {
    const findPath = jp.paths(
      sidebarDataMaster,
      `$..*[?(@.slug=='${slug}')]`
    )[0]
    let currentSidebar = sidebarDataMaster
    const arrayOfSlugs: string[] = []
    if (findPath?.length > 0) {
      findPath.forEach((el: string | number) => {
        if (typeof currentSidebar?.slug == 'string') {
          arrayOfSlugs.push(currentSidebar.slug)
        }
        if (el != '$') {
          currentSidebar = currentSidebar[el]
        }
      })
      return [arrayOfSlugs, sidebarDataMaster[findPath[1]].documentation]
    }
    return [[''], sectionSelected ? sectionSelected : '']
  }

  useEffect(() => {
    const timer = setTimeout(() => setExpandDelayStatus(false), 5000)
    const sectionName = getSlugPath()[1]
    setActiveSectionName(sectionName)
    getSlugPath()[0].forEach((slug: string) => {
      openSidebarElement(slug)
    })
    setActiveSidebarElement(slug)
    return () => {
      clearTimeout(timer)
    }
  }, [])

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
          <Link href={iconElement.link}>
            <a
              onClick={() => {
                setActiveSectionName(iconElement.title)
              }}
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
            </a>
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
