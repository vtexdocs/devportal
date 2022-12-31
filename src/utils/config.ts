// function base64(data: string) {
//   const buff = Buffer.from(data, 'base64')
//   return buff.toString('utf8')
// }

import preval from 'next-plugin-preval'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PEM from '../../github.pem'

const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable]
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    )
  } else {
    return unvalidatedEnvironmentVariable
  }
}

export const config = preval({
  GITHUB_APPID: getEnvironmentVariable('GITHUB_APPID'),
  GITHUB_PRIVATEKEY: process.env.NETLIFY
    ? PEM
    : getEnvironmentVariable('GITHUB_PRIVATEKEY'),
  GITHUB_INSTALLATIONID: getEnvironmentVariable('GITHUB_INSTALLATIONID'),
})
