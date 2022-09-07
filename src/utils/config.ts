function base64(data: string) {
  const buff = Buffer.from(data, 'base64')
  return buff.toString('ascii')
}

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

export const config = {
  GITHUB_APPID: getEnvironmentVariable('GITHUB_APPID'),
  GITHUB_PRIVATEKEY: process.env.NETLIFY
    ? base64(getEnvironmentVariable('GITHUB_PRIVATEKEY'))
    : getEnvironmentVariable('GITHUB_PRIVATEKEY'),
  GITHUB_INSTALLATIONID: getEnvironmentVariable('GITHUB_INSTALLATIONID'),
}
