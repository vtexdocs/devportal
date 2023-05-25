import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import octokit from 'utils/octokitConfig'

import { authOptions } from './auth/[...nextauth]'

async function getGithubBranch(org: string, repo: string, branch: string) {
  const response = octokit.request(
    'GET /repos/{owner}/{repo}/branches/{branch}',
    {
      owner: org,
      repo: repo,
      branch: branch,
    }
  )
  const branchExists = (await response).status == 200 ? true : false

  return branchExists
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const branch = req.query.branch ? (req.query.branch as string) : 'main'

    if (req.query.branch) {
      let branchExists
      try {
        branchExists = await getGithubBranch(
          'vtexdocs',
          'dev-portal-content',
          branch
        )
      } catch {
        branchExists = false
      }
      if (branchExists) {
        const customPreviewData = {
          branch: `${branch}`,
        }
        res.setPreviewData(customPreviewData)
      }
    }
    res.redirect('/')
  } else {
    res
      .status(401)
      .json({ err: 'You need to be authenticated to use this route' })
  }
}
