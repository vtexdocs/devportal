import { useEffect, useRef, useState } from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link'

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

interface SideBarSectionState {
  sectionSelected: DocumentationTitle | UpdatesTitle | ''
}

const Sidebar = ({ sectionSelected }: SideBarSectionState) => {
  const [activeSectionName, setActiveSectionName] = useState(sectionSelected)
  const [expandDelayStatus, setExpandDelayStatus] = useState(true)

  const sidebarDataMaster: SidebarSectionProps[] = [
    {
      documentation: 'API Guides',
      categories: [
        {
          name: 'Getting Started',
          slug: '',
          origin: '',
          type: 'markdown',
          childrens: [
            {
              name: 'Introduction',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Platform overview',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'List of REST APIs',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Authentication',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Making your first request',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'API Guides',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Catalog',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'How to activate an SKU',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'How to create a specification',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Update SKU',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Checkout',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Orders',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 3',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Promotions',
              slug: '',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Integration Guides',
          slug: '',
          origin: '',
          type: 'markdown',
          childrens: [
            {
              name: 'Back-office (ERP/PIM/WMS)',
              slug: '',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'item 1',
                  slug: '',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'External Marketplace',
              slug: '',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Marketplace / Seller architecture',
                  slug: '',
                  origin: '',
                  type: '',
                  childrens: [],
                },
                {
                  name: 'Store setup for VTEX Seller',
                  slug: '',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
            {
              name: 'External Seller',
              slug: '',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Gift Card',
              slug: '',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Item 1',
                  slug: '',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      documentation: 'API Reference',
      categories: [
        {
          name: 'Catalog API',
          slug: '',
          origin: '',
          type: 'openapi',
          childrens: [
            {
              name: 'SKU Service Value',
              slug: '',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'SKU Service Value',
                  slug: '',
                  origin: '',
                  type: 'openapi',
                  method: 'POST',
                  childrens: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: '',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  childrens: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: '',
                  origin: '',
                  type: 'openapi',
                  method: 'DELETE',
                  childrens: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Checkout API',
          slug: '',
          origin: '',
          type: 'openapi',
          childrens: [],
        },
      ],
    },
    {
      documentation: 'VTEX IO',
      categories: [],
    },
    {
      documentation: 'FastStore',
      categories: [],
    },
    {
      documentation: 'WebOps',
      categories: [],
    },
    {
      documentation: 'Release Notes',
      categories: [],
    },
    {
      documentation: 'Documentation Updates',
      categories: [],
    },
  ]

  useEffect(() => {
    setTimeout(() => setExpandDelayStatus(false), 5000)
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
          {...(sidebarDataMaster.find(
            (section) => section.documentation === activeSectionName
          ) as SidebarSectionProps)}
        />
      ) : null}
    </Flex>
  )
}

export default Sidebar
