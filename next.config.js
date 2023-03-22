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
        source: '/vtex-rest-api/reference/invoice',
        destination:
          '/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice',
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
        source: '/docs/api-reference/test-jsonata-expression',
        destination:
          '/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata',
        permanent: true,
      },
      {
        source: '/docs/api-reference/catalog-api-product',
        destination: '/docs/api-reference/catalog-api',
        permanent: true,
      },
      {
        source: '/docs/api-reference/orders#registerchange',
        destination:
          '/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/changes',
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
        source: '/docs/guides/marketplace-api',
        destination: '/docs/api-reference/marketplace-apis',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-add-to-cart-button',
        destination: '/docs/apps/vtex.add-to-cart-button',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search-autocomplete',
        destination: '/docs/apps/vtex.search/Autocomplete',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search-banner',
        destination: '/docs/apps/vtex.search/banner',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-breadcrumb',
        destination: '/docs/apps/vtex.breadcrumb',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-footer',
        destination: '/docs/apps/vtex.store-footer',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-header',
        destination: '/docs/apps/vtex.store-header',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-locale-switcher',
        destination: '/docs/apps/vtex.locale-switcher',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-login',
        destination: '/docs/apps/vtex.login',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-menu',
        destination: '/docs/apps/vtex.menu',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-minicart',
        destination: '/docs/apps/vtex.minicart',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-order-placed',
        destination: '/docs/apps/vtex.order-placed',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-customizer',
        destination: '/docs/apps/vtex.product-customizer',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-highlights',
        destination: '/docs/apps/vtex.product-highlights',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-identifier',
        destination: '/docs/apps/vtex.product-identifier',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-list',
        destination: '/docs/apps/vtex.product-list',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-price',
        destination: '/docs/apps/vtex.product-price',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-quantity',
        destination: '/docs/apps/vtex.product-quantity',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-specifications',
        destination: '/docs/apps/vtex.product-specifications',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary',
        destination: '/docs/apps/vtex.product-summary',
        permanent: true,
      },
      {
        source:
          '/docs/guides/vtex-product-summary-productsummaryattachmentlist',
        destination:
          '/docs/apps/vtex.product-summary/productsummaryattachmentlist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummarybuybutton',
        destination: '/docs/apps/vtex.product-summary/productsummarybuybutton',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummarydescription',
        destination:
          '/docs/apps/vtex.product-summary/productsummarydescription',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummaryimage',
        destination: '/docs/apps/vtex.product-summary/productsummaryimage',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummarylist',
        destination: '/docs/apps/vtex.product-summary/productsummarylist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummaryname',
        destination: '/docs/apps/vtex.product-summary/productsummaryname',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummaryshelf',
        destination: '/docs/apps/vtex.product-summary/productsummaryshelf',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummaryskuselector',
        destination:
          '/docs/apps/vtex.product-summary/productsummaryskuselector',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-summary-productsummaryskuname',
        destination: '/docs/apps/vtex.product-summary/productsummaryskuname',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-rich-text',
        destination: '/docs/apps/vtex.rich-text',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search',
        destination: '/docs/apps/vtex.search',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search-suggestions',
        destination: '/docs/apps/vtex.search/suggestions',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search-didyoumean',
        destination: '/docs/apps/vtex.search/didyoumean',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-search-result',
        destination: '/docs/apps/vtex.search/result',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-image',
        destination: '/docs/apps/vtex.store-image',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-autocompleteresults',
        destination: '/docs/apps/vtex.store-components/autocompleteresults',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-availabilitysubscriber',
        destination: '/docs/apps/vtex.store-components/availabilitysubscriber',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-backtotopbutton',
        destination: '/docs/apps/vtex.store-components/backtotopbutton',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-image',
        destination: '/docs/apps/vtex.store-components/image',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-infocard',
        destination: '/docs/apps/vtex.store-components/infocard',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-logo',
        destination: '/docs/apps/vtex.store-components/logo',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-notification',
        destination: '/docs/apps/vtex.store-components/notification',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-productbrand',
        destination: '/docs/apps/vtex.store-components/productbrand',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-productdescription',
        destination: '/docs/apps/vtex.store-components/productdescription',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-productimages',
        destination: '/docs/apps/vtex.store-components/productimages',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-productname',
        destination: '/docs/apps/vtex.store-components/productname',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-productskuattributes',
        destination: '/docs/apps/vtex.store-components/productskuattributes',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-searchbar',
        destination: '/docs/apps/vtex.store-components/searchbar',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-share',
        destination: '/docs/apps/vtex.store-components/share',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-shippingsimulator',
        destination: '/docs/apps/vtex.store-components/shippingsimulator',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-components-skuselector',
        destination: '/docs/apps/vtex.store-components/skuselector',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-availability-notify',
        destination: '/docs/apps/vtex.availability-notify',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-category-menu',
        destination: '/docs/apps/vtex.category-menu',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexbr-kitlook',
        destination: '/docs/apps/vtexbr.kitlook',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-icons-iconpack',
        destination: '/docs/apps/vtex.store-icons/iconpack',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-iframe',
        destination: '/docs/apps/vtex.iframe',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexventures-livestreaming',
        destination: '/docs/apps/vtexventures.livestreaming',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-connector-paypal-commerce-platform',
        destination: '/docs/apps/vtex.connector-paypal-commerce-platform',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-availability',
        destination: '/docs/apps/vtex.product-availability',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-comparison',
        destination: '/docs/apps/vtex.product-comparison',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-gifts',
        destination: '/docs/apps/vtex.product-gifts',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexarg-product-highlight-by-vtex-segment',
        destination: '/docs/apps/vtexarg.product-highlight-by-vtex-segment',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexarg-quantity-on-cart',
        destination: '/docs/apps/vtexarg.quantity-on-cart',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-reviews-and-ratings',
        destination: '/docs/apps/vtex.reviews-and-ratings',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-safedata',
        destination: '/docs/apps/vtex.safedata',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-seller-selector',
        destination: '/docs/apps/vtex.seller-selector',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-similar-products-variants',
        destination: '/docs/apps/vtex.similar-products-variants',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-drawer',
        destination: '/docs/apps/vtex.store-drawer',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-locator',
        destination: '/docs/apps/vtex.store-locator',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-form',
        destination: '/docs/apps/vtex.store-form',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-link',
        destination: '/docs/apps/vtex.store-link',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-media',
        destination: '/docs/apps/vtex.store-media',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-newsletter',
        destination: '/docs/apps/vtex.store-newsletter',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-video',
        destination: '/docs/apps/vtex.store-video',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-sandbox',
        destination: '/docs/apps/vtex.sandbox',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-specification-badges',
        destination: '/docs/apps/vtex.product-specification-badges',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-wish-list',
        destination: '/docs/apps/vtex.wish-list',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-location-availability',
        destination: '/docs/apps/vtex.location-availability',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-order-configuration',
        destination: '/docs/apps/vtex.order-configuration',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-orderquote',
        destination: '/docs/apps/vtex.orderquote',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-quickorder',
        destination: '/docs/apps/vtex.quickorder',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-shopper-location',
        destination: '/docs/apps/vtex.shopper-location',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-sku-list',
        destination: '/docs/apps/vtex.sku-list',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-admin-organizations',
        destination: '/docs/apps/vtex.admin-organizations',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-organizations',
        destination: '/docs/apps/vtex.organizations',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-organizations-challenge',
        destination: '/docs/apps/vtex.organizations-challenge',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-challenge-tp-condition',
        destination: '/docs/apps/vtex.challenge-tp-condition',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-b2b-suite',
        destination: '/docs/apps/vtex.b2b-suite',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-storefront-permissions',
        destination: '/docs/apps/vtex.storefront-permissions',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-storefront-permissions-ui',
        destination: '/docs/apps/vtex.storefront-permissions-ui',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-b2b-organizations',
        destination: '/docs/apps/vtex.b2b-organizations',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-b2b-checkout-settings',
        destination: '/docs/apps/vtex.b2b-checkout-settings',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-b2b-orders-history',
        destination: '/docs/apps/vtex.b2b-orders-history',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-b2b-quotes',
        destination: '/docs/apps/vtex.b2b-quotes',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexarg-abtester',
        destination: '/docs/apps/vtexarg.abtester',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-abandoned-cart-service',
        destination: '/docs/apps/vtex.abandoned-cart-service',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-badges',
        destination: '/docs/apps/vtex.badges',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-catalog-images',
        destination: '/docs/apps/vtex.catalog-images',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-checkout-ui-custom-v0',
        destination: '/docs/apps/vtex.checkout-ui-custom',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-checkout-ui-settings',
        destination: '/docs/apps/vtex.checkout-ui-settings',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-context',
        destination: '/docs/apps/vtex.product-context',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexbr-pickup-selector',
        destination: '/docs/apps/vtexbr.pickup-selector',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-responsive-values',
        destination: '/docs/apps/vtex.responsive-values',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-icons',
        destination: '/docs/apps/vtex.store-icons',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-store-sitemap',
        destination: '/docs/apps/vtex.store-sitemap',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-telemarketing',
        destination: '/docs/apps/vtex.telemarketing',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-condition-layout',
        destination: '/docs/apps/vtex.condition-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-disclosure-layout',
        destination: '/docs/apps/vtex.disclosure-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-flex-layout',
        destination: '/docs/apps/vtex.flex-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-modal-layout',
        destination: '/docs/apps/vtex.modal-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-overlay-layout',
        destination: '/docs/apps/vtex.overlay-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-responsive-layout',
        destination: '/docs/apps/vtex.responsive-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-slider-layout',
        destination: '/docs/apps/vtex.slider-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-stack-layout',
        destination: '/docs/apps/vtex.stack-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-sticky-layout',
        destination: '/docs/apps/vtex.sticky-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-tab-layout',
        destination: '/docs/apps/vtex.tab-layout',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-accessibe',
        destination: '/docs/apps/vtex.accessibe',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-alexa-certify-code',
        destination: '/docs/apps/vtex.alexa-certify-code',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-audara',
        destination: '/docs/apps/vtex.audara',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-bazaarvoice',
        destination: '/docs/apps/vtex.bazaarvoice',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-bluecore',
        destination: '/docs/apps/vtex.bluecore',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-blueknow',
        destination: '/docs/apps/vtex.blueknow',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-btg360',
        destination: '/docs/apps/vtex.btg360',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-cookiebot',
        destination: '/docs/apps/vtex.cookiebot',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-cookie-script',
        destination: '/docs/apps/vtex.cookie-script',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-curbside-pickup',
        destination: '/docs/apps/vtex.curbside-pickup',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-cybersource-fingerprint',
        destination: '/docs/apps/vtex.cybersource-fingerprint',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-elfsight',
        destination: '/docs/apps/vtex.elfsight',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-facebook-pixel',
        destination: '/docs/apps/vtex.facebook-pixel',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-facebook-domain-verification',
        destination: '/docs/apps/vtex.facebook-domain-verification',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-facebook-fbe',
        destination: '/docs/apps/vtex.facebook-fbe',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-flixmedia',
        destination: '/docs/apps/vtex.flixmedia',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-google-adwords',
        destination: '/docs/apps/vtex.google-adwords',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-google-customer-reviews',
        destination: '/docs/apps/vtex.google-customer-reviews',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-hotjar',
        destination: '/docs/apps/vtex.hotjar',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-ideacrm',
        destination: '/docs/apps/vtex.ideacrm',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-iubenda',
        destination: '/docs/apps/vtex.iubenda',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-jivochat',
        destination: '/docs/apps/vtex.jivochat',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-kelkoo-app',
        destination: '/docs/apps/vtex.kelkoo-app',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-listrak-pixel',
        destination: '/docs/apps/vtex.listrak-pixel',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-logrocket',
        destination: '/docs/apps/vtex.logrocket',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-lucky-orange',
        destination: '/docs/apps/vtex.lucky-orange',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-powerreviews',
        destination: '/docs/apps/vtex.powerreviews',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-google-search-console',
        destination: '/docs/apps/vtex.google-search-console',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-shareasale',
        destination: '/docs/apps/vtex.shareasale',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-io-release-notes-sidecar-pixel-app',
        destination: '/docs/apps/vtex.io-release-notes-sidecar-pixel-app',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-smarthint',
        destination: '/docs/apps/vtex.smarthint',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexarg-speech-to-text-search',
        destination: '/docs/apps/vtexarg.speech-to-text-search',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-suiteshare',
        destination: '/docs/apps/vtex.suiteshare',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-tawk-to',
        destination: '/docs/apps/vtex.tawk-to',
        permanent: true,
      },
      {
        source: '/docs/guides/vtexbr-tiktok-tbp',
        destination: '/docs/apps/vtexbr.tiktok-tbp',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-trustpilot',
        destination: '/docs/apps/vtex.trustpilot',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-wordpress-integration',
        destination: '/docs/apps/vtex.wordpress-integration',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-yotpo',
        destination: '/docs/apps/vtex.yotpo',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-zendesk-chat',
        destination: '/docs/apps/vtex.zendesk-chat',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-zopim',
        destination: '/docs/apps/vtex.zopim',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-gift-list',
        destination: '/docs/apps/vtex.list',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-listaddtocartbutton',
        destination: '/docs/apps/vtex.list/listaddtocartbutton',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-addnewitem',
        destination: '/docs/apps/vtex.list/addnewitem',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-gobacktolist',
        destination: '/docs/apps/vtex.list/gobacktolist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-authcondition',
        destination: '/docs/apps/vtex.list/authcondition',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-addtolistbutton',
        destination: '/docs/apps/vtex.list/addtolistbutton',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-searchlist',
        destination: '/docs/apps/vtex.list/searchlist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-gallerylistitems',
        destination: '/docs/apps/vtex.list/gallerylistitems',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-listmigration',
        destination: '/docs/apps/vtex.list/listmigration',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-listmodal',
        destination: '/docs/apps/vtex.list/listmodal',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-userlists',
        destination: '/docs/apps/vtex.list/userlists',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-sharelist',
        destination: '/docs/apps/vtex.list/sharelist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-breadcrumbs',
        destination: '/docs/apps/vtex.list/breadcrumbs',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-giftedbutton',
        destination: '/docs/apps/vtex.list/giftedbutton',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-listinfo',
        destination: '/docs/apps/vtex.list/listinfo',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-productmodal',
        destination: '/docs/apps/vtex.list/productmodal',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-storewalletlist',
        destination: '/docs/apps/vtex.list/storewalletlist',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-list-quantity-selector-2',
        destination: '/docs/apps/vtex.list/quantity-selector-2',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-gift-list-wrappers',
        destination: '/docs/apps/vtex.gift-list-wrappers',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-gift-list-listitemsorderby',
        destination: '/docs/apps/vtex.gift-list-listitemsorderby',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-my-account',
        destination: '/docs/apps/vtex.my-account',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-my-account-commons',
        destination: '/docs/apps/vtex.my-account-commons',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-my-authentication',
        destination: '/docs/apps/vtex.my-authentication',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-shelf',
        destination: '/docs/apps/vtex.shelf',
        permanent: true,
      },
      {
        source: '/docs/guides/vtex-product-kit',
        destination: '/docs/apps/vtex.product-kit',
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
