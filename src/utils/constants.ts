import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'

import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'

import { getMessages } from 'utils/get-messages'
import { DocDataElement, UpdatesDataElement } from './typings/types'

export const messages = getMessages()

export const documentationData: DocDataElement[] = [
  {
    Icon: APIGuidesIcon,
    title: 'API Guides',
    description: messages['landing_page_documentation_api_guides.description'],
    link: '/docs/api-guides',
  },
  {
    Icon: APIReferenceIcon,
    title: 'API Reference',
    description:
      messages['landing_page_documentation_api_reference.description'],
    link: '/docs/api-reference',
  },
  {
    Icon: VTEXIOIcon,
    title: 'VTEX IO',
    description: messages['landing_page_documentation_vtex_io.description'],
    link: '/docs/vtex-io',
  },
  {
    Icon: FastStoreIcon,
    title: 'FastStore',
    description: messages['landing_page_documentation_fast_store.description'],
    link: '/docs/fast-store',
  },
  {
    Icon: WebOpsIcon,
    title: 'WebOps',
    description: messages['landing_page_documentation_webops.description'],
    link: '/docs/webops',
  },
]

export const updatesData: UpdatesDataElement[] = [
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

export const getIcon = (doc: string) => {
  return (
    documentationData.find((icon) => icon.title === doc)?.Icon ||
    updatesData.find((icon) => icon.title === doc)?.Icon
  )
}
