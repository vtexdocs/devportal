/* eslint-disable @typescript-eslint/no-explicit-any */
const referencePaths: { [slug: string]: string } = {}

import { getGithubTree } from './github-utils'
import { getLogger } from './logging/log-util'

const fileSlugMap: { [key: string]: string } = {
  'VTEX - Antifraud Provider API': 'antifraud-provider-protocol',
  'VTEX - Legacy CMS Portal API': 'legacy-cms-portal-api',
  'VTEX - Catalog API Seller Portal': 'catalog-api-seller-portal',
  'VTEX - Catalog API': 'catalog-api',
  'VTEX - Checkout API': 'checkout-api',
  'VTEX - Checkout Configuration API': 'checkout-configuration-api',
  'VTEX - Customer Credit API': 'customer-credit-api',
  'VTEX - GiftCard Hub API': 'giftcard-hub-api',
  'VTEX - Giftcard API': 'giftcard-api',
  'VTEX - Giftcard Provider Protocol': 'giftcard-provider-protocol',
  'VTEX - Headless CMS API': 'headless-cms-api',
  'VTEX - Intelligent Search API': 'intelligent-search-api',
  'VTEX - License Manager API': 'license-manager-api',
  'VTEX - Logistics API': 'logistics-api',
  'VTEX - Master Data API - v2': 'master-data-api-v2',
  'VTEX - Message Center API': 'message-center-api',
  'VTEX - Orders API PII version': 'orders-api-pii-version',
  'VTEX - Orders API': 'orders-api',
  'VTEX - Payment Provider Protocol': 'payment-provider-protocol',
  'VTEX - Payments Gateway API': 'payments-gateway-api',
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
  'VTEX - Subscriptions API': 'subscriptions-api',
  'VTEX - Subscriptions (v2) API': 'subscriptions-v2-api',
  'VTEX - User Data Rights API': 'user-data-rights-api',
}

export default async function getReferencePaths(branch = 'main') {
  const logger = getLogger('getReferencePaths')
  try {
    const repoTree = await getGithubTree(
      'vtexdocs',
      'dev-portal-content',
      branch
    )
    repoTree.tree.forEach((node: { path: string; type: string }) => {
      const path = node.path
      const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
      if (path.startsWith('docs/api-reference')) {
        if (node.type === 'blob') {
          const match = path.match(re)
          const filename = match?.groups?.filename
            ? match?.groups?.filename
            : ''
          const filetype = match?.groups?.filetype
            ? match?.groups?.filetype
            : ''
          if (filetype === 'json' || filetype === 'yaml') {
            referencePaths[fileSlugMap[filename] || filename] = path
          }
        }
      }
    })
    return referencePaths
  } catch (error) {
    logger.error(`Failed to get reference paths: ${error}`)
    throw error
  }
}
