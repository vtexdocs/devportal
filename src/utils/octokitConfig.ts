/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { config } from 'utils/config'
import fs from 'fs'
import crypto from 'crypto'

const hashNode = (val: crypto.BinaryLike) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(crypto.createHash('sha256').update(val).digest('base64')),
      0
    )
  )

const MyOctokit = Octokit.plugin(throttling)

const privateKey = process.env.NETLIFY
  ? fs.readFileSync('github.pem')
  : config.GITHUB_PRIVATEKEY

const octokitConfig = {
  authStrategy: createAppAuth,
  auth: {
    appId: config.GITHUB_APPID,
    privateKey: privateKey,
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
}

if (process.env.NETLIFY) {
  console.log(
    JSON.stringify({
      privateKey,
      sha256: await hashNode(privateKey),
    })
  )
}

export default new MyOctokit(octokitConfig)
