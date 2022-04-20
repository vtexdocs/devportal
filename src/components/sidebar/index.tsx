import { useState } from 'react'
import { Flex } from '@vtex/brand-ui'

import styles from './styles'
import type { SidebarSectionProps } from 'components/sidebar-section'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import type { DocDataElement, UpdatesDataElement } from 'pages/search'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import SidebarSection from 'components/sidebar-section'
import Link from 'next/link'

interface SideBarSectionState {
  sectionSelected: DocumentationTitle | UpdatesTitle | ''
}

const SideBar = ({ sectionSelected }: SideBarSectionState) => {
  const [activeSectionName, setActiveSectionName] = useState(sectionSelected)

  const docsIcons: DocDataElement[] = [
    {
      Icon: APIGuidesIcon,
      title: 'API Guides',
      link: '/docs/api-guides',
    },
    {
      Icon: APIReferenceIcon,
      title: 'API Reference',
      link: '/docs/api-reference',
    },
    {
      Icon: VTEXIOIcon,
      title: 'VTEX IO',
      link: '/docs/vtex-io',
    },
    {
      Icon: FastStoreIcon,
      title: 'FastStore',
      link: '/docs/fast-store',
    },
    {
      Icon: WebOpsIcon,
      title: 'WebOps',
      link: '/docs/webops',
    },
  ]

  const notesIcons: UpdatesDataElement[] = [
    {
      Icon: ReleaseNotesIcon,
      title: 'Release Notes',
      link: '/',
    },
    {
      Icon: DocumentationUpdatesIcon,
      title: 'Documentation Updates',
      link: '/',
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
          {docsIcons.map((docsIconElement, index) => (
            <Link href={docsIconElement.link}>
              <a
                onClick={() => {
                  setActiveSectionName(docsIconElement.title)
                }}
              >
                <Flex
                  key={`${docsIconElement.title}${index}`}
                  sx={
                    activeSectionName === docsIconElement.title
                      ? styles.iconBoxActive
                      : styles.iconBox
                  }
                >
                  <docsIconElement.Icon
                    sx={
                      activeSectionName === docsIconElement.title
                        ? styles.iconActive
                        : styles.icon
                    }
                  />
                </Flex>
              </a>
            </Link>
          ))}
        </Flex>
        <Flex sx={styles.sidebarIconsContainer}>
          {notesIcons.map((notesIconElement, index) => (
            <Flex
              key={`${notesIconElement.title}${index}`}
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

export default SideBar
