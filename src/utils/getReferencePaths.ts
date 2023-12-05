/* eslint-disable @typescript-eslint/no-explicit-any */
const referencePaths: { [slug: string]: string } = {}

import octokit from 'utils/octokitConfig'
import { getLogger } from './logging/log-util'

async function getGithubTree(org: string, repo: string, ref: string) {
  const response = octokit.request(
    'GET /repos/{org}/{repo}/git/trees/{ref}?recursive=true',
    {
      org: org,
      repo: repo,
      ref: ref,
    }
  )

  return (await response).data
}

const fileSlugMap = {
  'VTEX - Antifraud Provider API': 'antifraud-provider-protocol',
  'VTEX - Legacy CMS Portal API': 'legacy-cms-portal-api',
  'VTEX - Catalog API Seller Portal': 'catalog-api-seller-portal',
  'VTEX - Catalog API': 'catalog-api',
  'VTEX - Checkout API': 'checkout-api',
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
  'VTEX - Orders API (PII version)': 'orders-api-pii-version',
  'VTEX - Orders API': 'orders-api',
  'VTEX - Payment Provider Protocol': 'payment-provider-protocol',
  'VTEX - Payments Gateway API': 'payments-gateway-api',
  'VTEX - Policies System API': 'policies-system-api',
  'VTEX - Price Simulations': 'price-simulations',
  'VTEX - Pricing API': 'pricing-api',
  'VTEX - Pricing Hub': 'pricing-hub',
  'VTEX - Profile System': 'profile-system',
  'VTEX - Promotions & Taxes API': 'promotions-and-taxes-api',
  'VTEX - Recurrence (v1 - deprecated)': 'recurrence-v1-deprecated',
  'VTEX - Reviews and Ratings API': 'reviews-and-ratings-api',
  'VTEX - SKU Bindings API': 'sku-bindings-api',
  'VTEX - Search API': 'search-api',
  'VTEX - Session Manager API': 'session-manager-api',
  'VTEX - Subscriptions API (v2)': 'subscriptions-api-v2',
  'VTEX - Subscriptions API (v3)': 'subscriptions-api-v3',
  'VTEX - Tracking': 'tracking',
  'VTEX - VTEX Do API': 'vtex-do-api',
  'VTEX - VTEX ID API': 'vtex-id-api',
  'VTEX - VTEX Shipping Network API': 'vtex-shipping-network-api',
  'VTEX - Promotions & Taxes API - v2': 'promotions-and-taxes-api-v2',
  'VTEX - Intelligent Search Events API - Headless':
    'intelligent-search-events-api-headless',
  'VTEX - Data Subject Rights': 'data-subject-rights-api',
}

export default async function getReferencePaths() {
  const logger = getLogger('getReferencePaths')
  const repoTree = await getGithubTree('vtex', 'openapi-schemas', 'master')
  repoTree.tree.map((node: any) => {
    const path = node.path
    const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
    if (!path.includes('/')) {
      const match = path.match(re)
      const filename = match?.groups?.filename ? match?.groups?.filename : ''
      const filetype = match?.groups?.filetype ? match?.groups?.filetype : ''
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const fileslug = fileSlugMap[filename as string]
      if (filetype === 'json' && filename !== 'VTEX_TEMPLATE') {
        if (!fileslug)
          logger.error(
            `Couldn't find slug for this file: ${filename} in ${path}`
          )
        else
          (referencePaths as any)[
            fileslug
          ] = `https://cdn.jsdelivr.net/gh/vtex/openapi-schemas/${path}`
      }
    }
  })

  return referencePaths
}
