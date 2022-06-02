import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'

import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'

import { getMessages } from 'utils/get-messages'
import {
  getCommunityURL,
  getLearningCenterURL,
  getGithubURL,
  getHelpCenterURL,
  getSupportURL,
} from 'utils/get-url'

import {
  DocDataElement,
  UpdatesDataElement,
  ReleaseElement,
  ResourceDataElement,
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
    slug: 'secury-proxy-an-alternative-option',
    title: 'Secure Proxy: An alternative option for card payment integrations',
    createdAt: new Date('05/14/2022'),
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'removed',
  },
  {
    slug: 'update-on-search-resolver',
    title: 'Update on search-resolver@0.x API response',
    createdAt: new Date('03/30/2022'),
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'added',
  },
  {
    slug: 'new-payment-app-documentation',
    title: 'New Payment App documentation',
    createdAt: new Date('03/14/2022'),
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
  {
    slug: 'new-payment',
    title: 'New Payment',
    createdAt: new Date('03/14/2022'),
    hidden: true,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
  {
    slug: 'new-payment',
    title: 'New Payment',
    createdAt: new Date('09/14/2021'),
    hidden: true,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
  {
    slug: 'new-payment',
    title: 'New Payment',
    createdAt: new Date('03/14/2021'),
    hidden: true,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
]

export const resources: ResourceDataElement[] = [
  {
    title: 'Community',
    description: messages['vtex_io_page_other_resources_community.description'],
    link: getCommunityURL(),
  },
  {
    title: 'Learning Center',
    description:
      messages['vtex_io_page_other_resources_learning_center.description'],
    link: getLearningCenterURL(),
  },
  {
    title: 'GitHub',
    description: messages['vtex_io_page_other_resources_github.description'],
    link: getGithubURL(),
  },
  {
    title: 'Help Center',
    description:
      messages['vtex_io_page_other_resources_help_center.description'],
    link: getHelpCenterURL(),
  },
  {
    title: 'Support',
    description: messages['vtex_io_page_other_resources_support.description'],
    link: getSupportURL(),
  },
]
