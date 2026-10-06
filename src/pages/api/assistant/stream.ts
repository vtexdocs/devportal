import http from 'http'
import https from 'https'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    responseLimit: false,
    externalResolver: true,
  },
}

const UPSTREAM = process.env.DOCS_ASSISTANT_STREAM_URL ?? ''

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).end('Method Not Allowed')
  }

  const query = typeof req.query.q === 'string' ? req.query.q.trim() : ''
  const locale = typeof req.query.locale === 'string' ? req.query.locale : 'en'

  if (!query) {
    return res.status(400).json({ error: 'Missing q' })
  }

  const url = new URL(UPSTREAM)
  url.searchParams.set('q', query)
  url.searchParams.set('locale', locale)

  const transport = url.protocol === 'http:' ? http : https
  const upstreamReq = transport.request(
    url,
    {
      method: 'GET',
      headers: { Accept: 'text/event-stream' },
    },
    (upstreamRes) => {
      res.writeHead(upstreamRes.statusCode || 502, {
        'Content-Type':
          String(upstreamRes.headers['content-type'] || '') ||
          'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-store',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      })
      upstreamRes.pipe(res)
    }
  )

  upstreamReq.on('error', () => {
    if (!res.headersSent) {
      res.status(502).json({ error: 'Could not reach the assistant' })
      return
    }
    if (!res.writableEnded) res.end()
  })

  req.on('close', () => {
    upstreamReq.destroy()
  })

  upstreamReq.end()
}
