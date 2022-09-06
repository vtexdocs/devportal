/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'

const MyOctokit = Octokit.plugin(throttling)

const octokit = new MyOctokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GITHUB_APPID,
    privateKey: process.env.GITHUB_PRIVATEKEY,
    installationId: process.env.GITHUB_INSTALLATIONID,
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

export default async function getGithubFile(
  owner: string,
  repo: string,
  ref: string,
  path: string
): Promise<string> {
  console.log('getGithubFile')
  const response = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repo,
    path: path,
    ref: ref,
    mediaType: {
      format: 'raw',
    },
  })
  // @ts-ignore
  return response.data
}
