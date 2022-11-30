import type { AppProps } from 'next/app'
import type { Page } from 'utils/typings/types'

import 'styles/global.css'
import 'styles/rapidoc.css'

import Layout from 'components/layout'

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout
      sidebarfallback={pageProps.sidebarfallback}
      hideSidebar={Component.hideSidebar}
      sectionSelected={pageProps.sectionSelected}
    >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
