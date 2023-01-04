const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL
module.exports = {
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
