/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  //disable-eslint-line
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
  experiments: {
    topLevelAwait: true,
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
      'https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/navigation.json',
  },
}

module.exports = withBundleAnalyzer({
  nextConfig,
})
