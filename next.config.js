/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 3600,
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config
  },
  env: {
    navigationJsonUrl:
      'https://vtex-dev-portal-navigation.fra1.cdn.digitaloceanspaces.com/navigation.json',
  },
  async redirects() {
    return [
      {
        source: '/vtex-rest-api/docs/:slug',
        destination: '/docs/api-guides/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlaiceholder(nextConfig)
