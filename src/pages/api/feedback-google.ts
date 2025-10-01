import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const formAction =
    'https://docs.google.com/forms/d/e/1FAIpQLScV7i3RHjESPkIwBYeVfNtwjE7fhWjrde_7fMt5ynIteCMR0g/formResponse'

  try {
    const { name, email, message } = req.body || {}

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' })
    }

    const form = new URLSearchParams()
    const entryMessage = 'entry.1364853586'
    const entryName = 'entry.1509064102'
    const entryEmail = 'entry.357850341'
    //const entryType = 'entry.1591633300'
    form.append(entryMessage, message)
    form.append(entryName, name)
    form.append(entryEmail, email)
    //form.append(entryType, type)
    //form.append('entry.1799503232', 'developers.vtex.com')
    //form.append('entry.326955045', 'Yes')
    //form.append('entry.1696159737', '')
    //form.append('entry.1036201995', 'No')
    //form.append(entryMessage, message)
    if (entryName && typeof name === 'string' && name.trim()) {
      form.append(entryName, name)
    }
    if (entryEmail && typeof email === 'string' && email.trim()) {
      form.append(entryEmail, email)
    }

    const response = await fetch(formAction, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: form.toString(),
    })

    // Google Forms often returns 200 with an HTML page; treat non-network failures as success
    if (!response.ok) {
      // Still attempt to read text for debugging
      const text = await response.text().catch(() => '')
      return res
        .status(502)
        .json({ error: 'Upstream error', status: response.status, text })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Unexpected error', details: String(error) })
  }
}
