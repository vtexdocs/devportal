import algoliasearch from 'algoliasearch/lite'
import { MultipleQueriesQuery } from '@algolia/client-search'

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
  WhatsNextDataElement,
  CodeSamplesElement,
  ResourceDataElement,
  AdminDataElement,
} from './typings/types'
import EditIcon from 'components/icons/edit-icon'
import MenuIcon from 'components/icons/menu-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ''
)

export const searchClient = {
  ...algoliaClient,
  search(requests: MultipleQueriesQuery[]) {
    if (requests.every(({ params }) => !params?.query)) return
    return algoliaClient.search(requests)
  },
}

export const messages = getMessages()

export const documentationData: DocDataElement[] = [
  {
    Icon: APIGuidesIcon,
    title: 'Guides',
    description: messages['documentation_api_guides.description'],
    link: '/docs/guides',
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

export const adminData: AdminDataElement[] = [
  {
    Icon: MenuIcon,
    title: 'Sidebar Editor',
    description: 'Test and validate your changes to the sidebar.',
    link: '/editor/sidebar',
  },
  {
    Icon: DocumentationUpdatesIcon,
    title: 'API Index Generator',
    description: 'Automatically generate API Reference overview pages.',
    link: '/editor/api-index',
  },
  {
    Icon: EditIcon,
    title: 'Markdown Preview',
    description: 'Preview the rendering of your markdown file in the portal.',
    link: '/editor/markdown-preview',
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

export const whatsNextData: WhatsNextDataElement[] = [
  {
    title: messages['app_development_page_new_to_app_development.title'],
    description:
      messages['app_development_page_new_to_app_development.description'],
    linkTitle: messages['app_development_page_new_to_app_development.link'],
    linkTo: '/docs/guides/vtex-io-getting-started',
  },
  {
    title: messages['app_development_page_solve_real_world_issues.title'],
    description:
      messages['app_development_page_solve_real_world_issues.description'],
    linkTitle: messages['app_development_page_solve_real_world_issues.link'],
    linkTo: '/docs/guides/app-development-guides',
  },
  {
    title: messages['app_development_page_build_foundations.title'],
    description: messages['app_development_page_build_foundations.description'],
    linkTitle: messages['app_development_page_build_foundations.link'],
    linkTo: '/docs/guides/concepts',
  },
  {
    title: messages['app_development_page_go_further.title'],
    description: messages['app_development_page_go_further.description'],
    linkTitle: messages['app_development_page_go_further.link'],
    linkTo:
      '/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store',
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

export const codeSamples: CodeSamplesElement[] = [
  {
    title: 'Admin app',
    description: 'Create an Admin app.',
    builders: ['admin', 'react'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: messages['app_development_page_new_to_app_development.link'],
    repoLink: 'https://github.com/vtex/admin-ui-example',
  },
  {
    title: 'Scripts app',
    description: 'DESCRIPTION',
    builders: ['scripts'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-running-io-scripts-in-non-io-vtex-stores#step-1-developing-your-app',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/app-scripts-example',
  },
  {
    title: 'Buyer Organization Supplier app',
    description: 'DESCRIPTION',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/buyer-org-supplier',
  },
  {
    title: 'Carrier Hubs',
    description:
      'Examples using vtex.carrier-notifier and vtex.carrier-tracking as builders',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/carrier-hubs-examples',
  },
  {
    title: 'Checkout UI Settings',
    description: 'DESC',
    builders: ['checkout-ui-custom'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/checkout-ui-settings',
  },
  {
    title: 'Delivery Theme',
    description: 'DESC',
    builders: ['store', 'styles'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/delivery-theme',
  },
  {
    title: 'Edition app',
    description: 'DESC',
    builders: ['edition'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/edition-hello',
  },
  {
    title: 'Events service',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/events-example',
  },
  {
    title: 'Payment app',
    description: 'DESC',
    builders: ['react', 'pages', 'messages'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/example-payment-authorization-app',
  },
  {
    title: 'GraphQL app',
    description: 'DESC',
    builders: ['node', 'graphql'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/graphql-example',
  },
  {
    title: 'Integration app',
    description: 'DESC',
    builders: ['react', 'messages', 'node', 'admin', 'graphql'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex/mkp-app-template',
  },
  {
    title: 'Orders Feed',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/orders-feed-example',
  },
  {
    title: 'Payment Provider Framework',
    description: 'DESC',
    builders: ['paymentProvider', 'node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/payment-provider-example',
  },
  {
    title: 'Pixel app',
    description: 'DESC',
    builders: ['react', 'store', 'pixel'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/pixel-app-template',
  },
  {
    title: 'React app',
    description: 'DESC',
    builders: ['react', 'messages'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/react-app-template',
  },
  {
    title: 'Search GraphQL Resolver',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/search-resolver',
  },
  {
    title: 'Store Theme Robots',
    description: 'DESC',
    builders: ['sitemap'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/store-theme-robots',
  },
  {
    title: 'Store theme',
    description: 'DESC',
    builders: ['styles', 'store', 'sitemap'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/store-theme',
  },
  {
    title: 'Store Block course template',
    description: 'DESC',
    builders: ['store', 'react', 'messages'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-trainings/store-block-template',
  },
  {
    title: 'Minimum Boilerplate Theme',
    description: 'DESC',
    builders: ['store', 'styles'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/minimum-boilerplate-theme',
  },
  {
    title: 'Service Worker',
    description: 'DESC',
    builders: ['service-worker'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/service-worker-example',
  },
  {
    title: 'Service',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/service-example',
  },
  {
    title: 'search-segment-resolver',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/search-segment-resolver',
  },
  {
    title: 'Search Resolver',
    description: 'DESC',
    builders: ['node'],
    linkTo: 'https://developers.vtex.com/',
    linkTitle: 'See guide',
    repoLink: 'https://github.com/vtex-apps/search-resolver',
  },
]
