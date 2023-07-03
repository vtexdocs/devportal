/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import { Box } from '@vtex/brand-ui'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
const MDXRemote2: any = MDXRemote
import components from './components'
import fastStoreComponents from './fastStoreComponents'
import { getMDXComponent } from 'mdx-bundler/client'
import { PropsSection } from 'components/faststore-components'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'
import '@highlightjs/cdn-assets/styles/github.min.css'

interface Props {
  serialized: MDXRemoteSerializeResult | null
  code?: any
  mdxProps?: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
}

const MarkdownRenderer = ({ serialized, code, mdxProps }: Props) => {
  if (code && mdxProps) {
    const ComponentPropsSection = ({ component }: { component: string }) => {
      const mdxComponents: { [componentName: string]: JSX.Element } = {}
      for (const props of mdxProps) {
        mdxComponents[props.componentName] = (
          <PropsSection propsList={props.componentAttributes} />
        )
      }
      return mdxComponents[component]
    }
    const updatedComponents: any = {
      ...components,
      ...fastStoreComponents,
      ComponentPropsSection,
    }
    const MdxBundlerComponent = useMemo(() => getMDXComponent(code), [code])

    return (
      <Box>
        <MdxBundlerComponent components={updatedComponents} />
      </Box>
    )
  }

  return (
    <Box>
      <MDXRemote2 components={components} lazy {...serialized} />
    </Box>
  )
}

export default MarkdownRenderer
