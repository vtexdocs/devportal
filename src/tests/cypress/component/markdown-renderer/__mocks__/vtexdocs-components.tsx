import React from 'react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

type ComponentProps = {
  component: string
  [key: string]: unknown
}

interface Props {
  serialized: MDXRemoteSerializeResult
  customComponents?: Record<string, React.ComponentType<ComponentProps>>
  scope?: Record<string, unknown>
}

export const MarkdownRenderer = ({ serialized, customComponents }: Props) => {
  return (
    <div data-testid="mock-markdown-base">
      <div data-testid="mock-content">{serialized.compiledSource}</div>
      {customComponents && (
        <div data-testid="mock-custom-components">
          Has custom FastStore components
        </div>
      )}
    </div>
  )
}

export default {
  MarkdownRenderer,
}
