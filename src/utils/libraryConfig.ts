/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { SearchConfig } from '@vtexdocs/components'

const libraryConfig = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_KEY || '',
  index: 'devportal-docs',
}

export default SearchConfig(libraryConfig)
