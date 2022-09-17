// function base64(data: string) {
//   const buff = Buffer.from(data, 'base64')
//   return buff.toString('utf8')
// }

import fs from 'fs'
import preval from 'next-plugin-preval'

const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable]
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    )
  } else {
    if (process.env.NETLIFY) {
      return unvalidatedEnvironmentVariable
    } else {
      return unvalidatedEnvironmentVariable
    }
  }
}

export const config = preval({
  GITHUB_APPID: getEnvironmentVariable('GITHUB_APPID'),
  GITHUB_PRIVATEKEY: process.env.NETLIFY
    ? fs.readFileSync('github.pem')
    : getEnvironmentVariable('GITHUB_PRIVATEKEY'),
  GITHUB_INSTALLATIONID: getEnvironmentVariable('GITHUB_INSTALLATIONID'),
})
