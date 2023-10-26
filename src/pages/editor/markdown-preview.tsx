import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Text, Flex } from '@vtex/brand-ui'
import CopyButton from 'components/copy-button'
import ResizeIcon from 'components/icons/resize-icon'
import Auth from 'components/auth'
import PageHeader from 'components/page-header'
import type { Page } from 'utils/typings/types'
import image from '../../../public/images/editor.png'

import { MarkdownRenderer } from '@components-library/index.mjs'
import { serialize } from 'next-mdx-remote/serialize'

import remarkGFM from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import hljsCurl from 'highlightjs-curl'
import remarkBlockquote from 'utils/remark_plugins/rehypeBlockquote'
import remarkMermaid from 'utils/remark_plugins/mermaid'
import escapeCurlyBraces from 'utils/escapeCurlyBraces'
import replaceHTMLBlocks from 'utils/replaceHTMLBlocks'
import replaceMagicBlocks from 'utils/replaceMagicBlocks'
import remarkImages from 'utils/remark_plugins/client-image'

import styles from 'styles/document-editor'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
  isPRPreview: boolean
  isPreview: boolean
}

import Prism from 'prismjs'
import 'prismjs/components/prism-markdown'
import Editor from 'react-simple-code-editor'

const templateDoc = `---
title: "Preview"
slug: "preview-document-slug"
hidden: false
createdAt: "2023-06-21T10:45:55.338Z"
updatedAt: "2023-06-21T11:40:35.480Z"
excerpt: "Lorem ipsum"
---

## Template Title
### Template subtitle

Text Template: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus diam, lacinia vitae sem quis, interdum ullamcorper metus. Maecenas vel mauris lectus. Quisque nec elementum nisl. Nulla arcu dui, sodales et dui non, feugiat ullamcorper lectus.

[📣 Link Example](https://developers.vtex.com/)

![Image Example](https://cdn.jsdelivr.net/gh/vtexdocs/dev-portal-content@main/images/contributing-4.png)

## Bullet points template

- First : any text.
  - subtopic
- **Second (Bold)** : any text.
- *Third (Italic)* : any text.
- \`Fourth (Code)\` : any text.

**Code Block Template**

\`\`\`json
{
    "String": "value",
    "Nullable": null,
    "Boolean": true,
    "Numerical": 772,
    "attribute": {
      "value": 2,
    }, 
}
\`\`\`

## Table template

| Name | Description |
| :---: | --- |
|\`VTEX\` | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| [Developers Portal](https://developers.vtex.com) | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |

>❗ This is a Danger callout.

>\u26A0 This is a Warning callout.

>\u2705 This is a Success callout.

>ℹ️ This is an Info callout.
`

async function serializing(
  document: string
): Promise<{ serialized: MDXRemoteSerializeResult | null; error: string }> {
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
          remarkGFM,
          remarkImages,
          remarkBlockquote,
          remarkMermaid,
        ],
        rehypePlugins: [
          [rehypeHighlight, { languages: { hljsCurl }, ignoreMissing: true }],
        ],
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

const MarkdownPreviewPage: Page<Props> = () => {
  const [documentContent, setDocumentContent] = useState(templateDoc)
  const [serializedDoc, setSerializedDoc] =
    useState<MDXRemoteSerializeResult | null>()
  const [error, setError] = useState('')
  const [resizeValue, setResizeValue] = useState(0)

  const missingProperties = () => {
    const frontmatterKeys = [
      'title',
      'slug',
      'hidden',
      'createdAt',
      'updatedAt',
      'excerpt',
    ]
    const missing = frontmatterKeys.filter(
      (key) => !serializedDoc?.frontmatter?.hasOwnProperty(key)
    )
    let result = ''
    for (let i = 0, n = missing.length; i < n; i++) {
      result += missing[i] + `${i < n - 1 ? ', ' : ''}`
    }
    return result
  }

  const resizeHandler = (mouseDownEvent: MouseEvent) => {
    const startPosition = mouseDownEvent.pageX
    mouseDownEvent.preventDefault()

    function onMouseMove(mouseMoveEvent: MouseEvent) {
      setResizeValue(
        (resizeValue > 0 ? resizeValue : startPosition + 24) +
          (mouseMoveEvent.pageX - startPosition)
      )
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove)
    }

    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp, { once: true })
  }

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll()
    }
    highlight()
  }, [])

  useEffect(() => {
    let active = true
    load()
    return () => {
      active = false
    }

    async function load() {
      if (!active) {
        return
      }
      const { serialized, error } = await serializing(documentContent)
      setError(error)
      setSerializedDoc(serialized)
    }
  }, [documentContent])

  return (
    <Auth>
      <Head>
        <title>Markdown Preview</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Box sx={styles.previewContainer}>
        <PageHeader
          title="Markdown Preview"
          description="Use the markdown editor below and preview the rendered page to the side."
          imageUrl={image}
          imageAlt="Markdown Preview"
        />
        <Flex sx={styles.writeBox}>
          <Box
            style={resizeValue > 0 ? { width: resizeValue } : null}
            sx={styles.writeContainer}
          >
            <Flex
              sx={styles.resizeButton}
              onMouseDown={(e: MouseEvent) => resizeHandler(e)}
            >
              <ResizeIcon />
            </Flex>
            <Box sx={styles.textArea}>
              <CopyButton sx={styles.copyButton} code={documentContent} />
              <Editor
                placeholder="Type here..."
                value={documentContent}
                onValueChange={(code) => setDocumentContent(code)}
                highlight={(code) =>
                  Prism.highlight(code, Prism.languages.markdown, 'md')
                    .split('\n')
                    .map(
                      (line) =>
                        `<span class="editor-line-number">${line}</span>`
                    )
                    .join('\n')
                }
                padding={10}
                style={styles.editor}
              />
            </Box>
          </Box>
          <Box
            style={
              resizeValue > 0
                ? { width: `calc(100% - ${resizeValue}px)` }
                : null
            }
            sx={styles.renderedPageBox}
          >
            {serializedDoc && (
              <Box sx={styles.articleBox}>
                <article>
                  <header>
                    {missingProperties() ? (
                      <Text sx={styles.warning}>
                        {`{ ${missingProperties()} }`} is missing in
                        Frontmatter!
                      </Text>
                    ) : null}
                    <Text sx={styles.documentationTitle} className="title">
                      {serializedDoc.frontmatter?.title}
                    </Text>
                    <Text sx={styles.documentationExcerpt}>
                      {serializedDoc.frontmatter?.excerpt}
                    </Text>
                  </header>
                  <MarkdownRenderer serialized={serializedDoc} />
                </article>
              </Box>
            )}
            {error && (
              <Flex sx={styles.errorBox}>
                <Text sx={styles.errorMessage}>{error}</Text>
              </Flex>
            )}
            {!documentContent && (
              <Text sx={styles.emptyMessage}>Empty Document</Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Auth>
  )
}

MarkdownPreviewPage.hideSidebar = true
MarkdownPreviewPage.isEditor = true

export default MarkdownPreviewPage
