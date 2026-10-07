import type { NextApiRequest, NextApiResponse } from 'next'

const UPSTREAM = process.env.DOCS_ASSISTANT_FEEDBACK_URL || ''

const FEEDBACK_VALUES = new Set(['positive', 'negative'])

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { requestId, feedback, comment } = req.body || {}

  if (typeof requestId !== 'string' || !requestId.trim()) {
    return res.status(400).json({ error: 'Missing requestId' })
  }

  if (typeof feedback !== 'string' || !FEEDBACK_VALUES.has(feedback)) {
    return res.status(400).json({ error: 'Invalid feedback' })
  }

  const payload: {
    requestId: string
    feedback: string
    comment?: string
  } = {
    requestId: requestId.trim(),
    feedback,
  }

  if (typeof comment === 'string' && comment.trim()) {
    payload.comment = comment.trim()
  }

  try {
    const upstream = await fetch(UPSTREAM, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const text = await upstream.text()
    const contentType = upstream.headers.get('content-type')
    if (contentType) res.setHeader('Content-Type', contentType)
    return res.status(upstream.status).send(text)
  } catch {
    return res.status(502).json({ error: 'Could not send feedback' })
  }
}
