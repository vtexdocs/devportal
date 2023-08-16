import { serialize } from 'next-mdx-remote/serialize'
import { NextApiRequest, NextApiResponse } from 'next'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import { remarkCodeHike } from '@code-hike/mdx'
import myTheme from 'styles/codeHikeTheme'
import remarkImages from 'utils/remark_plugins/client-image'

async function serializeDocument(document: string) {
  let docbefore = document
  const { result, error } = escapeCurlyBraces(docbefore, 'client')
  if (error) return { serialized: null, error }
  docbefore = result
  docbefore = replaceHTMLBlocks(docbefore)
  docbefore = await replaceMagicBlocks(docbefore)
  let serialized, serializedError
  try {
    serialized = await serialize(docbefore, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          [
            remarkCodeHike,
            {
              autoImport: false,
              showCopyButton: true,
              theme: myTheme,
            },
          ],
          remarkGFM,
          remarkImages,
          remarkBlockquote,
          remarkMermaid,
        ],
        rehypePlugins: [
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ],
        useDynamicImport: true,
        format: 'mdx',
        development: process.env.NODE_ENV === 'development',
      },
    })
    serialized = JSON.parse(JSON.stringify(serialized))
  } catch (e) {
    serializedError = (e as Error).message
  }
  return { serialized, error: serializedError || '' }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const document = req.body.document // Get the document from the request body

    try {
      const result = await serializeDocument(document)
      res.status(200).json(result)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while serializing the document.' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
