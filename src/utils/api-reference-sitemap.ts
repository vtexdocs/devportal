import { getOverviewEndpointHash } from 'utils/api-reference-overview'
import getSiteUrl from 'utils/getSiteUrl'

const API_REFERENCE_PATH = '/docs/api-reference'

export type ApiReferenceSitemapEntry = {
  loc: string
  lastmod: string
}

type SitemapNode = {
  type?: string
  slug?: string
  method?: string
  endpoint?: string
  children?: SitemapNode[]
}

type SitemapOptions = {
  includeOverviews: boolean
  includeEndpointHashes: boolean
}

function walkApiReferenceNode(
  element: SitemapNode,
  apiReferenceUrl: string,
  options: SitemapOptions,
  urls: ApiReferenceSitemapEntry[]
) {
  if (element.children) {
    element.children.forEach((child) =>
      walkApiReferenceNode(child, apiReferenceUrl, options, urls)
    )
  }

  if (element.type !== 'openapi' || !element.slug) {
    return
  }

  const lastmod = new Date().toISOString()

  if (!element.method) {
    if (options.includeOverviews) {
      urls.push({
        loc: `${apiReferenceUrl}/${element.slug}`,
        lastmod,
      })
    }
    return
  }

  if (options.includeEndpointHashes) {
    const hash = getOverviewEndpointHash(element.method, element.endpoint ?? '')
    urls.push({
      loc: `${apiReferenceUrl}/${element.slug}#${hash}`,
      lastmod,
    })
  }
}

export function collectApiReferenceSitemapUrls(
  categories: SitemapNode[] | undefined,
  options: SitemapOptions
) {
  const apiReferenceUrl = `${getSiteUrl()}${API_REFERENCE_PATH}`
  const urls: ApiReferenceSitemapEntry[] = []

  categories?.forEach((category) =>
    walkApiReferenceNode(category, apiReferenceUrl, options, urls)
  )

  return urls
}
