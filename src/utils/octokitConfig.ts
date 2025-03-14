/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { config } from 'utils/config'

const MyOctokit = Octokit.plugin(throttling)

const MAX_RETRIES = 3
const MAX_RETRY_AFTER = 30 // maximum seconds to wait for retry

const octokitConfig = {
  authStrategy: createAppAuth,
  auth: {
    appId: config.GITHUB_APPID,
    privateKey: config.GITHUB_PRIVATEKEY,
    installationId: config.GITHUB_INSTALLATIONID,
  },
  throttle: {
    onRateLimit: (retryAfter: number, options: any, octokit: any) => {
      const retryCount = options.request.retryCount || 0

      if (retryCount < MAX_RETRIES && retryAfter < MAX_RETRY_AFTER) {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`
        )
        octokit.log.info(
          `Retrying after ${retryAfter} seconds! (Attempt ${
            retryCount + 1
          }/${MAX_RETRIES})`
        )
        return true
      }

      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}. Max retries reached or retry time too long.`
      )
      return false
    },
    onSecondaryRateLimit: (retryAfter: number, options: any, octokit: any) => {
      const retryCount = options.request.retryCount || 0

      if (retryCount < MAX_RETRIES && retryAfter < MAX_RETRY_AFTER) {
        octokit.log.warn(
          `Secondary rate limit hit for request ${options.method} ${options.url}`
        )
        octokit.log.info(
          `Retrying after ${retryAfter} seconds! (Attempt ${
            retryCount + 1
          }/${MAX_RETRIES})`
        )
        return true
      }

      octokit.log.warn(
        `Secondary rate limit hit for request ${options.method} ${options.url}. Max retries reached or retry time too long.`
      )
      return false
    },
  },
}

export default new MyOctokit(octokitConfig)
