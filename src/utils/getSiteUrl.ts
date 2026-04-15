const DEFAULT_SITE_URL = 'https://developers.vtex.com'

export default function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL

  return siteUrl.replace(/\/+$/, '')
}
