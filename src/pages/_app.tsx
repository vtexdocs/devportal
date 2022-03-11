import type { AppProps } from 'next/app'
import { ThemeProvider } from '@vtex/brand-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
