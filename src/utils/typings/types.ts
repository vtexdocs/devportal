import { NextPage } from 'next'
import { IconProps } from '@vtex/brand-ui'

import { ActionType } from 'components/last-updates-card/functions'
import {
  DocumentationTitle,
  UpdatesTitle,
  ResourceTitle,
  AdminTitle,
  ResourceTitleTroubleshooting,
} from './unionTypes'

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
  createdAt?: string
  hidden?: boolean
  description?: string
  excerpt?: string
  type?: ActionType
  actionType?: ActionType
  tags?: string[]
}
export type TroubleshootingItem = {
  slug: string
  title: string
  description: string
  tags?: string[]
}
export interface TroubleshootingCardsElements extends TroubleshootingItem {
  createdAt?: string
  linkTitle: string
}

export type WhatsNextDataElement = {
  title: string
  description: string
  linkTitle: string
  linkTo: string
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
