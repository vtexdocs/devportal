import {
  getFirstSentence,
  normalizeWhitespace,
  removeTitlePrefix,
  trimToLength,
} from 'utils/string-utils'

export interface OverviewEndpoint {
  method: string
  path: string
  summary: string
}

export interface OverviewEndpointGroup {
  tagName: string
  endpoints: OverviewEndpoint[]
}

export interface OverviewEndpointWithTags extends OverviewEndpoint {
  tags: string[]
}

export interface OverviewTagDefinition {
  name: string
}

export const GENERAL_OVERVIEW_TAG_NAME = 'General'

const META_DESCRIPTION_MAX_LENGTH = 160
const MAX_SUMMARIES_IN_META_DESCRIPTION = 5
const OPENAPI_HTTP_METHODS = [
  'get',
  'put',
  'post',
  'delete',
  'patch',
  'head',
  'options',
  'trace',
] as const

type OpenApiPathItem = Record<string, unknown>
export type OpenApiSpec = {
  paths?: Record<string, OpenApiPathItem>
  webhooks?: unknown
  tags?: Array<{ name?: string }>
  [key: string]: unknown
}

export function getOverviewEndpointHash(method: string, path: string) {
  return `${method.toLowerCase()}-${path.replaceAll(/{|}/g, '-')}`
}

function isOpenApiHttpMethod(method: string) {
  return OPENAPI_HTTP_METHODS.includes(
    method.toLowerCase() as (typeof OPENAPI_HTTP_METHODS)[number]
  )
}

// Shrinks a full OpenAPI document to the single operation that matches a
// hash (`get-/orders/-orderId-`). RapiDoc's focused mode still walks every
// path in ProcessSpec, so this keeps hash-link renders proportional to the
// endpoint instead of the whole API.
export function filterOpenApiSpecToEndpoint(
  spec: OpenApiSpec,
  endpointHash: string,
  alreadyResolved = false
): OpenApiSpec | null {
  if (!endpointHash || !spec.paths) {
    return null
  }

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    if (!pathItem || typeof pathItem !== 'object') {
      continue
    }

    for (const [method, operation] of Object.entries(pathItem)) {
      if (!isOpenApiHttpMethod(method) || !operation) {
        continue
      }

      if (getOverviewEndpointHash(method, path) !== endpointHash) {
        continue
      }

      const filteredPathItem: OpenApiPathItem = {
        [method]: operation,
      }

      if (pathItem.parameters) {
        filteredPathItem.parameters = pathItem.parameters
      }
      if (pathItem.servers) {
        filteredPathItem.servers = pathItem.servers
      }
      if (pathItem.summary) {
        filteredPathItem.summary = pathItem.summary
      }
      if (pathItem.description) {
        filteredPathItem.description = pathItem.description
      }

      const operationTags = Array.isArray(
        (operation as { tags?: unknown }).tags
      )
        ? (operation as { tags: unknown[] }).tags.filter(
            (tag): tag is string => typeof tag === 'string'
          )
        : []
      const filteredTags = Array.isArray(spec.tags)
        ? spec.tags.filter(
            (tag) =>
              typeof tag?.name === 'string' && operationTags.includes(tag.name)
          )
        : []

      const focusedSpec: OpenApiSpec = {
        ...spec,
        paths: {
          [path]: filteredPathItem,
        },
        tags: filteredTags,
      }

      delete focusedSpec.webhooks

      // Dereferenced specs inline schemas on the operation. Dropping the
      // unused component catalog keeps ProcessSpec from walking every schema.
      if (alreadyResolved && focusedSpec.components) {
        const components = focusedSpec.components as Record<string, unknown>
        focusedSpec.components = components.securitySchemes
          ? { securitySchemes: components.securitySchemes }
          : undefined
      }

      return focusedSpec
    }
  }

  return null
}

// Builds an SEO meta description that fits inside Google's ~160-char budget.
// Tries to include as many endpoint summaries as possible, dropping them one
// by one until the resulting string fits.
export function buildOverviewMetaDescription(
  apiTitle: string,
  descriptionText: string,
  overviewEndpoints: OverviewEndpoint[]
) {
  const descriptionSentence = removeTitlePrefix(
    getFirstSentence(descriptionText),
    apiTitle
  )

  const uniqueSummaries = overviewEndpoints.reduce<string[]>(
    (summaries, { summary }) => {
      const cleanedSummary = normalizeWhitespace(summary).replace(/[.!?]+$/, '')

      if (!cleanedSummary) {
        return summaries
      }

      const isDuplicate = summaries.some(
        (existingSummary) =>
          existingSummary.toLowerCase() === cleanedSummary.toLowerCase()
      )

      if (isDuplicate) {
        return summaries
      }

      summaries.push(cleanedSummary)
      return summaries
    },
    []
  )

  const maxSummaryCount = Math.min(
    uniqueSummaries.length,
    MAX_SUMMARIES_IN_META_DESCRIPTION
  )

  for (let summaryCount = maxSummaryCount; summaryCount >= 0; summaryCount--) {
    const summaryText = uniqueSummaries.slice(0, summaryCount).join(', ')
    const suffix = summaryText ? `${summaryText}.` : ''
    const availableDescriptionLength =
      META_DESCRIPTION_MAX_LENGTH -
      apiTitle.length -
      3 -
      (suffix ? suffix.length + 1 : 0)
    const trimmedDescription = trimToLength(
      descriptionSentence,
      availableDescriptionLength
    )

    const candidate = normalizeWhitespace(
      `${apiTitle} - ${trimmedDescription}${
        trimmedDescription && suffix ? ' ' : ''
      }${suffix}`
    )

    if (candidate.length <= META_DESCRIPTION_MAX_LENGTH) {
      return candidate
    }
  }

  if (uniqueSummaries.length) {
    return trimToLength(
      `${apiTitle} - ${uniqueSummaries.join(', ')}.`,
      META_DESCRIPTION_MAX_LENGTH
    )
  }

  return trimToLength(
    `${apiTitle} - ${descriptionSentence}`,
    META_DESCRIPTION_MAX_LENGTH
  )
}

// Groups endpoints by their first OpenAPI tag, preserving the tag order from
// the spec definition and pushing untagged endpoints into a "General" bucket
// at the end.
export function buildOverviewEndpointGroups(
  tagDefinitions: OverviewTagDefinition[],
  overviewEndpoints: OverviewEndpointWithTags[]
) {
  const groupedEndpoints = new Map<string, OverviewEndpointGroup>()
  const definedTagNames = new Set(tagDefinitions.map(({ name }) => name))

  overviewEndpoints.forEach(({ tags, ...endpoint }) => {
    const tagName = tags[0] || GENERAL_OVERVIEW_TAG_NAME
    const existingGroup = groupedEndpoints.get(tagName)

    if (existingGroup) {
      existingGroup.endpoints.push(endpoint)
      return
    }

    groupedEndpoints.set(tagName, {
      tagName,
      endpoints: [endpoint],
    })
  })

  const orderedTagNames = [
    ...tagDefinitions
      .map(({ name }) => name)
      .filter((name) => groupedEndpoints.has(name)),
    ...Array.from(groupedEndpoints.keys()).filter(
      (name) => !definedTagNames.has(name) && name !== GENERAL_OVERVIEW_TAG_NAME
    ),
  ]

  if (
    groupedEndpoints.has(GENERAL_OVERVIEW_TAG_NAME) &&
    !orderedTagNames.includes(GENERAL_OVERVIEW_TAG_NAME)
  ) {
    orderedTagNames.push(GENERAL_OVERVIEW_TAG_NAME)
  }

  return orderedTagNames.reduce<OverviewEndpointGroup[]>((groups, tagName) => {
    const group = groupedEndpoints.get(tagName)

    if (group) {
      groups.push(group)
    }

    return groups
  }, [])
}
