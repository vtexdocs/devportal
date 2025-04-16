import type { AppProps } from 'next/app'
import type { Page } from 'utils/typings/types'
import '@code-hike/mdx/dist/index.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import 'styles/global.css'
import 'styles/rapidoc.css'
import 'styles/faststore.scss'
import '@vtexdocs/components/dist/index.css'

import Layout from 'components/layout'
import { AuthProvider } from 'utils/contexts/auth'

type Props = AppProps & {
  Component: Page
}

import PreviewContextProvider from 'utils/contexts/preview'

function MyApp({ Component, pageProps: { session, ...pageProps } }: Props) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={0}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
    >
      <AuthProvider>
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
            isEditor={Component.isEditor}
            sectionSelected={pageProps.sectionSelected}
            parentsArray={pageProps.parentsArray}
          >
            <Component {...pageProps} />
          </Layout>
        </PreviewContextProvider>
      </AuthProvider>
    </SessionProvider>
  )
}

export default MyApp
