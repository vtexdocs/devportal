export const config = {
  api: {
    bodyParser: false,
  },
}

import { apiSlugMap } from 'utils/api-slug-mapping'

const referencePaths = objectFlip(apiSlugMap)

function objectFlip(obj: { [x: string]: string }) {
  return Object.keys(obj).reduce((ret, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ret[obj[key]] = key
    return ret
  }, {})
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  const { slug } = req.query
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const path = referencePaths[slug] || ''
  if (path) {
    const response = await fetch(
      `https://raw.githubusercontent.com/vtex/openapi-schemas/master/PostmanCollections/${path}.json`
    )
    const body = await response.text()
    res
      .setHeader(
        'Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=250'
      )
      .send(body)
  } else {
    res.status(404)
  }
}
