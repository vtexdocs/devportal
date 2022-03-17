import type { SxStyleProp } from '@vtex/brand-ui'

declare module 'react' {
  interface Attributes {
    sx?: SxStyleProp
  }
}
