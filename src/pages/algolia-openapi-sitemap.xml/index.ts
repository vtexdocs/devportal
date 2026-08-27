/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSideSitemap } from 'next-sitemap'
import getNavigation from 'utils/getNavigation'
import { collectApiReferenceSitemapUrls } from 'utils/api-reference-sitemap'

export async function getServerSideProps(ctx: any) {
  const documents = await getNavigation()
  const referenceCategories = documents.find(
    (document: any) => document.documentation === 'API Reference'
  )

  const references = collectApiReferenceSitemapUrls(
    referenceCategories?.categories,
    { includeOverviews: false, includeEndpointHashes: true }
  )

  return await getServerSideSitemap(ctx, references)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function AlgoliaOpenapiSitemap() {}
