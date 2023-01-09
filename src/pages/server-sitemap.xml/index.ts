/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSideSitemap } from 'next-sitemap'
import getNavigation from 'utils/getNavigation'

const DOMAIN_URL = 'https://developers.vtex.com/docs/api-reference'

function getEndpoint(element: any) {
  let urls: any = []
  if (element.children) {
    const children = element.children.flatMap((e: any) => {
      return getEndpoint(e)
    })
    urls = children
  }

  if (element.type === 'openapi') {
    const url: any = {}
    const pathSuffix = element.method
      ? `#${element.method.toLowerCase()}-${element.endpoint
          .replaceAll('{', '-')
          .replaceAll('}', '-')}`
      : ''
    url.loc = `${DOMAIN_URL}/${element.slug}/${pathSuffix}`
    url.lastmod = new Date().toISOString()
    urls.push(url)
  }
  return urls
}

export async function getServerSideProps(ctx: any) {
  const documents = await getNavigation()
  const referenceCategories = documents.find(
    (document: any) => document.documentation === 'API Reference'
  )
  let references: any[] = []
  referenceCategories.categories.forEach((category: any) => {
    references = references.concat(getEndpoint(category))
  })

  return await getServerSideSitemap(ctx, references)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
