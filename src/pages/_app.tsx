import type { AppProps } from 'next/app'

import 'styles/global.css'
import 'styles/rapidoc.css'

import Layout from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout sidebarfallback={pageProps.sidebarfallback}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
