export default async function getAppReadme(appName: string) {
  const url = `https://vtexhelp.myvtex.com/_v/devportal/${appName}`
  let data: {
    title: string
    vendor: string
    markdown: string
    latestMajor: string
    currentVersion: string
    isBeta: boolean
  } = {
    title: '',
    vendor: '',
    markdown: '',
    latestMajor: '',
    currentVersion: '',
    isBeta: false,
  }
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(
      (result) =>
        (data = {
          title: result.title,
          vendor: result.vendor,
          markdown: result.markdownWithoutHeadline,
          latestMajor: result.latestMajor,
          currentVersion: result.currentVersion,
          isBeta: result.isBeta,
        })
    )
  return data
}
