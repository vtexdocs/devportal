/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { config } from 'utils/config'

const MyOctokit = Octokit.plugin(throttling)

function base64(data: string) {
  const buff = Buffer.from(data, 'base64')
  return buff.toString('utf-8')
}

const octokit = new MyOctokit({
  authStrategy: createAppAuth,
  auth: {
    appId: config.GITHUB_APPID,
    privateKey: process.env.NETLIFY
      ? base64(config.GITHUB_PRIVATEKEY)
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
