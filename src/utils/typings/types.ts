import { NextPage } from 'next'
import { IconProps } from '@vtex/brand-ui'

import type {
  ContributorsType,
  Item,
  TroubleshootingItem,
  WhatsNextDataElement,
} from '@vtexdocs/components'

import { ActionType } from 'components/last-updates-card/functions'
import {
  DocumentationTitle,
  UpdatesTitle,
  ResourceTitle,
  AdminTitle,
  ResourceTitleTroubleshooting,
} from './unionTypes'
import { ReactNode } from 'react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'

// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}, IP = P> = NextPage<P, IP> & {
  sidebarfallback?: any //eslint-disable-line
  hideSidebar?: boolean
  isPreview?: boolean
  isEditor?: boolean
}

export type IconComponent = (props: IconProps) => JSX.Element

export type DataElement = {
  link: string
  Icon: IconComponent
  description: string
}
export interface DocDataElement extends DataElement {
  id: string
  title: DocumentationTitle
}
export interface UpdatesDataElement extends DataElement {
  id: string
  title: UpdatesTitle
}
export interface AdminDataElement extends DataElement {
  id: string
  title: AdminTitle
}

export type UpdateElement = {
  slug: string
  title: string
  createdAt: string
  hidden: boolean
  description: string
  actionType: ActionType
  excerpt?: string
  type?: ActionType
  tags?: string[]
}
export type { TroubleshootingItem, WhatsNextDataElement }
export interface TroubleshootingCardsElements extends TroubleshootingItem {
  createdAt?: string
  linkTitle: string
}

export type CodeSamplesElement = {
  title: string
  description: string
  builders: string[]
  category: string
  linkTo?: string
  repoLink: string
}

export type ResourceDataElement = {
  title: ResourceTitle
  description: string
  link: string
}

export type ResourceDataTroubleshooting = {
  title: ResourceTitleTroubleshooting
  description: string
  link: string
}

export type SelectOption = {
  id: string
  label: string
}

export type SeeAlsoDoc = {
  url: string
  title: string
  category: string
}

export interface MarkDownProps {
  slug: string
  branch: string
  serialized: MDXRemoteSerializeResult
  contributors: ContributorsType[]
  headingList: Item[]
  seeAlsoData: SeeAlsoDoc[]
  pagination: {
    previousDoc: {
      slug: string | null
      name: string | null
      createdAt?: string | null
    }
    nextDoc: {
      slug: string | null
      name: string | null
      createdAt?: string | null
    }
  }
  breadcumbList: { slug: string; name: string; type: string }[]
  sectionSelected: string
  filePath: string
  hideTOC: boolean
  mdxProps?: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
  isListed: boolean
  hidden?: boolean
}

export interface ArticleRenderProps extends MarkDownProps {
  children?: ReactNode
  showReadingTime?: boolean
  showAskAIMenu?: boolean
  showAuthor?: boolean
  showContributors?: boolean
  showFeedbackSection?: boolean
  showSuggestEdits?: boolean
  showArticlePagination?: boolean
  showTableOfContents?: boolean
  showDateText?: boolean
  showCreatedAt?: boolean
  createdAtFormat?: 'long' | 'published'
}
