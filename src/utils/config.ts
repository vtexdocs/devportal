const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable]
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    )
  } else {
    if (process.env.NETLIFY) {
      console.log('NETLIFY')
      return unvalidatedEnvironmentVariable.replace(/KEY/gm, 'TESTE')
    } else {
      return unvalidatedEnvironmentVariable
    }
  }
}

export const config = {
  GITHUB_APPID: getEnvironmentVariable('GITHUB_APPID'),
  GITHUB_PRIVATEKEY: getEnvironmentVariable('GITHUB_PRIVATEKEY'),
  GITHUB_INSTALLATIONID: getEnvironmentVariable('GITHUB_INSTALLATIONID'),
}
