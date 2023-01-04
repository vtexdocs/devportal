/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSideSitemap } from 'next-sitemap'
import getNavigation from 'utils/getNavigation'

const DOMAIN_URL = 'https://developers.vtex.com/docs/api-reference'

function getEndpoint(element: any) {
  if (element.type === 'openapi') {
    const url: any = {}
    url.loc = `${DOMAIN_URL}/${element.slug}/#${element.method.toLowerCase()}-${
      element.endpoint
    }`
    url.lastmod = new Date().toISOString()
    return url
  }
  if (element.children) {
    const children = element.children.flatMap((e: any) => {
      return getEndpoint(e)
    })
    return children
  }
  return []
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
