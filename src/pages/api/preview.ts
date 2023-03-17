import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const branch = req.query.branch ? req.query.branch : 'main'
  const customPreviewData = { branch: `${branch}` }

  res.setPreviewData(customPreviewData)
  res.redirect('/')
}
