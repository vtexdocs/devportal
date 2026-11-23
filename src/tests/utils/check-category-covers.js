/**
 * Requests every category cover page that the sidebar links to and reports
 * the ones that do not respond with 200.
 *
 * Usage: node src/tests/utils/check-category-covers.js [baseUrl]
 */
const BASE_URL = process.argv[2] || 'http://localhost:3001'
const NAVIGATION_URL =
  process.env.NAVIGATION_URL || 'https://developers.vtex.com/navigation.json'
// Must match getCategoryCoverHref in src/utils/navigation-utils.ts
const CATEGORY_COVER_URL = /^\/docs\/guides\/[^/]+$/

const buildNavUrl = (slugPrefix, slug) =>
  `/${slugPrefix}/${slug}`.replace(/\/+/g, '/')

const collectCoverUrls = (items, slugPrefix, urls) => {
  for (const item of items ?? []) {
    if (
      item.type === 'category' &&
      typeof item.slug === 'string' &&
      item.children?.length > 0
    ) {
      const url = buildNavUrl(slugPrefix, item.slug)
      if (CATEGORY_COVER_URL.test(url)) urls.add(url)
    }
    collectCoverUrls(item.children, slugPrefix, urls)
  }
}

const main = async () => {
  const { navbar } = await (await fetch(NAVIGATION_URL)).json()
  const urls = new Set()
  for (const section of navbar) {
    collectCoverUrls(section.categories, section.slugPrefix ?? '', urls)
  }

  console.log(`Checking ${urls.size} category covers on ${BASE_URL}`)

  const failures = []
  for (const url of urls) {
    try {
      const response = await fetch(`${BASE_URL}${url}`, { redirect: 'manual' })
      console.log(`${response.status} ${url}`)
      if (response.status !== 200) failures.push(`${response.status} ${url}`)
    } catch (error) {
      console.log(`ERR ${url}`)
      failures.push(`ERR ${url} (${error.message})`)
    }
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} category covers failed:`)
    failures.forEach((failure) => console.error(failure))
    process.exit(1)
  }

  console.log('\nAll category covers responded with 200.')
}

main()
