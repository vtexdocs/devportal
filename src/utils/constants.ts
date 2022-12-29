import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import AppDevelopmentIcon from 'components/icons/app-development-icon'
import StorefrontDevelopmentIcon from 'components/icons/storefront-development-icon'
import VTEXIOAppsIcon from 'components/icons/vtex-io-apps-icon'

import ReleaseNotesIcon from 'components/icons/release-notes-icon'

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
  UpdateElement,
  WhatsNextDataElement,
  ResourceDataElement,
} from './typings/types'

export const messages = getMessages()

export const documentationData: DocDataElement[] = [
  {
    Icon: APIGuidesIcon,
    title: 'API Guides',
    description: messages['documentation_api_guides.description'],
    link: '/docs/api-guides',
  },
  {
    Icon: APIReferenceIcon,
    title: 'API Reference',
    description: messages['documentation_api_reference.description'],
    link: '/docs/api-reference',
  },
  {
    Icon: AppDevelopmentIcon,
    title: 'App Development',
    description: messages['documentation_app_development.description'],
    link: '/docs/app-development',
  },
  {
    Icon: StorefrontDevelopmentIcon,
    title: 'Storefront Development',
    description: messages['documentation_storefront.description'],
    link: '/docs/storefront-development',
  },
  {
    Icon: VTEXIOAppsIcon,
    title: 'VTEX IO Apps',
    description: messages['documentation_vtexio_apps.description'],
    link: '/docs/vtex-io-apps',
  },
]

export const updatesData: UpdatesDataElement[] = [
  {
    Icon: ReleaseNotesIcon,
    title: 'Release Notes',
    description: messages['updates_release_notes.description'],
    link: '/updates/release-notes',
  },
]

export const getIcon = (doc: string) => {
  return (
    documentationData.find((icon) => icon.title === doc)?.Icon ||
    updatesData.find((icon) => icon.title === doc)?.Icon
  )
}

export const releaseData: UpdateElement[] = [
  {
    slug: 'last-weel-test',
    title:
      'If it has been less than a week since the creation of the release note, the date description should inform the number of days elapsed',
    createdAt: '2022-07-23T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'added',
  },
  {
    slug: 'secury-proxy-an-alternative-option',
    title: 'Secure Proxy: An alternative option for card payment integrations',
    createdAt: '2022-05-14T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'removed',
  },
  {
    slug: 'update-on-search-resolver',
    title: 'Update on search-resolver@0.x API response',
    createdAt: '2022-04-30T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'added',
  },
  {
    slug: 'new-payment-app-documentation',
    title: 'New Payment App documentation',
    createdAt: '2022-03-14T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
  {
    slug: 'new-payment',
    title: 'New Payment',
    createdAt: '2022-03-14T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'removed',
  },
  {
    slug: 'google-tag-manager',
    title: 'Google Tag Manager',
    createdAt: '2022-03-14T18:43:15.322Z',
    hidden: true,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'fixed',
  },
  {
    slug: 'google-analitcs',
    title: 'Google Analytics',
    createdAt: '2021-03-14T18:43:15.322Z',
    hidden: false,
    description:
      'To persist campaign data throughout a user session and avoid providing inconsistent campaign data to Google Analytics, you must add the variable OriginalLocation to your Google Tag Manager (GTM) container and configure your store’s Google Analytics tags.',
    actionType: 'improved',
  },
]

export const whatsNextData: WhatsNextDataElement[] = [
  {
    title: messages['app_development_page_new_to_app_development.title'],
    description:
      messages['app_development_page_new_to_app_development.description'],
    link: {
      title: messages['app_development_page_new_to_app_development.link'],
      to: '/',
    },
  },
  {
    title: messages['app_development_page_solve_real_world_issues.title'],
    description:
      messages['app_development_page_solve_real_world_issues.description'],
    link: {
      title: messages['app_development_page_solve_real_world_issues.link'],
      to: '/',
    },
  },
  {
    title: messages['app_development_page_build_foundations.title'],
    description: messages['app_development_page_build_foundations.description'],
    link: {
      title: messages['app_development_page_build_foundations.link'],
      to: '/',
    },
  },
  {
    title: messages['app_development_page_go_further.title'],
    description: messages['app_development_page_go_further.description'],
    link: {
      title: messages['app_development_page_go_further.link'],
      to: '/',
    },
  },
]

export const resources: ResourceDataElement[] = [
  {
    title: 'Community',
    description:
      messages['app_development_page_other_resources_community.description'],
    link: getCommunityURL(),
  },
  {
    title: 'Learning Center',
    description:
      messages[
        'app_development_page_other_resources_learning_center.description'
      ],
    link: getLearningCenterURL(),
  },
  {
    title: 'GitHub',
    description:
      messages['app_development_page_other_resources_github.description'],
    link: getGithubURL(),
  },
  {
    title: 'Help Center',
    description:
      messages['app_development_page_other_resources_help_center.description'],
    link: getHelpCenterURL(),
  },
  {
    title: 'Support',
    description:
      messages['app_development_page_other_resources_support.description'],
    link: getSupportURL(),
  },
]
