import filterOpenAPI from 'utils/filterOpenAPI'

export const config = {
  api: {
    bodyParser: false,
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  const { slug } = req.query
  const filteredOpenAPI = await filterOpenAPI(slug)

  if (filteredOpenAPI) {
    res
      .setHeader(
        'Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=250'
      )
      .send(filteredOpenAPI)
  } else {
    res.status(404)
  }
}
