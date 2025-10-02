import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const formAction = process.env.FEEDBACK_FORM_ACTION

  if (!formAction) {
    return res
      .status(500)
      .json({ error: 'Missing FEEDBACK_FORM_ACTION env var' })
  }

  try {
    const { name, email, feedback, url, type } = req.body || {}
    const platform = 'developers.vtex.com'
    const followup = email.length > 0 ? 'Yes' : 'No'

    if (!feedback || typeof feedback !== 'string') {
      return res.status(400).json({ error: 'Message is required' })
    }

    const upstream = await fetch(formAction, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        platform,
        name,
        email,
        feedback,
        url,
        type,
        followup,
      }),
    })

    if (upstream.status < 200 || upstream.status >= 400) {
      const text = await upstream.text().catch(() => '')
      return res
        .status(502)
        .json({ error: 'Upstream error', status: upstream.status, text })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Unexpected error', details: String(error) })
  }
}
