import type { AppProps } from 'next/app'
import type { Page } from 'utils/typings/types'

import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { VtexTrustVariable } from 'utils/fonts'
import 'styles/global.css'
import 'styles/rapidoc.css'

import Layout from 'components/layout'

type Props = AppProps & {
  Component: Page
}

import TrackerProvider from 'utils/contexts/trackerContext'
import PreviewContextProvider from 'utils/contexts/preview'

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        * {
          font-family: ${VtexTrustVariable.style.fontFamily}, -apple-system,
            system-ui, BlinkMacSystemFont, sans-serif !important;
        }
      `}</style>
      <SessionProvider session={session}>
        <TrackerProvider>
          <Head>
            <meta
              property="og:image"
              content="https://cdn.jsdelivr.net/gh/vtexdocs/devportal@main/public/images/meta-image.png"
            />
          </Head>
          <PreviewContextProvider>
            <Layout
              sidebarfallback={pageProps.sidebarfallback}
              hideSidebar={Component.hideSidebar}
              isPreview={pageProps.isPreview ?? false}
              sectionSelected={pageProps.sectionSelected}
              parentsArray={pageProps.parentsArray}
            >
              <Component {...pageProps} />
            </Layout>
          </PreviewContextProvider>
        </TrackerProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
