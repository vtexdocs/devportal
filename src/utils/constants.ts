import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'

import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'

import { getMessages } from 'utils/get-messages'
import {
  DocDataElement,
  UpdatesDataElement,
  ReleaseElement,
} from './typings/types'

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
    link: '/updates/release-notes',
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

export const releaseData: ReleaseElement[] = [
  {
    title: 'Secure Proxy: An alternative option for card payment integrations',
    date: new Date('05/14/2022'),
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'removed',
  },
  {
    title: 'Update on search-resolver@0.x API response',
    date: new Date('03/30/2022'),
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'added',
  },
  {
    title: 'New Payment App documentation',
    date: new Date('03/14/2022'),
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
]
