import { remarkCodeHike } from '@code-hike/mdx'
import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkImages from 'utils/remark_plugins/plaiceholder'
import getHeadings from './getHeadings'
import { Item } from '@vtexdocs/components'
import {
  remarkBlockquote,
  remarkReadingTime,
  remarkMermaid,
} from '@vtexdocs/components/remark'
import { type CompileOptions as OriginalCompileOptions } from '@mdx-js/mdx'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type SerializeMdxOptions = Omit<
  OriginalCompileOptions,
  'outputFormat' | 'providerImportSource'
>

export async function serializeWithFallback({
  content,
  headingList = [],
  logger,
  path,
  extraRehypePlugins = [],
}: {
  content: string
  headingList?: Item[]
  logger: { warn: (msg: string) => void; error: (msg: string) => void }
  path: string
  extraRehypePlugins?: unknown[]
}) {
  const highlightPlugin = [
    rehypeHighlight,
    { languages: { hljsCurl }, ignoreMissing: true },
  ]

  const mdxOptions = (headingList: Item[] = []) => ({
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
      remarkReadingTime,
    ],
    useDynamicImport: true,
    rehypePlugins: [highlightPlugin, ...extraRehypePlugins],
    format: 'mdx',
  })

  const mdOptions = (headingList: Item[] = []) => ({
    remarkPlugins: [
      remarkGFM,
      remarkImages,
      [getHeadings, { headingList }],
      remarkBlockquote,
      remarkMermaid,
      remarkReadingTime,
    ],
    rehypePlugins: [highlightPlugin, ...extraRehypePlugins],
    format: 'md',
  })

  try {
    // Try to serialize as MDX first
    const serialized: MDXRemoteSerializeResult = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: mdxOptions(headingList) as SerializeMdxOptions,
    })
    return serialized
  } catch (error) {
    logger.warn(
      `MDX serialization failed for ${path}, falling back to MD.\n${error}`
    )

    try {
      const serialized: MDXRemoteSerializeResult = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: mdOptions(headingList) as SerializeMdxOptions,
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
