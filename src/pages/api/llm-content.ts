import type { NextApiRequest, NextApiResponse } from 'next'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import { fetchFromRawGithub } from 'utils/github-utils'

// GET /api/llm-content?section=<tracks|tutorials|faq|announcements|known-issues|troubleshooting>&locale=<en|es|pt>&slug=<slug>&branch=<optional>
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET')
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const pathParam = String(req.query.path || '').trim()

    const raw = await fetchFromRawGithub(
      'vtexdocs',
      'dev-portal-content',
      'main',
      pathParam
    )

    // Remove frontmatter (--- ... ---) from the beginning of the content
    const removeFrontmatter = (markdown: string): string => {
      const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/
      return markdown.replace(frontmatterRegex, '').trim()
    }

    const withoutFrontmatter = removeFrontmatter(raw)
    const content = escapeCurlyBraces(replaceHTMLBlocks(withoutFrontmatter))

    // Cache headers
    // Default to disabling cache unless explicitly set to 'false'
    const disableCache =
      (process.env.DISABLE_LLM_CONTENT_CACHE ?? 'true') === 'true'
    if (disableCache) {
      // Fully disable caching for testing
      res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, max-age=0'
      )
      res.setHeader('Pragma', 'no-cache')
      res.setHeader('Expires', '0')
      res.setHeader('Netlify-CDN-Cache-Control', 'no-store')
    } else {
      // Default: 5m s-maxage, 30m stale-while-revalidate
      res.setHeader(
        'Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=1800'
      )
      res.setHeader(
        'Netlify-CDN-Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=1800'
      )
    }

    return res.status(200).json({
      path: pathParam,
      content,
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('llm-content API error', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
