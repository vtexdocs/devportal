import getNavigation from './getNavigation'
import { DocumentationTitle, UpdatesTitle } from './typings/unionTypes'

const DOMAIN_URL = 'https://developers.vtex.com/docs/api-reference'

type NavigationElement = {
  slug: string
  type: string
  method?: string
  endpoint?: string
  children?: NavigationElement[]
}

type NavigationCategory = {
  documentation: DocumentationTitle | UpdatesTitle
  categories: NavigationElement[]
}

export type SitemapUrl = {
  loc: string
  lastmod: string
}

function getEndpoint(element: NavigationElement, sitemap: boolean) {
  let urls: (SitemapUrl | string)[] = []
  if (element.children) {
    const children = element.children.flatMap((child: NavigationElement) => {
      return getEndpoint(child, sitemap)
    })
    urls = children
  }

  if (element.type === 'openapi') {
    const pathSuffix =
      element.method && element.endpoint
        ? `${element.method.toLowerCase()}${element.endpoint
            .replaceAll('{', '-')
            .replaceAll('}', '-')}`
        : ''

    const loc = `${sitemap ? DOMAIN_URL + '/' : ''}${
      element.slug
    }/${pathSuffix}`

    if (sitemap) {
      const url: SitemapUrl = { loc: '', lastmod: '' }
      url.loc = loc
      url.lastmod = new Date().toISOString()
      urls.push(url)
    } else {
      urls.push(loc)
    }
  }

  return urls
}

export default async function getReferenceEndpoints({
  sitemap,
}: {
  sitemap: boolean
}) {
  const documents = await getNavigation()
  const referenceCategories = documents.find(
    (document: NavigationCategory) => document.documentation === 'API Reference'
  )
  let references: (SitemapUrl | string)[] = []
  referenceCategories.categories.forEach((category: NavigationElement) => {
    references = references.concat(getEndpoint(category, sitemap))
  })
  return references
}
