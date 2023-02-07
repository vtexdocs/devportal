import type { AppProps } from 'next/app'
import type { Page } from 'utils/typings/types'

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
      <Layout
        sidebarfallback={pageProps.sidebarfallback}
        hideSidebar={Component.hideSidebar}
        sectionSelected={pageProps.sectionSelected}
        parentsArray={pageProps.parentsArray}
      >
        <Component {...pageProps} />
      </Layout>
    </TrackerProvider>
  )
}

export default MyApp
