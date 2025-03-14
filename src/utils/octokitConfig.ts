/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { config } from 'utils/config'

const MyOctokit = Octokit.plugin(throttling)

const MAX_RETRIES = 5
const MAX_RETRY_DELAY = 60000 // 60 seconds in milliseconds
const EXPONENTIAL_BACKOFF = true

const calculateRetryDelay = (retryCount: number, baseDelay: number): number => {
  if (!EXPONENTIAL_BACKOFF) return baseDelay * 1000
  const delay = Math.min(1000 * Math.pow(2, retryCount), MAX_RETRY_DELAY)
  return Math.max(delay, baseDelay * 1000) // Ensure we wait at least the suggested retryAfter time
}

const handleRateLimitExhaustion = () => {
  const error = new Error(
    `GitHub API rate limit exceeded. Please try again later.`
  )
  error.name = 'RateLimitError'
  return error
}

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

      if (retryCount < MAX_RETRIES) {
        const delay = calculateRetryDelay(retryCount, retryAfter)

        octokit.log.warn(
          `Rate limit exceeded for request ${options.method} ${options.url}`
        )
        octokit.log.info(
          `Retrying after ${
            delay / 1000
          } seconds with exponential backoff! (Attempt ${
            retryCount + 1
          }/${MAX_RETRIES})`
        )
        return true
      }

      octokit.log.warn(
        `Rate limit exceeded for request ${options.method} ${options.url}. Max retries (${MAX_RETRIES}) reached.`
      )
      throw handleRateLimitExhaustion()
    },
    onSecondaryRateLimit: (retryAfter: number, options: any, octokit: any) => {
      const retryCount = options.request.retryCount || 0

      if (retryCount < MAX_RETRIES) {
        const delay = calculateRetryDelay(retryCount, retryAfter)

        octokit.log.warn(
          `Secondary rate limit hit for request ${options.method} ${options.url}`
        )
        octokit.log.info(
          `Retrying after ${
            delay / 1000
          } seconds with exponential backoff! (Attempt ${
            retryCount + 1
          }/${MAX_RETRIES})`
        )
        return true
      }

      octokit.log.warn(
        `Secondary rate limit hit for request ${options.method} ${options.url}. Max retries (${MAX_RETRIES}) reached.`
      )
      throw handleRateLimitExhaustion()
    },
  },
}

export default new MyOctokit(octokitConfig)
