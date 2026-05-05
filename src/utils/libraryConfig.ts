/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import { SearchConfig } from '@vtexdocs/components'

const useHybridSearch = process.env.NEXT_PUBLIC_HYBRID_SEARCH_ENABLED === 'true'

const libraryConfig = useHybridSearch
  ? {
      backend: 'hybrid' as const,
      index: 'devportal-docs',
      hybrid: {
        apiEndpoint: '/api/search',
        source: 'dev-portal' as const,
        defaultLimit: 10,
        useLanguageFilter: true,
      },
    }
  : {
      backend: 'algolia' as const,
      algolia: {
        appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
        apiKey: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_KEY || '',
        index: 'devportal-docs',
      },
    }

export default SearchConfig(libraryConfig)
