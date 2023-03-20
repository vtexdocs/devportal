export default async function getChildDocApp(appName: string, file: string) {
  const url = `https://vtexhelp.myvtex.com/_v/devportal/${appName}/${file}`
  let data: {
    title: string
    markdown: string
    vendor: string
    latestMajor: string
    currentVersion: string
    appId: string
  } = {
    title: '',
    markdown: '',
    vendor: '',
    latestMajor: '',
    currentVersion: '',
    appId: '',
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
          markdown: result.markdown,
          vendor: result.vendor,
          latestMajor: result.latestMajor,
          currentVersion: result.currentVersion,
          appId: result.appId,
        })
    )
  return data
}
