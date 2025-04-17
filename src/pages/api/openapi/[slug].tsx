export const config = {
  api: {
    bodyParser: false,
  },
}

import { githubConfig } from 'utils/github-config'
import { getLogger } from 'utils/logging/log-util'
import SwaggerParser from '@apidevtools/swagger-parser'
import { NextApiRequest, NextApiResponse } from 'next'

const logger = getLogger('openapi-endpoint')

const referencePaths = objectFlip({
  'VTEX - Antifraud Provider API': 'antifraud-provider-protocol',
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
})

// Type for reference paths mapping
interface ReferencePathsMapping {
  [key: string]: string
}

function objectFlip(obj: { [x: string]: string }): ReferencePathsMapping {
  return Object.keys(obj).reduce((ret: ReferencePathsMapping, key) => {
    ret[obj[key]] = key
    return ret
  }, {})
}

interface FetchResult {
  success: boolean
  body?: string
  spec?: Record<string, unknown> // Store the parsed specification
  age?: number
  maxAge?: number
  source: string
}

/**
 * Fetches OpenAPI spec from jsDelivr CDN
 */
async function fetchFromJsdelivr(
  path: string,
  slug: string
): Promise<FetchResult> {
  try {
    const jsdelivrUrl = `https://cdn.jsdelivr.net/gh/vtex/openapi-schemas/${path}.json`
    const jsDelivrResponse = await fetch(jsdelivrUrl)

    if (jsDelivrResponse.ok) {
      const body = await jsDelivrResponse.text()

      // Extract cache information from headers
      const cacheAge = parseInt(jsDelivrResponse.headers.get('age') || '0', 10)
      const cacheControl = jsDelivrResponse.headers.get('cache-control') || ''
      const maxAgeMatch = cacheControl.match(/max-age=(\d+)/)
      const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1], 10) : undefined

      logger.info(
        `jsdelivr cache info for ${slug}: age=${cacheAge}, cache-control=${cacheControl}, max-age=${maxAge}`
      )

      return {
        success: true,
        body,
        age: cacheAge,
        maxAge,
        source: 'jsdelivr',
      }
    }

    logger.info(
      `jsdelivr returned non-OK response for ${slug}: ${jsDelivrResponse.status}`
    )
    return {
      success: false,
      source: 'jsdelivr',
    }
  } catch (error) {
    logger.error(
      `Error fetching from jsdelivr for ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return {
      success: false,
      source: 'jsdelivr',
    }
  }
}

/**
 * Fetches OpenAPI spec from GitHub raw content
 */
async function fetchFromGithubRaw(
  path: string,
  slug: string
): Promise<FetchResult> {
  try {
    const rawGithubUrl = `https://raw.githubusercontent.com/${githubConfig.openapiOrg}/${githubConfig.openapiRepo}/${githubConfig.openapiBranch}/${path}.json`
    const response = await fetch(rawGithubUrl, {
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      const body = await response.text()

      // Extract cache information from headers if available
      const cacheAge = parseInt(response.headers.get('age') || '0', 10)
      const cacheControl = response.headers.get('cache-control') || ''
      const maxAgeMatch = cacheControl.match(/max-age=(\d+)/)
      const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1], 10) : undefined

      logger.info(
        `GitHub raw cache info for ${slug}: age=${cacheAge}, cache-control=${cacheControl}`
      )

      return {
        success: true,
        body,
        age: cacheAge,
        maxAge,
        source: 'github-raw',
      }
    }

    logger.info(
      `GitHub raw returned non-OK response for ${slug}: ${response.status}`
    )
    return {
      success: false,
      source: 'github-raw',
    }
  } catch (error) {
    logger.error(
      `Error fetching from GitHub raw for ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return {
      success: false,
      source: 'github-raw',
    }
  }
}

/**
 * Resolves references in an OpenAPI spec using SwaggerParser
 * @returns An object with the resolved spec and a flag indicating if resolution succeeded
 */
async function resolveReferences(
  spec: string,
  slug: string
): Promise<{
  spec: string
  resolved: boolean
}> {
  try {
    logger.info(`Resolving references for ${slug} spec using SwaggerParser`)
    // Parse the raw spec to get a JS object
    const parsedSpec = JSON.parse(spec)

    // Create a new parser instance
    const parser = new SwaggerParser()

    try {
      // First attempt to fully dereference - this is more thorough but may fail on complex specs
      const dereferencedSpec = await parser.dereference(parsedSpec, {
        dereference: {
          circular: true, // Handle circular references
        },
      })

      logger.info(`Successfully dereferenced spec for ${slug}`)

      return {
        spec: JSON.stringify(dereferencedSpec),
        resolved: true,
      }
    } catch (dereferenceError) {
      logger.info(
        `Could not fully dereference spec for ${slug}: ${
          dereferenceError instanceof Error
            ? dereferenceError.message
            : String(dereferenceError)
        }. Falling back to bundle.`
      )

      // Fall back to bundle which handles references differently
      const bundledSpec = await SwaggerParser.bundle(parsedSpec)

      return {
        spec: JSON.stringify(bundledSpec),
        resolved: true,
      }
    }
  } catch (error) {
    logger.error(
      `Error resolving references for ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    // If reference resolution fails, return the original spec with resolved=false
    return {
      spec,
      resolved: false,
    }
  }
}

/**
 * API handler for OpenAPI specifications
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slugParam = req.query.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam || ''
  const path = referencePaths[slug] || ''

  if (!path) {
    return res
      .status(404)
      .json({ error: `OpenAPI specification not found for: ${slug}` })
  }

  // Get cache configuration from github-config
  // If no TTL is configured, use 5 minutes (300 seconds) as default instead of 1 hour
  const configuredMaxAge = githubConfig.cacheTTL || 300

  // Define more cache parameters
  const PRIMARY_TTL = Math.min(configuredMaxAge, 300) // Cap at 5 minutes
  const FALLBACK_TTL = Math.min(Math.floor(configuredMaxAge / 2), 180) // Cap at 3 minutes
  const SWR_FACTOR = 3 // Reduce stale-while-revalidate multiplier from 24 to 3

  // Track successful response for returning
  let finalResult: FetchResult | null = null

  try {
    // Step 1: Try jsdelivr first (primary source)
    const jsdelivrResult = await fetchFromJsdelivr(path, slug)

    // Check if jsdelivr succeeded but cache is stale
    if (jsdelivrResult.success) {
      const isCacheFresh =
        !jsdelivrResult.age || jsdelivrResult.age < configuredMaxAge

      if (isCacheFresh) {
        logger.info(
          `Using fresh jsdelivr response for ${slug}, age: ${
            jsdelivrResult.age || 0
          }s`
        )
        finalResult = jsdelivrResult
      } else {
        logger.info(
          `jsdelivr cache too old for ${slug} (age: ${jsdelivrResult.age}s, limit: ${configuredMaxAge}s), trying GitHub raw`
        )
      }
    }

    // Step 2: Try GitHub raw if jsdelivr failed or had stale cache
    if (!finalResult) {
      const githubRawResult = await fetchFromGithubRaw(path, slug)

      if (githubRawResult.success) {
        // Check if GitHub raw cache is fresh enough
        const isCacheFresh =
          !githubRawResult.age || githubRawResult.age < configuredMaxAge

        if (isCacheFresh) {
          logger.info(
            `Using GitHub raw response for ${slug}, age: ${
              githubRawResult.age || 0
            }s`
          )
          finalResult = githubRawResult
        } else {
          logger.info(
            `GitHub raw cache also too old for ${slug} (age: ${githubRawResult.age}s, limit: ${configuredMaxAge}s)`
          )

          // If GitHub raw succeeded but was stale, still use it as fallback
          if (!finalResult) {
            finalResult = githubRawResult
          }
        }
      }
    }

    // Step 3: Potential third fallback could be added here following the same pattern
    // if (!finalResult) {
    //   const thirdSourceResult = await fetchFromThirdSource(path, slug)
    //   if (thirdSourceResult.success) {
    //     finalResult = thirdSourceResult
    //   }
    // }

    // Return result if any source succeeded
    if (finalResult && finalResult.success && finalResult.body) {
      // Use SwaggerParser to resolve all references in the spec
      const resolvedResult = await resolveReferences(finalResult.body, slug)

      logger.info(
        `Successfully served OpenAPI spec for ${slug} from ${
          finalResult.source
        } with references ${
          resolvedResult.resolved
            ? 'successfully resolved'
            : 'not fully resolved'
        }`
      )

      // Calculate TTL based on source (primary source gets longer TTL)
      const ttl = finalResult.source === 'jsdelivr' ? PRIMARY_TTL : FALLBACK_TTL
      const swr = ttl * SWR_FACTOR

      return res
        .setHeader(
          'Netlify-CDN-Cache-Control',
          `public, s-maxage=${ttl}, stale-while-revalidate=${swr}, durable`
        )
        .setHeader(
          'Cache-Control',
          `public, max-age=0, s-maxage=${ttl}, stale-while-revalidate=${swr}, must-revalidate`
        )
        .setHeader('Netlify-Cache-Tag', `openapi,${slug}`)
        .setHeader('Vary', 'Accept')
        .setHeader('X-Source', finalResult.source)
        .setHeader('X-References-Resolved', resolvedResult.resolved.toString())
        .setHeader(
          'X-Cache-Debug',
          `source=${finalResult.source},resolved=${resolvedResult.resolved},ttl=${ttl}`
        )
        .send(resolvedResult.spec)
    }

    // All sources failed
    logger.error(`Failed to fetch OpenAPI spec for ${slug} from all sources`)
    return res.status(502).json({
      error: `Failed to fetch OpenAPI specification for: ${slug}`,
      path: path,
    })
  } catch (error) {
    logger.error(
      `Unexpected error fetching OpenAPI specification for ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return res.status(500).json({
      error: `Internal error fetching OpenAPI specification for: ${slug}`,
      message: error instanceof Error ? error.message : String(error),
    })
  }
}
