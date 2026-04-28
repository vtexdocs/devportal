/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next')

const withPatchedLitSSR = (baseConfig = {}) => ({
  ...baseConfig,
  webpack: (config, options) => {
    const { isServer, nextRuntime, webpack } = options

    config.module.rules.unshift({
      test: /\/pages\/.*\.(?:jsx?|tsx?)$/,
      exclude: /next\/dist\//,
      loader: 'imports-loader',
      options: {
        imports: ['side-effects @lit-labs/ssr-react/enable-lit-ssr.js'],
      },
    })

    if (isServer && nextRuntime === 'nodejs') {
      const nextHandleExternals = config.externals[0]
      config.externals = [
        (opt) => {
          if (
            opt.request === 'react/jsx-dev-runtime' ||
            opt.request === 'react/jsx-runtime'
          ) {
            return Promise.resolve()
          }

          return nextHandleExternals(opt)
        },
      ]
    }

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/react/, (resource) => {
        const normalizedContext = (resource.context || '').replace(/\\/g, '/')
        const isLitSsrRuntime = /labs\/ssr-react/.test(normalizedContext)

        if (resource.request === 'react/jsx-runtime' && !isLitSsrRuntime) {
          resource.request = '@lit-labs/ssr-react/jsx-runtime'
        }

        if (resource.request === 'react/jsx-dev-runtime' && !isLitSsrRuntime) {
          resource.request = '@lit-labs/ssr-react/jsx-dev-runtime'
        }
      })
    )

    if (typeof baseConfig.webpack === 'function') {
      return baseConfig.webpack(config, options)
    }

    return config
  },
})

const nextConfig = {
  experimental: {
    largePageDataBytes: 500 * 1000,
    workerThreads: false,
    // Next 13 writes build traces into `.next/trace`; Windows can hit EPERM
    // when multiple build workers race on that file, so keep local Windows
    // builds single-threaded while preserving the current Linux/CI behavior.
    cpus: process.platform === 'win32' ? 1 : 4,
  },
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 3600,
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(
    (ext) => !ext.includes('cy.')
  ),
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

module.exports = () => {
  const plugins = [withPlaiceholder, withPatchedLitSSR]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  })
}
