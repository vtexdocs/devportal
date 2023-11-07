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
    title: 'React app',
    description:
      'Create custom React-based apps for your Store Theme with internationalization support.',
    builders: ['react', 'messages'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io',
    category: 'Frontend',
    repoLink: 'https://github.com/vtex-apps/react-app-template',
  },
  {
    title: 'Service',
    description: 'Leverage Node.js to implement custom route handling logic.',
    builders: ['node'],
    linkTo:
      'https://learn.vtex.com/docs/course-calling-commerce-apis-step01introduction-lang-en',
    category: 'Backend',
    repoLink: 'https://github.com/vtex-apps/service-example',
  },
  {
    title: 'Pixel app',
    description:
      'Run scripts in your store website to integrate with third-party solutions and services.',
    builders: ['react', 'store', 'pixel'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps',
    category: 'Scripts',
    repoLink: 'https://github.com/vtex-apps/pixel-app-template',
  },
  {
    title: 'Scripts app',
    description:
      'Run VTEX IO scripts in Legacy CMS stores using a custom Scripts app.',
    builders: ['scripts'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-running-io-scripts-in-non-io-vtex-stores#step-1-developing-your-app',
    category: 'Scripts',
    repoLink: 'https://github.com/vtex-apps/app-scripts-example',
  },
  {
    title: 'Store Theme',
    description:
      'Jumpstart the development of Store Themes with this predefined template.',
    builders: ['styles', 'store', 'sitemap'],
    linkTo: 'https://developers.vtex.com/docs/guides/getting-started-3',
    category: 'Store Framework',
    repoLink: 'https://github.com/vtex-apps/store-theme',
  },
  {
    title: 'Minimum Store Theme',
    description:
      'Jumpstart the development of Store Themes with this minimum Store Theme.',
    builders: ['styles', 'store'],
    linkTo: 'https://learn.vtex.com/docs/course-basic-blocks-lang-en',
    category: 'Store Framework',
    repoLink: 'https://github.com/vtex-apps/minimum-boilerplate-theme',
  },
  {
    title: 'Store Theme robots',
    description: "Customize your cross-border store's robots.txt files.",
    builders: ['sitemap'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-robots-files-for-cross-border-stores',
    category: 'Store Framework',
    repoLink: 'https://github.com/vtex-apps/store-theme-robots',
  },
  {
    title: 'Edition App',
    description:
      'Streamline the setup of a group of VTEX accounts by creating your own Edition App.',
    builders: ['edition'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-configuring-an-edition-app',
    category: 'Edition App',
    repoLink: 'https://github.com/vtex-apps/edition-hello',
  },
  {
    title: 'Carrier Hubs - Tracking',
    description: 'Obtain tracking events from custom carriers.',
    builders: ['node', 'vtex.carrier-tracking'],
    linkTo: 'https://developers.vtex.com/docs/guides/tracking-1',
    category: 'Fulfillment',
    repoLink:
      'https://github.com/vtex-apps/carrier-hubs-examples/tree/main/carrier-tracking-example',
  },
  {
    title: 'Carrier Hubs - Notifier',
    description: 'Notify custom carriers about a dispatch order.',
    builders: ['node', 'vtex.carrier-notifier'],
    linkTo: 'https://developers.vtex.com/docs/guides/notification-1',
    category: 'Fulfillment',
    repoLink:
      'https://github.com/vtex-apps/carrier-hubs-examples/tree/main/carrier-notifier-example',
  },
  {
    title: 'Payment app',
    description:
      "Develop your own Payment app to provide an additional verification step in your store's checkout process.",
    builders: ['react', 'pages', 'messages'],
    linkTo:
      'https://developers.vtex.com/docs/guides/payments-integration-payment-app',
    category: 'Payments',
    repoLink: 'https://github.com/vtex-apps/example-payment-authorization-app',
  },
  {
    title: 'Payment Provider Framework',
    description: 'Integrate custom payment providers into your VTEX store.',
    builders: ['paymentProvider', 'node'],
    linkTo:
      'https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework',
    category: 'Payments',
    repoLink: 'https://github.com/vtex-apps/payment-provider-example',
  },
  // {
  //   title: 'Service Worker',
  //   description:
  //     'Offload network requests to a service worker for improved performance.',
  //   builders: ['service-worker'],
  //   repoLink: 'https://github.com/vtex-apps/service-worker-example',
  // },
  // {
  //   title: 'React app',
  //   description:
  //     'Create custom React and GraphQL-based apps for your Store Theme.',
  //   builders: ['store', 'react', 'messages'],
  //   linkTo: 'https://learn.vtex.com/docs/course-store-block-lang-en',
  //   linkTitle: 'See guide',
  //   repoLink: 'https://github.com/vtex-trainings/store-block-template',
  // },
  {
    title: 'Search Segment resolver',
    description:
      'Segment the search result page of your store to present custom search results for each of your shoppers.',
    builders: ['node'],
    linkTo:
      'https://developers.vtex.com/docs/guides/vtex-io-documentation-segmenting-the-search-result',
    category: 'Search',
    repoLink: 'https://github.com/vtex-apps/search-segment-resolver',
  },
  {
    title: 'Search GraphQL Resolver',
    description:
      'Extend VTEX search capabilities with external search providers.',
    builders: ['node'],
    linkTo:
      'https://developers.vtex.com/docs/guides/external-search-provider-recipe',
    category: 'Search',
    repoLink: 'https://github.com/vtex-apps/search-resolver',
  },
  {
    title: 'External Marketplace Integration app',
    description: 'Integrate with external marketplaces.',
    builders: ['react', 'messages', 'node', 'admin', 'graphql'],
    linkTo:
      'https://developers.vtex.com/docs/guides/external-marketplace-integration-app-template',
    category: 'Marketplace',
    repoLink: 'https://github.com/vtex/mkp-app-template',
  },
  {
    title: 'Orders Feed',
    description: 'Develop an app to handle status updates from OMS Feed.',
    builders: ['node'],
    linkTo:
      'https://developers.vtex.com/docs/guides/how-to-receive-order-notifications-on-vtex-io',
    category: 'Orders',
    repoLink: 'https://github.com/vtex-apps/orders-feed-example',
  },
  {
    title: 'Events service',
    description: 'Trigger events based on specific actions.',
    builders: ['node'],
    repoLink: 'https://github.com/vtex-apps/events-example',
    category: 'Backend',
  },

  {
    title: 'GraphQL app',
    description: 'Jumpstart the development of a GraphQL service.',
    builders: ['node', 'graphql'],
    repoLink: 'https://github.com/vtex-apps/graphql-example',
    category: 'Backend',
  },

  {
    title: 'Admin app',
    description:
      'Build a tailored frontend app for the VTEX Admin using React.',
    builders: ['admin', 'messages', 'react'],
    repoLink: 'https://github.com/vtex/admin-ui-example',
    category: 'Admin',
  },
  {
    title: 'Buyer Organization Supplier app',
    description:
      'Create an app to save custom data from a Buyer Organization to the Profile System.',
    builders: ['node'],
    repoLink: 'https://github.com/vtex-apps/buyer-org-supplier',
    category: 'B2B',
  },
  {
    title: 'Checkout UI Settings',
    description: "Customize the user interface of your store's Checkout.",
    builders: ['checkout-ui-custom'],
    repoLink: 'https://github.com/vtex-apps/checkout-ui-settings',
    category: 'Checkout',
  },
  // {
  //   title: 'Delivery Theme',
  //   description: 'DESC',
  //   builders: ['store', 'styles'],
  //   linkTo: 'https://developers.vtex.com/',
  //   repoLink: 'https://github.com/vtex-apps/delivery-theme',
  // },
]
