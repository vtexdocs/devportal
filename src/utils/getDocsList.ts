/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
const docsList = {
  'billing-options': 'docs/guides/Getting Started/catalog-overview.md',
}

import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { config } from 'utils/config'

const MyOctokit = Octokit.plugin(throttling)

const octokit = new MyOctokit({
  authStrategy: createAppAuth,
  auth: {
    appId: config.GITHUB_APPID,
    privateKey: process.env.NETLIFY
      ? (config.GITHUB_PRIVATEKEY.split('\\n').join('\n') + '/n').replace(
          /\\n/gm,
          '\n'
        )
      : config.GITHUB_PRIVATEKEY,
    installationId: config.GITHUB_INSTALLATIONID,
  },
  throttle: {
    onRateLimit: (retryAfter: any, options: any, octokit: any) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      )
      octokit.log.info(`Retrying after ${retryAfter} seconds!`)
      return true
    },
    onSecondaryRateLimit: (retryAfter: any, options: any, octokit: any) => {
      retryAfter = retryAfter
      // does not retry, only logs a warning
      octokit.log.warn(
        `SecondaryRateLimit detected for request ${options.method} ${options.url}`
      )
    },
  },
})
async function getGithubTree(org: string, repo: string, ref: string) {
  const response = octokit.request(
    'GET /repos/{org}/{repo}/git/trees/{ref}?recursive=true',
    {
      org: org,
      repo: repo,
      ref: ref,
    }
  )

  return (await response).data
}

//https://api.github.com/repos/vtexdocs/devportal/commits?path=README.md

export default async function getDocsList() {
  console.log('getDocsList')
  const repoTree = await getGithubTree(
    'vtexdocs',
    'dev-portal-content',
    'first-docs'
  )
  // @ts-ignore
  repoTree.tree.map((node: any) => {
    const path = node.path
    const re = /^(?<path>.+\/)*(?<filename>.+)\.(?<filetype>.+)$/
    if (path.startsWith('docs')) {
      const match = path.match(re)
      const filename = match?.groups?.filename
      if (filename) {
        ;(docsList as any)[filename] = path
      }
    }
  })
  return docsList
}
