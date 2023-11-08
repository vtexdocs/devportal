import PageHeader from 'components/page-header'
import { getMessages } from 'utils/get-messages'
import image from '../../../../public/images/codesamples.png'
import Head from 'next/head'
import CodeSamplesSection from 'components/code-sample-section'
import getNavigation from 'utils/getNavigation'
import { codeSamples } from 'utils/constants'
import { CodeSamplesElement, SelectOption } from 'utils/typings/types'
import { GetStaticProps, NextPage } from 'next'
import { PreviewContext } from 'utils/contexts/preview'
import { useContext } from 'react'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
  builders: SelectOption[]
  branch: string
}

const AppDevelopmentPage: NextPage<Props> = ({ builders, branch }) => {
  const { setBranchPreview } = useContext(PreviewContext)
  setBranchPreview(branch)
  const messages = getMessages()
  return (
    <>
      <Head>
        <title>Code Samples</title>
        <meta
          property="og:title"
          content={messages['app_development_page.subtitle']}
          key="title"
        />
        <meta
          name="docsearch:doctitle"
          content={messages['app_development_page.title']}
        />
        <meta name="docsearch:doctype" content="App Development" />
      </Head>
      <>
        <PageHeader
          title="Code samples and templates"
          description="Simplify your development process with ready-to-use code templates"
          imageUrl={image}
          imageAlt={messages['app_development_page.title']}
        />
        <CodeSamplesSection builders={builders} />
      </>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'App Development'
  const previewBranch =
    preview && JSON.parse(JSON.stringify(previewData)).hasOwnProperty('branch')
      ? JSON.parse(JSON.stringify(previewData)).branch
      : 'main'
  const branch = preview ? previewBranch : 'main'

  function getBuilders(samples: CodeSamplesElement[]) {
    const uniqueBuilders: Map<string, string> = new Map()

    for (const sample of samples) {
      sample.builders.forEach((builder) => {
        uniqueBuilders.set(builder, builder) // Using Map to ensure uniqueness
      })
    }

    return Array.from(uniqueBuilders, ([id, label]) => ({ id, label }))
  }

  const builders: SelectOption[] = getBuilders(codeSamples)

  return {
    props: {
      sidebarfallback,
      sectionSelected,
      builders,
      branch,
    },
  }
}

export default AppDevelopmentPage
