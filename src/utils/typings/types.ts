import { IconProps } from '@vtex/brand-ui'
import { DocumentationTitle, UpdatesTitle } from './unionTypes'

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
