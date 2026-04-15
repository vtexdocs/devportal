/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import fs from 'fs'
import path from 'path'
import { Octokit } from 'octokit'
import { createAppAuth } from '@octokit/auth-app'
import { throttling } from '@octokit/plugin-throttling'
import { githubConfig } from 'utils/github-config'

const MyOctokit = Octokit.plugin(throttling)

const MAX_RETRIES = githubConfig.maxRetries
const MAX_RETRY_DELAY = githubConfig.maxRetryDelay // 60 seconds in milliseconds
const EXPONENTIAL_BACKOFF = githubConfig.useExponentialBackoff

const calculateRetryDelay = (
  retryCount: number,
  baseDelay: number
): number | null => {
  if (!EXPONENTIAL_BACKOFF) {
    const delay = baseDelay * 1000
    return delay > MAX_RETRY_DELAY ? null : delay
  }
  const delay = Math.min(1000 * Math.pow(2, retryCount), MAX_RETRY_DELAY)
  const finalDelay = Math.max(delay, baseDelay * 1000)
  return finalDelay > MAX_RETRY_DELAY ? null : finalDelay
}

const handleRateLimitExhaustion = () => {
  const error = new Error(
    `GitHub API rate limit exceeded. Please try again later.`
  )
  error.name = 'RateLimitError'
  return error
}

function getPrivateKey() {
  const pemPath = path.join(process.cwd(), 'github.pem')

  if (fs.existsSync(pemPath)) {
    return fs.readFileSync(pemPath, 'utf8')
  }

  return githubConfig.privateKey?.replace(/\\n/g, '\n')
}

const privateKey = getPrivateKey()
const hasGithubAppAuth = Boolean(
  githubConfig.appId && privateKey && githubConfig.installationId
)

const throttleConfig = {
  onRateLimit: (retryAfter: number, options: any, octokit: any) => {
    const retryCount = options.request.retryCount || 0
    const delay = calculateRetryDelay(retryCount, retryAfter)

    if (retryCount < MAX_RETRIES && delay !== null) {
      octokit.log.warn(
        `Rate limit exceeded for request ${options.method} ${options.url}`
      )
      octokit.log.warn(
        `Retrying after ${
          delay / 1000
        } seconds with exponential backoff! (Attempt ${
          retryCount + 1
        }/${MAX_RETRIES})`
      )
      return true
    }

    octokit.log.warn(
      `Rate limit exceeded for request ${options.method} ${options.url}. ${
        delay === null
          ? 'Required delay exceeds maximum allowed time.'
          : 'Max retries reached.'
      }`
    )
    throw handleRateLimitExhaustion()
  },
  onSecondaryRateLimit: (retryAfter: number, options: any, octokit: any) => {
    const retryCount = options.request.retryCount || 0
    const delay = calculateRetryDelay(retryCount, retryAfter)

    if (retryCount < MAX_RETRIES && delay !== null) {
      octokit.log.warn(
        `Secondary rate limit hit for request ${options.method} ${options.url}`
      )
      octokit.log.warn(
        `Retrying after ${
          delay / 1000
        } seconds with exponential backoff! (Attempt ${
          retryCount + 1
        }/${MAX_RETRIES})`
      )
      return true
    }

    octokit.log.warn(
      `Secondary rate limit hit for request ${options.method} ${options.url}. ${
        delay === null
          ? 'Required delay exceeds maximum allowed time.'
          : 'Max retries reached.'
      }`
    )
    throw handleRateLimitExhaustion()
  },
}

const octokitConfig = hasGithubAppAuth
  ? {
      authStrategy: createAppAuth,
      auth: {
        appId: githubConfig.appId,
        privateKey,
        installationId: githubConfig.installationId,
      },
      throttle: throttleConfig,
    }
  : {
      throttle: throttleConfig,
    }

export default new MyOctokit(octokitConfig)
