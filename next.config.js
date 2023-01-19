/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = {
  experimental: {
    largePageDataBytes: 500 * 1000,
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
        source: '/docs',
        destination: '/vtex-developer-docs/docs',
        permanent: true,
      },
      {
        source: '/changelog/(S*)',
        destination: '/vtex-developer-docs/changelog/$1',
        permanent: true,
      },
      {
        source: '/changelog',
        destination: '/vtex-developer-docs/changelog',
        permanent: true,
      },
      {
        source: '/learning',
        destination: 'https://learn.vtex.com',
        permanent: true,
      },
      {
        source: '/learning/(S*)',
        destination: 'https://learn.vtex.com/$1',
        permanent: true,
      },
      {
        source: '/reference/(S*)',
        destination: '/vtex-rest-api/reference/$1',
        permanent: true,
      },
      {
        source: '/reference',
        destination: '/vtex-rest-api/reference',
        permanent: true,
      },
      {
        source: '/reference-link/(S*)',
        destination: '/vtex-rest-api/reference-link/$1',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/(S*)',
        destination: '/vtex-rest-api/reference/$1',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/(S*)#(S*)',
        destination: '/vtex-rest-api/reference/$1#$2',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/getting-started',
        destination: '/vtex-rest-api/docs/getting-started',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/getting-started-platform-overview',
        destination: '/vtex-rest-api/docs/getting-started-platform-overview',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/getting-started-list-of-rest-apis',
        destination: '/vtex-rest-api/docs/getting-started-list-of-rest-apis',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/getting-started-authentication',
        destination: '/vtex-rest-api/docs/getting-started-authentication',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/getting-started-making-your-first-request',
        destination:
          '/vtex-rest-api/docs/getting-started-making-your-first-request',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/api-guides',
        destination: '/vtex-rest-api/docs/api-guides',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/fetching-payment-data-from-a-mercado-libre-order-with-orders-api',
        destination:
          '/vtex-rest-api/docs/fetching-payment-data-from-a-mercado-libre-order-with-orders-api',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/setting-up-dkim-for-transactional-emails',
        destination:
          '/vtex-rest-api/docs/setting-up-dkim-for-transactional-emails',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/subscriptions-v3-migration-guide',
        destination: '/vtex-rest-api/docs/subscriptions-v3-migration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/checkout-api',
        destination: '/vtex-rest-api/docs/checkout-api',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/using-checkout-api-to-set-a-discount',
        destination: '/vtex-rest-api/docs/using-checkout-api-to-set-a-discount',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/creating-customizable-fields-in-the-cart-with-checkout-api',
        destination:
          '/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/api-guides-1',
        destination: '/vtex-rest-api/docs/api-guides-1',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/how-to-create-a-specification',
        destination: '/vtex-rest-api/docs/how-to-create-a-specification',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/updating-sku-specifications-with-catalog-api',
        destination:
          '/vtex-rest-api/docs/updating-sku-specifications-with-catalog-api',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/erp-integration-guide',
        destination: '/vtex-rest-api/docs/erp-integration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/erp-integration-set-up-catalog',
        destination: '/vtex-rest-api/docs/erp-integration-set-up-catalog',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/erp-integration-import-products',
        destination: '/vtex-rest-api/docs/erp-integration-import-products',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/erp-integration-import-prices',
        destination: '/vtex-rest-api/docs/erp-integration-import-prices',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/erp-integration-import-inventory',
        destination: '/vtex-rest-api/docs/erp-integration-import-inventory',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/erp-integration-set-up-order-integration',
        destination:
          '/vtex-rest-api/docs/erp-integration-set-up-order-integration',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/erp-integration-set-up-order-processing',
        destination:
          '/vtex-rest-api/docs/erp-integration-set-up-order-processing',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/erp-integration-updating-and-deleting-information',
        destination:
          '/vtex-rest-api/docs/erp-integration-updating-and-deleting-information',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/faq-erp-integration',
        destination: '/vtex-rest-api/docs/faq-erp-integration',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-marketplace-integration-guide',
        destination:
          '/vtex-rest-api/docs/external-marketplace-integration-guide',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-marketplace-integration-architecture',
        destination:
          '/vtex-rest-api/docs/external-marketplace-integration-architecture',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-marketplace-integration-vtex-seller-setup',
        destination:
          '/vtex-rest-api/docs/external-marketplace-integration-vtex-seller-setup',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/external-seller-integration-guide',
        destination: '/vtex-rest-api/docs/external-seller-integration-guide',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-seller-integration-architecture',
        destination:
          '/vtex-rest-api/docs/external-seller-integration-architecture',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-seller-integration-vtex-marketplace-setup',
        destination:
          '/vtex-rest-api/docs/external-seller-integration-vtex-marketplace-setup',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-seller-integration-connector',
        destination:
          '/vtex-rest-api/docs/external-seller-integration-connector',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-seller-integration-vtex-marketplace-operation',
        destination:
          '/vtex-rest-api/docs/external-seller-integration-vtex-marketplace-operation',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/gift-card-integration-guide',
        destination: '/vtex-rest-api/docs/gift-card-integration-guide',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/gift-card-integration-guide-system-architecture',
        destination:
          '/vtex-rest-api/docs/gift-card-integration-guide-system-architecture',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/login-integration-guide',
        destination: '/vtex-rest-api/docs/login-integration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/login-integration-guide-admin-saml2',
        destination: '/vtex-rest-api/docs/login-integration-guide-admin-saml2',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/login-integration-guide-webstore-oauth2',
        destination:
          '/vtex-rest-api/docs/login-integration-guide-webstore-oauth2',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/payment-provider-integration-guide',
        destination: '/vtex-rest-api/docs/payment-provider-integration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/payment-provider-protocol',
        destination: '/vtex-rest-api/docs/payment-provider-protocol',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/pci-dss-compliance',
        destination: '/vtex-rest-api/docs/pci-dss-compliance',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/payment-methods',
        destination: '/vtex-rest-api/docs/payment-methods',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/pix-instant-payments-in-brazil',
        destination: '/vtex-rest-api/docs/pix-instant-payments-in-brazil',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/purchase-flows',
        destination: '/vtex-rest-api/docs/purchase-flows',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/implementing-a-payment-provider',
        destination: '/vtex-rest-api/docs/implementing-a-payment-provider',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/payment-provider-homologation',
        destination: '/vtex-rest-api/docs/payment-provider-homologation',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/search-integration-guide',
        destination: '/vtex-rest-api/docs/search-integration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/external-search-provider-overview',
        destination: '/vtex-rest-api/docs/external-search-provider-overview',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/external-search-provider-specification',
        destination:
          '/vtex-rest-api/docs/external-search-provider-specification',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/external-search-provider-recipe',
        destination: '/vtex-rest-api/docs/external-search-provider-recipe',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/external-search-provider-reference',
        destination: '/vtex-rest-api/docs/external-search-provider-reference',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/tax-service-integration-guide',
        destination: '/vtex-rest-api/docs/tax-service-integration-guide',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/tax-services-overview',
        destination: '/vtex-rest-api/docs/tax-services-overview',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/tax-services-specification',
        destination: '/vtex-rest-api/docs/tax-services-specification',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/tax-services-recipe',
        destination: '/vtex-rest-api/docs/tax-services-recipe',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/tax-services-reference-implementation',
        destination:
          '/vtex-rest-api/docs/tax-services-reference-implementation',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/sales-rep-code',
        destination: '/vtex-rest-api/docs/sales-rep-code',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/sent-offers-integration-guide-connectors',
        destination:
          '/vtex-rest-api/docs/sent-offers-integration-guide-connectors',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/creating-and-managing-coupons-with-promotions-api',
        destination:
          '/vtex-rest-api/docs/creating-and-managing-coupons-with-promotions-api',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/white-label-sellers-selection-algorithm',
        destination:
          'https://help.vtex.com/en/tutorial/white-label-sellers-selection-algorithm--3MemNQ4pKkWCpMdzI27AHa',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/pix-instant-payments-in-brazil',
        destination:
          '/vtex-rest-api/docs/payments-integration-pix-instant-payments-in-brazil',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/payment-provider-protocol',
        destination:
          '/vtex-rest-api/docs/payments-integration-payment-provider-protocol',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/carriers',
        destination: '/vtex-rest-api/reference/freight-values',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/order-hook',
        destination: '/vtex-rest-api/reference/order-hook-1',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/order-hook',
        destination: '/vtex-rest-api/reference/order-hook-1',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/vtexjs',
        destination: '/vtex-rest-api/docs/vtexjs-1',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/feed-v3-1',
        destination: '/vtex-rest-api/docs/orders-feed',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/integrating-external-orders-via-api-to-be-used-with-vtex-tracking',
        destination:
          '/vtex-rest-api/docs/integrate-external-orders-vtex-tracking',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/getting-started-with-vtex-io-for-carriers',
        destination: '/vtex-rest-api/docs/vtex-io-for-carriers',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1',
        destination:
          '/vtex-rest-api/docs/customizable-fields-with-checkout-api',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/fetching-marketplace-payment-method-data-with-the-orders-api',
        destination: '/vtex-rest-api/docs/get-marketplace-data-orders-api',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/fetching-payment-data-from-a-mercado-libre-order-with-orders-api',
        destination:
          '/vtex-rest-api/docs/get-payment-data-mercado-libre-orders-api',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/orders-feed-guide',
        destination: '/vtex-rest-api/docs/orders-feed',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/comprehensive-seller-what-it-is-and-how-to-use-it',
        destination:
          'https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/vtex-google-tag-manager',
        destination: '/vtex-developer-docs/docs/google-tag-manager',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/changelog/region-v2',
        destination: '/vtex-developer-docs/changelog/region-v2-release',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/vtex-kitlook',
        destination: '/vtex-developer-docs/docs/vtexbr-kitlook',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/getting-started-with-vtex-io-for-vtex-shipping-network',
        destination: '/vtex-rest-api/docs/getting-started-with-io-for-vtex-log',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/vtex-io-for-carriers',
        destination: '/vtex-rest-api/docs/getting-started-with-io-for-vtex-log',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/carriers-1',
        destination: '/vtex-rest-api/docs/vtex-shipping-network',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/vtex-log-notify-carrier-with-app',
        destination:
          '/vtex-rest-api/reference/vtex-shipping-network-notify-carrier-with-app',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/vtex-log-notify-carrier-with-app',
        destination:
          '/vtex-rest-api/reference/vtex-shipping-network-notify-carrier-with-app',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/vtex-log-tracking-events-with-app',
        destination:
          '/vtex-rest-api/reference/vtex-shipping-network-tracking-app',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/vtex-log-tracking-events-with-app',
        destination:
          '/vtex-rest-api/reference/vtex-shipping-network-tracking-events-with-app',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/vtex-tiktok-tbp',
        destination: '/vtex-developer-docs/docs/vtexbr-tiktok-tbp',
        permanent: true,
      },
      {
        source: '/createfeed#undefined',
        destination: '/create-feed',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/managing-application-logs',
        destination:
          '/vtex-developer-docs/docs/vtex-io-documentation-managing-application-logs',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/external-marketplace-integration-order-logs',
        destination:
          '/vtex-rest-api/docs/external-marketplace-integration-collect-orders',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/custom-prices',
        destination:
          '/vtex-rest-api/reference/get_-v-custom-prices-session-schema',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference-edit/custom-prices',
        destination:
          '/vtex-rest-api/reference/post_-v-custom-prices-session-schema',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/catalog-api-v2-overview',
        destination:
          '/vtex-rest-api/reference/catalog-api-seller-portal-overview',
        permanent: true,
      },
      {
        source:
          '/vtex-developer-docs/docs/migrating-storefront-from-legacy-to-io',
        destination:
          '/vtex-io-documentation-migrating-storefront-from-legacy-to-io',
        permanent: true,
      },
      {
        source:
          '/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger',
        destination: '/vtex-rest-api/docs/trigger-ab-test',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/adaptations-and-limitations',
        destination:
          '/vtex-rest-api/docs/changes-and-limitations-pii-compliant-account',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs/data-privacy',
        destination: '/vtex-rest-api/docs/pii-compliant-accounts',
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
        source:
          '/docs/api-reference/orders-api-pii-compliant#get-/api/orders/pvt/document/-orderId-',
        destination:
          '/docs/api-reference/orders-api-pii-version#get-/api/orders/pvt/document/-orderId-',
        permanent: true,
      },
      {
        source: '/docs/api-reference/listorderspiicompliant',
        destination:
          '/docs/api-reference/orders-api-pii-version#get-/api/orders/extendsearch/orders',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/orders-api-pii-compliant#get-/api/orders/extendsearch/orders',
        destination:
          '/docs/api-reference/orders-api-pii-version#get-/api/orders/extendsearch/orders',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/orders-api-pii-compliant#post-/api/orders/pvt/document/-orderId-/cancel',
        destination:
          '/docs/api-reference/orders-api-pii-version#post-/api/orders/pvt/document/-orderId-/cancel',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/orders-api-pii-compliant#post-/api/orders/pvt/document/-orderId-/invoices',
        destination:
          '/docs/api-reference/orders-api-pii-version#post-/api/orders/pvt/document/-orderId-/invoices',
        permanent: true,
      },
      {
        source:
          '/docs/api-reference/orders-api-pii-compliant#post-/api/orders/pvt/document/-orderId-/payment/-paymentId-/notify-payment',
        destination:
          '/docs/api-reference/orders-api-pii-version#post-/api/orders/pvt/document/-orderId-/payment/-paymentId-/notify-payment',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlaiceholder(nextConfig)
