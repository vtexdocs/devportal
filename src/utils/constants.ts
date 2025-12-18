import {
  APIGuidesIcon,
  APIReferenceIcon,
  AppDevelopmentIcon,
  StorefrontDevelopmentIcon,
  VTEXIOAppsIcon,
  ReleaseNotesIcon,
  TroubleshootingIcon,
  DocumentationUpdatesIcon,
  EditIcon,
  MenuIcon,
} from '@vtexdocs/components'

import { getMessages } from 'utils/get-messages'
import {
  getCommunityURL,
  getLearningCenterURL,
  getGithubURL,
  getHelpCenterURL,
  getHelpCenterTroubleshootingURL,
  getSupportURL,
} from 'utils/get-url'

import {
  DocDataElement,
  UpdatesDataElement,
  WhatsNextDataElement,
  CodeSamplesElement,
  ResourceDataElement,
  AdminDataElement,
  ResourceDataTroubleshooting,
} from './typings/types'
import libraryConfig from './libraryConfig'

libraryConfig
export const messages = getMessages()

export const documentationData: DocDataElement[] = [
  {
    id: 'Guides',
    Icon: APIGuidesIcon,
    title: 'Guides',
    description: messages['documentation_api_guides.description'],
    link: '/docs/guides',
  },
  {
    id: 'API Reference',
    Icon: APIReferenceIcon,
    title: 'API Reference',
    description: messages['documentation_api_reference.description'],
    link: '/docs/api-reference',
  },
  {
    id: 'App Development',
    Icon: AppDevelopmentIcon,
    title: 'App Development',
    description: messages['documentation_app_development.description'],
    link: '/docs/app-development',
  },
  {
    id: 'Storefront Development',
    Icon: StorefrontDevelopmentIcon,
    title: 'Storefront Development',
    description: messages['documentation_storefront.description'],
    link: '/docs/storefront-development',
  },
  {
    id: 'VTEX IO Apps',
    Icon: VTEXIOAppsIcon,
    title: 'VTEX IO Apps',
    description: messages['documentation_vtexio_apps.description'],
    link: '/docs/vtex-io-apps',
  },
  {
    id: 'Troubleshooting',
    Icon: TroubleshootingIcon,
    title: 'Troubleshooting',
    description: messages['troubleshooting.description'],
    link: '/docs/troubleshooting',
  },
]

export const officialVendors = ['vtex', 'vtexarg', 'vtexventures', 'vtexus']

export const adminData: AdminDataElement[] = [
  {
    id: 'Sidebar Editor',
    Icon: MenuIcon,
    title: 'Sidebar Editor',
    description: 'Test and validate your changes to the sidebar.',
    link: '/editor/sidebar',
  },
  {
    id: 'API Index Generator',
    Icon: DocumentationUpdatesIcon,
    title: 'API Index Generator',
    description: 'Automatically generate API Reference overview pages.',
    link: '/editor/api-index',
  },
  {
    id: 'Markdown Preview',
    Icon: EditIcon,
    title: 'Markdown Preview',
    description: 'Preview the rendering of your markdown file in the portal.',
    link: '/editor/markdown-preview',
  },
]

export const updatesData: UpdatesDataElement[] = [
  {
    id: 'Release Notes',
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
    linkTo: '/docs/guides/vtex-io-documentation-manifest',
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

export const resourceTroubleshooting: ResourceDataTroubleshooting[] = [
  {
    title: 'Community',
    description:
      messages['app_development_page_other_resources_community.description'],
    link: getCommunityURL(),
  },
  {
    title: 'Help Center',
    description:
      messages['app_development_page_other_resources_help_center.description'],
    link: getHelpCenterTroubleshootingURL(),
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
      'Jumpstart the development of Store Themes with this minimum template.',
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
      "Provide an additional verification step in your store's checkout process.",
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
      'Segment the search result page to present custom results for each shopper.',
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
    description: 'Handle status updates from the Orders Feed.',
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
    title: 'Checkout UI Settings',
    description: "Customize the user interface of your store's Checkout.",
    builders: ['checkout-ui-custom'],
    repoLink: 'https://github.com/vtex-apps/checkout-ui-settings',
    category: 'Checkout',
  },
  {
    title: 'Buyer Organization Supplier app',
    description: 'Save custom data from a Buyer Organization to Master Data.',
    builders: ['node'],
    repoLink: 'https://github.com/vtex-apps/buyer-org-supplier',
    category: 'B2B',
  },
  // {
  //   title: 'Delivery Theme',
  //   description: 'DESC',
  //   builders: ['store', 'styles'],
  //   linkTo: 'https://developers.vtex.com/',
  //   repoLink: 'https://github.com/vtex-apps/delivery-theme',
  // },
]

export const openapiMappings: { [key: string]: string } = {
  'VTEX - Antifraud Provider API': 'antifraud-provider-protocol',
  'VTEX - Buying Policies API': 'buying-policies-api',
  'VTEX - Legacy CMS Portal API': 'legacy-cms-portal-api',
  'VTEX - Catalog API Seller Portal': 'catalog-api-seller-portal',
  'VTEX - Catalog API': 'catalog-api',
  'VTEX - Checkout API': 'checkout-api',
  'VTEX - Checkout Configuration API': 'checkout-configuration-api',
  'VTEX - Customer Credit API': 'customer-credit-api',
  'VTEX - Delivery Promise Notification API':
    'delivery-promise-notification-api',
  'VTEX - GiftCard Hub API': 'giftcard-hub-api',
  'VTEX - Giftcard API': 'giftcard-api',
  'VTEX - Giftcard Provider Protocol': 'giftcard-provider-protocol',
  'VTEX - Headless CMS API': 'headless-cms-api',
  'VTEX - Intelligent Search API': 'intelligent-search-api',
  'VTEX - License Manager API': 'license-manager-api',
  'VTEX - Logistics API': 'logistics-api',
  'VTEX - Marketplace APIs': 'marketplace-apis',
  'VTEX - Marketplace APIs - Suggestions': 'marketplace-apis-suggestions',
  'VTEX - Marketplace APIs - Sent Offers': 'marketplace-apis-offer-management',
  'VTEX - Marketplace Protocol - External Marketplace Mapper':
    'marketplace-protocol-external-marketplace-mapper',
  'VTEX - Marketplace Protocol - External Marketplace Orders':
    'marketplace-protocol-external-marketplace-orders',
  'VTEX - Marketplace Protocol - External Seller Fulfillment':
    'marketplace-protocol-external-seller-fulfillment',
  'VTEX - Marketplace Protocol - External Seller Marketplace':
    'marketplace-protocol',
  'VTEX - Master Data API - v2': 'master-data-api-v2',
  'VTEX - MasterData API - v10.2': 'masterdata-api',
  'VTEX - Message Center API': 'message-center-api',
  'VTEX - Operational Capacity API': 'operational-capacity-api',
  'VTEX - Orders API PII version': 'orders-api-pii-version',
  'VTEX - Orders API': 'orders-api',
  'VTEX - Payment Provider Protocol': 'payment-provider-protocol',
  'VTEX - Payments Gateway API': 'payments-gateway-api',
  'VTEX - Pick and Pack API': 'pick-and-pack-api',
  'VTEX - Pick and Pack Last Mile Protocol API': 'pick-and-pack-protocol-api',
  'VTEX - Pick and Pack Order Changes API': 'pick-and-pack-order-changes-api',
  'VTEX - Policies System API': 'policies-system-api',
  'VTEX - Pricing API': 'pricing-api',
  'VTEX - Pricing Hub': 'pricing-hub',
  'VTEX - Profile System': 'profile-system',
  'VTEX - Promotions & Taxes API': 'promotions-and-taxes-api',
  'VTEX - Reviews and Ratings API': 'reviews-and-ratings-api',
  'VTEX - SKU Bindings API': 'sku-bindings-api',
  'VTEX - Search API': 'search-api',
  'VTEX - Session Manager API': 'session-manager-api',
  'VTEX - Subscriptions API v3': 'subscriptions-api-v3',
  'VTEX - Tracking': 'tracking',
  'VTEX - VTEX Do API': 'vtex-do-api',
  'VTEX - VTEX ID API': 'vtex-id-api',
  'VTEX - VTEX Shipping Network API': 'vtex-shipping-network-api',
  'VTEX - Promotions & Taxes API - v2': 'promotions-and-taxes-api-v2',
  'VTEX - Intelligent Search Events API - Headless':
    'intelligent-search-events-api-headless',
  'VTEX - Data Subject Rights': 'data-subject-rights-api',
  'VTEX - Buyer Organizations': 'buyer-organizations',
  'VTEX - Audience API': 'audience-api',
  'VTEX - SSL Certificates API': 'ssl-certificates-api',
  'VTEX - Punchout API': 'punchout-api',
  'VTEX - mTLS API': 'mtls-api',
  'VTEX - Ads API': 'vtex-ads-api',
  'VTEX - Storefront Permissions API': 'storefront-permissions-api',
  'VTEX - Recommendations BFF API': 'recommendations-bff-api',
  'VTEX - Organization Units API': 'organization-units-api',
  'VTEX - Card Token Vault API': 'card-token-vault-api',
  'VTEX - Budgets API': 'budgets-api',
}
