/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSideSitemap } from 'next-sitemap'
import getNavigation from 'utils/getNavigation'
import getSiteUrl from 'utils/getSiteUrl'

const API_REFERENCE_PATH = '/docs/api-reference'
const apiReferenceUrl = `${getSiteUrl()}${API_REFERENCE_PATH}`

function getEndpoint(element: any) {
  let urls: any = []
  if (element.children) {
    const children = element.children.flatMap((e: any) => {
      return getEndpoint(e)
    })
    urls = children
  }

  if (element.type === 'openapi' && !element.method) {
    const url: any = {}
    url.loc = `${apiReferenceUrl}/${element.slug}`
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
  if (referenceCategories && referenceCategories.categories) {
    referenceCategories.categories.forEach((category: any) => {
      references = references.concat(getEndpoint(category))
    })
  }

  return await getServerSideSitemap(ctx, references)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
