import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/search?q=<query>&limit=<1-100>&locale=<en>
//
// Proxies the request to the VTEX Docs Hybrid Search API
// (BM25 + vector similarity, fused via Reciprocal Rank Fusion).
//
// Required env vars (server-side only):
//   - HS_API_ENDPOINT: Base URL of the Hybrid Search API
//                     (e.g., https://vtexdocs-edge.vtex.com)
//   - HS_API_KEY:      Internal access key sent as `X-Internal-Access-Key`.

const DEFAULT_LIMIT = 10
const MAX_LIMIT = 100
const REQUEST_TIMEOUT_MS = 15_000
const SOURCE = 'dev-portal'

function clampLimit(raw: unknown): number {
  const parsed = Number(raw)
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_LIMIT
  return Math.min(Math.max(1, Math.floor(parsed)), MAX_LIMIT)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const q = String(req.query.q || '').trim()
  const locale = String(req.query.locale || '').trim()
  const limit = clampLimit(req.query.limit)

  if (!q) {
    return res
      .status(400)
      .json({ error: 'Missing required query parameter: q' })
  }

  const endpoint = process.env.HS_API_ENDPOINT
  const apiKey = process.env.HS_API_KEY

  if (!endpoint || !apiKey) {
    // eslint-disable-next-line no-console
    console.error('search API: HS_API_ENDPOINT or HS_API_KEY is not configured')
    return res
      .status(503)
      .json({ error: 'Hybrid search is not configured on this environment' })
  }

  const upstream = new URL('/api/hybrid-search', endpoint)
  upstream.searchParams.set('q', q)
  upstream.searchParams.set('limit', String(limit))
  upstream.searchParams.set('source', SOURCE)
  if (locale) upstream.searchParams.set('locale', locale)

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(upstream.toString(), {
      method: 'GET',
      headers: {
        'X-Internal-Access-Key': apiKey,
        Accept: 'application/json',
      },
      signal: controller.signal,
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      // eslint-disable-next-line no-console
      console.error(
        `search API: upstream returned ${response.status}`,
        text.slice(0, 500)
      )
      const status = response.status >= 500 ? 502 : response.status
      return res.status(status).json({
        error: 'Hybrid search request failed',
        upstreamStatus: response.status,
      })
    }

    const data = (await response.json()) as { results?: unknown[] }

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=300'
    )
    res.setHeader(
      'Netlify-CDN-Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=300'
    )
    res.setHeader('Vary', 'Accept-Language')

    return res.status(200).json({
      query: q,
      locale: locale || null,
      limit,
      total: data.results?.length ?? 0,
      results: data.results ?? [],
    })
  } catch (err) {
    const isAbort =
      err instanceof Error &&
      (err.name === 'AbortError' || err.message.includes('aborted'))

    // eslint-disable-next-line no-console
    console.error('search API error', err)

    if (isAbort) {
      return res.status(504).json({ error: 'Hybrid search request timed out' })
    }

    return res.status(500).json({ error: 'Internal Server Error' })
  } finally {
    clearTimeout(timeoutId)
  }
}
