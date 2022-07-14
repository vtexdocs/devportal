import { useState } from 'react'
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

interface SideBarSectionState {
  sectionSelected: DocumentationTitle | UpdatesTitle | ''
}

const Sidebar = ({ sectionSelected }: SideBarSectionState) => {
  const [activeSectionName, setActiveSectionName] = useState(sectionSelected)

  const sidebarData: SidebarSectionProps[] = [
    {
      title: 'API Guides',
      data: [
        {
          title: 'Getting Started',
          url: '',
          subItems: [
            {
              title: 'Introduction',
              url: '',
              subItems: [
                {
                  title: 'Platform overview',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'List of REST APIs',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Authentication',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Making your first request',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'API Guides',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Item 2',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'Catalog',
              url: '',
              subItems: [
                {
                  title: 'How to activate an SKU',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'How to create a specification',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Update SKU',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'Checkout',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'Orders',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Item 2',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Item 3',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'Promotions',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Item 2',
                  url: '',
                  subItems: [],
                },
              ],
            },
          ],
        },
        {
          title: 'Integration Guides',
          url: '',
          subItems: [
            {
              title: 'Back-office (ERP/PIM/WMS)',
              url: '',
              subItems: [
                {
                  title: 'item 1',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'External Marketplace',
              url: '',
              subItems: [
                {
                  title: 'Marketplace / Seller architecture',
                  url: '',
                  subItems: [],
                },
                {
                  title: 'Store setup for VTEX Seller',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'External Seller',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
              ],
            },
            {
              title: 'Gift Card',
              url: '',
              subItems: [
                {
                  title: 'Item 1',
                  url: '',
                  subItems: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'API Reference',
      data: [],
    },
    {
      title: 'VTEX IO',
      data: [],
    },
    {
      title: 'FastStore',
      data: [],
    },
    {
      title: 'WebOps',
      data: [],
    },
    {
      title: 'Release Notes',
      data: [],
    },
    {
      title: 'Documentation Updates',
      data: [],
    },
  ]

  const SideBarIcon = (iconElement: DocDataElement | UpdatesDataElement) => {
    return (
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
            <Text sx={styles.iconTitle}>{iconElement.title}</Text>
          </Flex>
        </a>
      </Link>
    )
  }

  return (
    <Flex sx={styles.sidebar}>
      <Flex sx={styles.sidebarIcons}>
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
          {...(sidebarData.find(
            (section) => section.title === activeSectionName
          ) as SidebarSectionProps)}
        />
      ) : null}
    </Flex>
  )
}

export default Sidebar
