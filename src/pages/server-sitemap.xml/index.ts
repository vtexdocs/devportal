/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSideSitemap } from 'next-sitemap'
import getReferenceEndpoints, { SitemapUrl } from 'utils/getReferenceEndpoints'

export async function getServerSideProps(ctx: any) {
  const references = (await getReferenceEndpoints({
    sitemap: true,
  })) as SitemapUrl[]

  return await getServerSideSitemap(ctx, references)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
