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
  webpack: (config, options) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    config.module.rules.push({
      test: /\.pem/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'raw-loader',
        },
      ],
    })

    return config
  },
  env: {
    navigationJsonUrl: 'https://developers.vtex.com/navigation.json',
  },
  async redirects() {
    return [
      {
        source: '/vtex-rest-api/docs/:slug',
        destination: '/docs/guides/:slug',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/docs',
        destination: '/docs/guides',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs/:slug',
        destination: '/docs/guides/:slug',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/docs',
        destination: '/docs/guides',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/changelog/:slug',
        destination: '/updates/release-notes/:slug',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/changelog',
        destination: '/updates/release-notes',
        permanent: true,
      },
      {
        source: '/docs/api-guides/:slug*',
        destination: '/docs/guides/:slug*',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference/:slug*',
        destination: '/docs/api-reference/:slug*',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference/:slug*',
        destination: '/docs/api-reference/:slug*',
        permanent: true,
      },
      {
        source: '/vtex-rest-api/reference',
        destination: '/docs/api-reference',
        permanent: true,
      },
      {
        source: '/vtex-developer-docs/reference',
        destination: '/docs/api-reference',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlaiceholder(nextConfig)
