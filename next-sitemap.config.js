/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL

module.exports = {
  transform: async (config, path) => {
    const noIndexRegex = /(<meta.*(content="noindex").*\/>)/gm
    const filepath = `./.next/server/pages/en${path}.html`

    if (fs.existsSync(filepath)) {
      try {
        const data = await fs.promises.readFile(filepath, 'utf8')

        if (data.match(noIndexRegex)) return null
      } catch (error) {
        console.error('err', error)
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  siteUrl,
  exclude: ['/404', '/500', '/docs/api-reference*', '/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}server-sitemap.xml`],
  },
}
