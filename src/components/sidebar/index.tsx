import { useState } from 'react'
import { Flex } from '@vtex/brand-ui'

import styles from './styles'
import type { SideBarSection } from 'components/sidebar-section'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import SidebarSection from 'components/sidebar-section'

const Sidebar = () => {
  const [sideBarDataIndex, setSideBarDataIndex] = useState(0)

  const icons = [
    {
      Icon: APIGuidesIcon,
    },
    {
      Icon: APIReferenceIcon,
    },
    {
      Icon: VTEXIOIcon,
    },
    {
      Icon: FastStoreIcon,
    },
    {
      Icon: WebOpsIcon,
    },
  ]

  const sidebarData: SideBarSection[] = [
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
          {icons.map((iconsElement, index) => (
            <Flex
              sx={
                sideBarDataIndex === index
                  ? styles.iconBoxActive
                  : styles.iconBox
              }
              onClick={() => {
                setSideBarDataIndex(index)
              }}
            >
              <iconsElement.Icon
                sx={
                  sideBarDataIndex === index ? styles.iconActive : styles.icon
                }
              />
            </Flex>
          ))}
        </Flex>
        <Flex sx={styles.sidebarIconsContainer}>
          <Flex
            sx={sideBarDataIndex === 5 ? styles.iconBoxActive : styles.iconBox}
            onClick={() => {
              setSideBarDataIndex(5)
            }}
          >
            <ReleaseNotesIcon
              sx={sideBarDataIndex === 5 ? styles.iconActive : styles.icon}
            />
          </Flex>
          <Flex
            sx={sideBarDataIndex === 6 ? styles.iconBoxActive : styles.iconBox}
            onClick={() => {
              setSideBarDataIndex(6)
            }}
          >
            <DocumentationUpdatesIcon
              sx={sideBarDataIndex === 6 ? styles.iconActive : styles.icon}
            />
          </Flex>
        </Flex>
      </Flex>
      <SidebarSection
        title={sidebarData[sideBarDataIndex].title}
        data={sidebarData[sideBarDataIndex].data}
      />
    </Flex>
  )
}

export default Sidebar
