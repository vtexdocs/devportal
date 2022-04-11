import { useState } from 'react'
import { Flex } from '@vtex/brand-ui'

import styles from './styles'
import type { SidebarSectionProps } from 'components/sidebar-section'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import SidebarSection from 'components/sidebar-section'

const Sidebar = () => {
  const [activeSectionName, setActiveSectionName] = useState('API Guides')

  const docsIcons = [
    {
      Icon: APIGuidesIcon,
      title: 'API Guides',
    },
    {
      Icon: APIReferenceIcon,
      title: 'API Reference',
    },
    {
      Icon: VTEXIOIcon,
      title: 'VTEX IO',
    },
    {
      Icon: FastStoreIcon,
      title: 'FastStore',
    },
    {
      Icon: WebOpsIcon,
      title: 'WebOps',
    },
  ]

  const notesIcons = [
    {
      Icon: ReleaseNotesIcon,
      title: 'Release Notes',
    },
    {
      Icon: DocumentationUpdatesIcon,
      title: 'Documentation Updates',
    },
  ]

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

  return (
    <Flex sx={styles.sidebar}>
      <Flex sx={styles.sidebarIcons}>
        <Flex sx={styles.sidebarIconsContainer}>
          {docsIcons.map((docsIconElement) => (
            <Flex
              sx={
                activeSectionName === docsIconElement.title
                  ? styles.iconBoxActive
                  : styles.iconBox
              }
              onClick={() => {
                setActiveSectionName(docsIconElement.title)
              }}
            >
              <docsIconElement.Icon
                sx={
                  activeSectionName === docsIconElement.title
                    ? styles.iconActive
                    : styles.icon
                }
              />
            </Flex>
          ))}
        </Flex>
        <Flex sx={styles.sidebarIconsContainer}>
          {notesIcons.map((notesIconElement) => (
            <Flex
              sx={
                activeSectionName === notesIconElement.title
                  ? styles.iconBoxActive
                  : styles.iconBox
              }
              onClick={() => {
                setActiveSectionName(notesIconElement.title)
              }}
            >
              <notesIconElement.Icon
                sx={
                  activeSectionName === notesIconElement.title
                    ? styles.iconActive
                    : styles.icon
                }
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <SidebarSection
        {...(sidebarData.find(
          (section) => section.title === activeSectionName
        ) as SidebarSectionProps)}
      />
    </Flex>
  )
}

export default Sidebar
