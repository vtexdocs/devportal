/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsSection } from 'components/faststore-components'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'
import '@highlightjs/cdn-assets/styles/github.min.css'
import { constants } from 'components/faststore-components/constants'
import fastStoreComponents from 'components/faststore-components/markdown-renderer/fastStoreComponents'
import { MarkdownRenderer as MarkdownRenderer2 } from '@vtexdocs/components'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
  serialized: MDXRemoteSerializeResult
  mdxProps?: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
}

export const getFastStoreMarkdownExtras = (
  mdxProps?: Props['mdxProps']
): { customComponents?: any; scope?: typeof constants } => {
  if (!mdxProps) return {}

  const ComponentPropsSection = ({ component }: { component: string }) => {
    const mdxComponents: { [componentName: string]: JSX.Element } = {}
    for (const props of mdxProps) {
      mdxComponents[props.componentName] = (
        <PropsSection propsList={props.componentAttributes} />
      )
    }
    return mdxComponents[component]
  }

  return {
    customComponents: {
      ...fastStoreComponents,
      ComponentPropsSection,
    },
    scope: constants,
  }
}

const MarkdownRenderer = ({ serialized, mdxProps }: Props) => {
  const extras = getFastStoreMarkdownExtras(mdxProps)

  if (extras.customComponents) {
    return (
      <MarkdownRenderer2
        customComponents={extras.customComponents}
        serialized={serialized}
        scope={extras.scope}
      />
    )
  }

  return <MarkdownRenderer2 serialized={serialized} />
}

export default MarkdownRenderer
