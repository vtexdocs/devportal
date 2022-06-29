import { IconProps } from '@vtex/brand-ui'

import { ActionType } from 'components/last-updates-card/functions'
import { DocumentationTitle, UpdatesTitle, ResourceTitle } from './unionTypes'

export type IconComponent = (props: IconProps) => JSX.Element

export type DataElement = {
  link: string
  Icon: IconComponent
  description: string
}
export interface DocDataElement extends DataElement {
  title: DocumentationTitle
}
export interface UpdatesDataElement extends DataElement {
  title: UpdatesTitle
}

export type UpdateElement = {
  slug: string
  title: string
  createdAt: string
  hidden: boolean
  description: string
  actionType: ActionType
}

export type WhatsNextDataElement = {
  title: string
  description: string
  link: {
    title: string
    to: string
  }
}

export type ResourceDataElement = {
  title: ResourceTitle
  description: string
  link: string
}
