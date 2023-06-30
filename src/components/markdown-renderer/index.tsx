/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@vtex/brand-ui'
import { MDXRemote } from 'next-mdx-remote'
const MDXRemote2: any = MDXRemote
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import components from './components'
import { getMDXComponent } from 'mdx-bundler/client'
import '@highlightjs/cdn-assets/styles/github.min.css'
import { useMemo } from 'react'
import { PropsSection } from 'components/faststore-components'
import { RowItem } from 'components/faststore-components/PropsSection/PropsSection'

interface Props {
  serialized: MDXRemoteSerializeResult | null
  code?: any
  mdxProps?: {
    componentName: string
    componentAttributes: RowItem[]
  }[]
}

const Tab = ({ children }: any) => <div>{children}</div>
const Tabs = ({ children }: any) => <div>{children}</div>

const MarkdownRenderer = ({ serialized, code, mdxProps }: Props) => {
  if (mdxProps) {
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
      ComponentPropsSection,
      Tab,
      Tabs,
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
