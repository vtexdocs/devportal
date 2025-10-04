import { remarkCodeHike } from '@code-hike/mdx'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import getHeadings from './getHeadings'
import { Item } from '@vtexdocs/components'
import { type CompileOptions as OriginalCompileOptions } from '@mdx-js/mdx'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkMermaid from './remark_plugins/mermaid'

export type SerializeMdxOptions = Omit<
  OriginalCompileOptions,
  'outputFormat' | 'providerImportSource'
>

export async function serializeWithFallback({
  content,
  headingList = [],
  logger,
  path,
}: {
  content: string
  headingList?: Item[]
  logger: { warn: (msg: string) => void; error: (msg: string) => void }
  path: string
}) {
  const mdxOptionsBase = (format: 'md' | 'mdx', headingList: Item[] = []) => ({
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          autoImport: false,
          showCopyButton: true,
          lineNumbers: true,
          skipLanguages: ['mermaid'],
          staticMediaQuery: 'not screen, (max-width: 850px)',
          theme: 'poimandres',
        },
      ],
      remarkGFM,
      remarkImages,
      [getHeadings, { headingList }],
      remarkBlockquote,
      remarkMermaid,
    ],
    useDynamicImport: true,
    rehypePlugins: [
      [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
    ],
    format,
  })

  try {
    // Try to serialize as MDX first
    const serialized: MDXRemoteSerializeResult = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: mdxOptionsBase('mdx', headingList) as SerializeMdxOptions,
    })
    return serialized
  } catch (error) {
    logger.warn(
      `MDX serialization failed for ${path}, falling back to MD.\n${error}`
    )

    try {
      const serialized: MDXRemoteSerializeResult = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: mdxOptionsBase('md', headingList) as SerializeMdxOptions,
      })
      return serialized
    } catch (fallbackError) {
      logger.error(
        `Both MDX and MD serialization failed for ${path}\n${fallbackError}`
      )
      return null
    }
  }
}
