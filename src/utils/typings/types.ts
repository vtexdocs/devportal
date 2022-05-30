import { IconProps } from '@vtex/brand-ui'

import { ActionType } from 'components/last-updates-card/functions'
import { DocumentationTitle, UpdatesTitle, ResourceTitle } from './unionTypes'

export type IconComponent = (props: IconProps) => JSX.Element

export type DocDataElement = {
  Icon: IconComponent
  description: string
  title: DocumentationTitle
  link: string
}

export type UpdatesDataElement = {
  Icon: IconComponent
  title: UpdatesTitle
  link: string
}

export type ReleaseElement = {
  title: string
  date: Date
  description: string
  actionType: ActionType
}

export type ResourceDataElement = {
  title: ResourceTitle
  description: string
  link: string
}
