import type { AppProps } from 'next/app'
import { ThemeProvider } from '@vtex/brand-ui'

import 'styles/global.css'
import 'styles/rapidoc.css'

import Layout from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout sidebarfallback={pageProps.sidebarfallback}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
