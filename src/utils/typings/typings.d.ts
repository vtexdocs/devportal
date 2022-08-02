import type { SxStyleProp } from '@vtex/brand-ui'

declare module 'react' {
  interface Attributes {
    sx?: SxStyleProp
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'rapi-doc': any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'rapi-doc-mini': any
    }
  }
}
