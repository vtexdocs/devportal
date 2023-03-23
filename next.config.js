/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = {
  experimental: {
    largePageDataBytes: 500 * 1000,
    workerThreads: false,
    cpus: 4,
  },
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
    contentOrg: '',
    contentRepo: '',
    contentBranch: '',
  },
  async redirects() {
    return []
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = withPlaiceholder(nextConfig)
