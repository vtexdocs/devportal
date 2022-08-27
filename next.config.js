/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
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

module.exports = nextConfig
