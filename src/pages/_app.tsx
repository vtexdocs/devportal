import type { AppProps } from 'next/app'
import { ThemeProvider } from '@vtex/brand-ui'

import 'styles/global.css'
import 'styles/rapidoc.css'
import Footer from 'components/footer'
import Header from 'components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
