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
          slug: 'Getting-Started',
          origin: '',
          type: 'markdown',
          children: [
            {
              name: 'Introduction',
              slug: 'Introduction',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'Platform overview',
                  slug: 'Platform-overview',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'List of REST APIs',
                  slug: 'List-of-REST-APIs',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Authentication',
                  slug: 'Authentication',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Making your first request',
                  slug: 'Making-your-first-request',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'API Guides',
              slug: 'API-Guides',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'Catalog',
              slug: 'Catalog',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'How to activate an SKU',
                  slug: 'How-to-activate-an-SKU',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'How to create a specification',
                  slug: 'How-to-create-a-specification',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Update SKU',
                  slug: 'Update-SKU',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'Checkout',
              slug: 'Checkout',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'Orders',
              slug: 'Orders',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Item 3',
                  slug: 'Item-3',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'Promotions',
              slug: 'Promotions',
              origin: '',
              type: 'markdown',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Integration Guides',
          slug: 'Integration-Guides',
          origin: '',
          type: 'markdown',
          children: [
            {
              name: 'Back-office (ERP/PIM/WMS)',
              slug: 'Back-office-(ERP/PIM/WMS)',
              origin: '',
              type: '',
              children: [
                {
                  name: 'item 1',
                  slug: 'item-1',
                  origin: '',
                  type: 'markdown',
                  children: [],
                },
              ],
            },
            {
              name: 'External Marketplace',
              slug: 'External-Marketplace',
              origin: '',
              type: '',
              children: [
                {
                  name: 'Marketplace / Seller architecture',
                  slug: 'Marketplace-/-Seller architecture',
                  origin: '',
                  type: '',
                  children: [],
                },
                {
                  name: 'Store setup for VTEX Seller',
                  slug: 'Store-setup-for-VTEX-Seller',
                  origin: '',
                  type: '',
                  children: [],
                },
              ],
            },
            {
              name: 'External Seller',
              slug: 'External-Seller',
              origin: '',
              type: '',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: '',
                  children: [],
                },
              ],
            },
            {
              name: 'Gift Card',
              slug: 'Gift-Card',
              origin: '',
              type: '',
              children: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: '',
                  children: [],
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
          slug: 'Catalog-API',
          origin: '',
          type: 'openapi',
          children: [
            {
              name: 'SKU Service Value',
              slug: 'SKU-Service-Value',
              origin: '',
              type: '',
              children: [
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-post',
                  origin: '',
                  type: 'openapi',
                  method: 'POST',
                  children: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  children: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-delete',
                  origin: '',
                  type: 'openapi',
                  method: 'DELETE',
                  children: [],
                },
              ],
            },
            {
              name: 'teste',
              slug: 'teste',
              origin: '',
              type: '',
              children: [
                {
                  name: 'testezinho',
                  slug: 'testezinho',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Checkout API',
          slug: 'Checkout-API',
          origin: '',
          type: 'openapi',
          children: [
            {
              name: 'Configuration',
              slug: 'Configuration',
              origin: '',
              type: '',
              children: [
                {
                  name: 'orderForm configuration',
                  slug: 'orderForm-configuration-get',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  children: [],
                },
                {
                  name: 'orderForm configuration',
                  slug: 'orderForm-configuration-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  children: [],
                },
                {
                  name: 'window to change seller',
                  slug: 'window-to-change-seller-get',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  children: [],
                },
                {
                  name: 'window to change seller',
                  slug: 'window-to-change-seller-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  children: [],
                },
              ],
            },
          ],
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
    const timer = setTimeout(() => setExpandDelayStatus(false), 5000)

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
          {...(sidebarDataMaster.find(
            (section) => section.documentation === activeSectionName
          ) as SidebarSectionProps)}
        />
      ) : null}
    </Flex>
  )
}

export default Sidebar
