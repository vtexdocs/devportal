export type Locale = 'en' | 'pt' | 'es'

export type DocumentationTitle =
  | 'Guides'
  | 'API Reference'
  | 'App Development'
  | 'Storefront Development'
  | 'VTEX IO Apps'

export type UpdatesTitle = 'Release Notes' | 'Documentation Updates'

export type SlugPrefix =
  | 'guides'
  | 'api-reference'
  | 'app-development'
  | 'storefront-development'
  | 'vtex-io-apps'

export type ResourceTitle =
  | 'Community'
  | 'Learning Center'
  | 'GitHub'
  | 'Help Center'
  | 'Support'

export type MethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export function isMethodType(value: string): value is MethodType {
  return ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'].includes(value as MethodType)
}
