import type { AppProps } from 'next/app'
import type { Page } from 'utils/typings/types'
import Head from 'next/head'

import 'styles/global.css'
import 'styles/rapidoc.css'

import Layout from 'components/layout'

type Props = AppProps & {
  Component: Page
}

import TrackerProvider from 'utils/contexts/trackerContext'

function MyApp({ Component, pageProps }: Props) {
  return (
    <TrackerProvider>
      <Head>
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/vtexdocs/devportal@main/public/images/meta-image.png"
        />
      </Head>
      <Layout
        sidebarfallback={pageProps.sidebarfallback}
        hideSidebar={Component.hideSidebar}
        isPreview={pageProps.isPreview}
        sectionSelected={pageProps.sectionSelected}
        parentsArray={pageProps.parentsArray}
      >
        <Component {...pageProps} />
      </Layout>
    </TrackerProvider>
  )
}

export default MyApp
