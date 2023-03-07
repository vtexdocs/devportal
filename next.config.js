/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = {
  experimental: {
    largePageDataBytes: 500 * 1000,
    workerThreads: false,
    cpus: 4,
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 3600,
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  webpack: (config, options) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    config.module.rules.push({
      test: /\.pem/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'raw-loader',
        },
      ],
    })

    return config
  },
  env: {
    navigationJsonUrl: 'https://developers.vtex.com/navigation.json',
    contentOrg: '',
    contentRepo: '',
    contentBranch: '',
  },
  async redirects() {
    return [
      {
        source: '/vtex-rest-api/docs/:slug',
        destination: '/docs/guides/:slug',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs',
        destination: '/docs/guides',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/:slug',
        destination: '/docs/guides/:slug',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/v2.3/docs/:slug',
        destination: '/docs/guides/:slug',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs',
        destination: '/docs/guides',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/changelog/:slug',
        destination: '/updates/release-notes/:slug',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/changelog',
        destination: '/updates/release-notes',
        permanent: true,
      },
      {
        source: '/docs/api-guides/:slug*',
        destination: '/docs/guides/:slug*',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/reference/payment-provider-protocol-api-overview',
        destination: '/docs/guides/payment-provider-protocol-api-overview',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/:slug*',
        destination: '/docs/api-reference/:slug*',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/:slug*',
        destination: '/docs/api-reference/:slug*',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference',
        destination: '/docs/api-reference',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference',
        destination: '/docs/api-reference',
        permanent: true,
      },
      {
        source: '/docs/api-reference/orders#registerchange',
        destination:
          '/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/invoice',
        destination:
          '/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice',
        permanent: true,
      },
      {
        source: '/docs/api-reference/test-jsonata-expression',
        destination:
          '/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata',
        permanent: true,
      },
      {
        source: '/docs/erp-integration-set-up-order-processing',
        destination: '/docs/guides/erp-integration-set-up-order-processing',
        permanent: true,
      },
      {
        source: '/docs/api-reference/feed-v3',
        destination: '/docs/guides/orders-feed',
        permanent: true,
      },
      {
        source: '/docs/api-reference/checkout-api-overview',
        destination: '/docs/guides/checkout-overview',
        permanent: true,
      },
      {
        source: '/docs/api-reference/master-data-api-v2-overview',
        destination: '/docs/api-reference/master-data-api-v2#overview',
        permanent: true,
      },
      {
        source: '/docs/guides/feed-v3-1',
        destination: '/docs/guides/orders-feed',
        permanent: true,
      },
      {
        source:
          '/docs/guides/integrating-external-orders-via-api-to-be-used-with-vtex-tracking',
        destination: '/docs/guides/integrate-external-orders-vtex-tracking',
        permanent: true,
      },
      {
        source:
          '/docs/guides/creating-customizable-fields-in-the-cart-with-checkout-api-1',
        destination: '/docs/guides/customizable-fields-with-checkout-api',
        permanent: true,
      },
      {
        source:
          '/docs/guides/fetching-marketplace-payment-method-data-with-the-orders-api',
        destination: '/docs/guides/get-marketplace-data-orders-api',
        permanent: true,
      },
      {
        source:
          '/docs/guides/fetching-payment-data-from-a-mercado-libre-order-with-orders-api',
        destination: '/docs/guides/get-payment-data-mercado-libre-orders-api',
        permanent: true,
      },
      {
        source: '/docs/guides/orders-feed-guide',
        destination: '/docs/guides/orders-feed',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-google-tag-manager',
        destination: '/docs/guides/google-tag-manager',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-kitlook',
        destination: '/docs/guides/vtexbr-kitlook',
        permanent: true,
      },
      {
        source: '/docs/guides/carriers-1',
        destination: '/docs/guides/vtex-shipping-network',
        permanent: true,
      },
      {
        source: '/docs/guides/managing-application-logs',
        destination:
          '/docs/guides/vtex-io-documentation-managing-application-logs',
        permanent: true,
      },
      {
        source: '/docs/guides/external-marketplace-integration-order-logs',
        destination:
          '/docs/guides/external-marketplace-integration-collect-orders',
        permanent: true,
      },
      {
        source: '/docs/guides/migrating-storefront-from-legacy-to-io',
        destination:
          '/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io',
        permanent: true,
      },
      {
        source:
          '/docs/guides/setting-up-an-ab-test-with-master-data-v2-trigger',
        destination: '/docs/guides/trigger-ab-test',
        permanent: true,
      },
      {
        source: '/docs/guides/adaptations-and-limitations',
        destination:
          '/docs/guides/changes-and-limitations-pii-platform-version',
        permanent: true,
      },
      {
        source: '/docs/guides/data-privacy',
        destination: '/docs/guides/pii-platform-version',
        permanent: true,
      },
      {
        source: '/docs/guides/changes-and-limitations-pii-compliant-account',
        destination:
          '/docs/guides/changes-and-limitations-pii-platform-version',
        permanent: true,
      },
      {
        source: '/docs/guides/pii-compliant-accounts',
        destination: '/docs/guides/pii-platform-version',
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started-making-your-first-request',
        destination: '/docs/guides/making-your-first-request',
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started-authentication',
        destination: '/docs/guides/authentication-overview',
        permanent: true,
      },
      {
        source: '/docs/guides/create-a-category',
        destination: '/docs/guides/categories',
        permanent: true,
      },
      {
        source: '/docs/guides/create-a-brand',
        destination: '/docs/guides/brands',
        permanent: true,
      },
      {
        source: '/docs/guides/how-to-create-a-specification',
        destination: '/docs/guides/specifications',
        permanent: true,
      },
      {
        source: '/docs/guides/how-to-activate-an-sku',
        destination: '/docs/guides/skus',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-fulfillmentEndpoint-/pvt/orderForms/simulation',
        destination:
          '/docs/api-reference/marketplace-protocol-external-seller-fulfillment#post-/pvt/orderForms/simulation',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-fulfillmentEndpoint-/pvt/orders',
        destination:
          '/docs/api-reference/marketplace-protocol-external-seller-fulfillment#post-/pvt/orders',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-fulfillmentEndpoint-/pvt/orders/-sellerOrderId-/fulfill',
        destination:
          '/docs/api-reference/marketplace-protocol-external-seller-fulfillment#post-/pvt/orders/-sellerOrderId-/fulfill',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-fulfillmentEndpoint-/pvt/orders/-orderId-/cancel',
        destination:
          '/docs/api-reference/marketplace-protocol-external-seller-fulfillment#post-/pvt/orders/-orderId-/cancel',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-marketplaceServicesEndpoint-/pvt/orders/-marketplaceOrderId-/invoice',
        destination:
          '/docs/api-reference/marketplace-protocol#post-/pvt/orders/-marketplaceOrderId-/invoice',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-marketplaceServicesEndpoint-/pvt/orders/-marketplaceOrderId-/invoice/-invoiceNumber-',
        destination:
          '/docs/api-reference/marketplace-protocol#post-/pvt/orders/-marketplaceOrderId-/invoice/-invoiceNumber-',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-marketplaceServicesEndpoint-/pvt/orders/-marketplaceOrderId-/invoice/-invoiceNumber-/tracking',
        destination:
          '/docs/api-reference/marketplace-protocol#post-/pvt/orders/-marketplaceOrderId-/invoice/-invoiceNumber-/tracking',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-marketplaceServicesEndpoint-/pvt/orders/-marketplaceOrderId-/cancel',
        destination:
          '/docs/api-reference/marketplace-protocol#post-/pvt/orders/-marketplaceOrderId-/cancel',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-mapper#post-/api/mkp-category-mapper/connector/register',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/-id-',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-mapper#post-/api/mkp-category-mapper/categories/marketplace/-id-',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-accountName-.-environment-.com.br/api/fulfillment/pvt/orders',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-accountName-.-environment-.com.br/api/fulfillment/pvt/orders/-orderId-/fulfill',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders/-orderId-/fulfill',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-accountName-.vtexcommercestable.com.br/api/order-integration/orders',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/order-integration/orders',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/-accountName-.vtexcommercestable.com.br/api/order-integration/orders/status',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/order-integration/orders/status',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/marketplace-protocol#post-/api/checkout/pub/orderForms/simulation',
        destination:
          '/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/checkout/pub/orderForms/simulation',
        permanent: true,
      },
      {
        source:
          '/docs/guides/marketplace-api',
        destination:
          '/docs/api-reference/marketplace-apis',
        permanent: true,
      },

    ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = withPlaiceholder(nextConfig)
