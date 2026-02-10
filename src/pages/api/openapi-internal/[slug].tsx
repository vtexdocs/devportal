export const config = {
  api: {
    bodyParser: false,
  },
}

import { githubConfig } from 'utils/github-config'
import { getLogger } from 'utils/logging/log-util'
import SwaggerParser from '@apidevtools/swagger-parser'
import { NextApiRequest, NextApiResponse } from 'next'
import getGithubFile from 'utils/getGithubFile'

const logger = getLogger('openapi-internal-endpoint')

/**
 * Mapping of internal OpenAPI spec slugs to their file paths in the openapi-schemas-internal repo
 * The key is the URL slug, the value is the filename (without .json extension)
 */
const internalOpenapiMappings: { [key: string]: string } = {
  'checkout-configuration-api': 'VTEX - Checkout Configuration API',
  'generic-import-export-api': 'VTEX - Generic Import Export API',
  'help-search-api': 'VTEX - Help Search API',
  'log-internal-api': 'VTEX - Log internal',
  'price-simulations-internal-api': 'VTEX - Price Simulations Internal',
  'seller-portal-api': 'VTEX - Seller Portal',
}

const referencePaths = objectFlip(internalOpenapiMappings)

interface ReferencePathsMapping {
  [key: string]: string
}

function objectFlip(obj: { [x: string]: string }): ReferencePathsMapping {
  return Object.keys(obj).reduce((ret: ReferencePathsMapping, key) => {
    ret[obj[key]] = key
    return ret
  }, {})
}

/**
 * Fetches internal OpenAPI spec using the authenticated Octokit client
 * This uses the GitHub App authentication already configured in the devportal
 */
async function fetchInternalSpec(path: string, slug: string): Promise<string> {
  logger.info(
    `Fetching internal OpenAPI spec for ${slug} from ${githubConfig.openapiInternalOrg}/${githubConfig.openapiInternalRepo}`
  )

  const content = await getGithubFile(
    githubConfig.openapiInternalOrg,
    githubConfig.openapiInternalRepo,
    githubConfig.openapiInternalBranch,
    `${path}.json`
  )

  return content
}

/**
 * Resolves references in an OpenAPI spec using SwaggerParser
 */
async function resolveReferences(
  spec: string,
  slug: string
): Promise<{
  spec: string
  resolved: boolean
}> {
  try {
    logger.info(
      `Resolving references for internal ${slug} spec using SwaggerParser`
    )
    const parsedSpec = JSON.parse(spec)
    const parser = new SwaggerParser()

    try {
      const dereferencedSpec = await parser.dereference(parsedSpec, {
        dereference: {
          circular: true,
        },
      })

      logger.info(`Successfully dereferenced internal spec for ${slug}`)

      return {
        spec: JSON.stringify(dereferencedSpec),
        resolved: true,
      }
    } catch (dereferenceError) {
      logger.info(
        `Could not fully dereference internal spec for ${slug}: ${
          dereferenceError instanceof Error
            ? dereferenceError.message
            : String(dereferenceError)
        }. Falling back to bundle.`
      )

      const bundledSpec = await SwaggerParser.bundle(parsedSpec)

      return {
        spec: JSON.stringify(bundledSpec),
        resolved: true,
      }
    }
  } catch (error) {
    logger.error(
      `Error resolving references for internal ${slug}: ${
        error instanceof Error ? error.message : String(error)
      }`
    )
    return {
      spec,
      resolved: false,
    }
  }
}

/**
 * API handler for internal OpenAPI specifications
 * These specs are fetched from the openapi-schemas-internal repository
 * using the authenticated GitHub App (Octokit) configuration
 *
 * Note: This endpoint is publicly accessible, but the specs are internal
 * documentation (not secrets). Access to the viewer in admin-docs is
 * protected by VTEX Admin authentication.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slugParam = req.query.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam || ''

  // Look up the path from the mapping, or use slug directly as the path
  const path = referencePaths[slug] || slug

  if (!path) {
    return res
      .status(404)
      .json({ error: `Internal OpenAPI specification not found for: ${slug}` })
  }

  const configuredMaxAge = githubConfig.cacheTTL || 300
  const TTL = Math.min(configuredMaxAge, 300)
  const SWR_FACTOR = 3

  try {
    // Fetch using authenticated Octokit client
    const specContent = await fetchInternalSpec(path, slug)

    if (specContent) {
      const resolvedResult = await resolveReferences(specContent, slug)

      logger.info(
        `Successfully served internal OpenAPI spec for ${slug} with references ${
          resolvedResult.resolved
            ? 'successfully resolved'
            : 'not fully resolved'
        }`
      )

      const swr = TTL * SWR_FACTOR

      return res
        .setHeader(
          'Netlify-CDN-Cache-Control',
          `public, s-maxage=${TTL}, stale-while-revalidate=${swr}, durable`
        )
        .setHeader(
          'Cache-Control',
          `public, max-age=0, s-maxage=${TTL}, stale-while-revalidate=${swr}, must-revalidate`
        )
        .setHeader('Netlify-Cache-Tag', `openapi-internal,${slug}`)
        .setHeader('Vary', 'Accept')
        .setHeader('X-Source', 'github-app-auth')
        .setHeader('X-References-Resolved', resolvedResult.resolved.toString())
        .send(resolvedResult.spec)
    }

    logger.error(
      `Failed to fetch internal OpenAPI spec for ${slug}: empty content`
    )
    return res.status(502).json({
      error: `Failed to fetch internal OpenAPI specification for: ${slug}`,
      path: path,
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)

    // Check for 404 errors (file not found)
    if (errorMessage.includes('404') || errorMessage.includes('Not Found')) {
      logger.info(`Internal OpenAPI spec not found for ${slug}: ${path}.json`)
      return res.status(404).json({
        error: `Internal OpenAPI specification not found for: ${slug}`,
        path: `${path}.json`,
      })
    }

    logger.error(
      `Unexpected error fetching internal OpenAPI specification for ${slug}: ${errorMessage}`
    )
    return res.status(500).json({
      error: `Internal error fetching OpenAPI specification for: ${slug}`,
      message: errorMessage,
    })
  }
}
