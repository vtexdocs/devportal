/* eslint-disable @typescript-eslint/no-explicit-any */
const referencePaths: { [slug: string]: string } = {}

import { getGithubTree } from './github-utils'
import { getLogger } from './logging/log-util'
import { githubConfig } from './github-config'

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
  'VTEX - Ad Network API': 'vtex-ad-network-api',
}

export default async function getReferencePaths(
  branch: string = githubConfig.openapiBranch
) {
  const logger = getLogger('getReferencePaths')
  try {
    const repoTree = await getGithubTree(
      githubConfig.openapiOrg,
      githubConfig.openapiRepo,
      branch
    )
    repoTree.tree.forEach((node: { path: string; type: string }) => {
      const path = node.path
      const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
      if (!path.includes('/')) {
        if (node.type === 'blob') {
          const match = path.match(re)
          const filename = match?.groups?.filename
            ? match?.groups?.filename
            : ''
          const filetype = match?.groups?.filetype
            ? match?.groups?.filetype
            : ''
          if (filetype === 'json' || filetype === 'yaml') {
            referencePaths[
              fileSlugMap[filename] || filename
            ] = `https://cdn.jsdelivr.net/gh/vtex/openapi-schemas/${path}`
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
