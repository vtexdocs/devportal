export type Locale = 'en' | 'pt' | 'es'

export type DocumentationTitle =
  | 'Guides'
  | 'API Reference'
  | 'Learning Center'
  | 'App Development'
  | 'Storefront Development'
  | 'VTEX IO Apps'
  | 'Troubleshooting'

export type UpdatesTitle = 'Release Notes' | 'Documentation Updates'

export type AdminTitle =
  | 'Sidebar Editor'
  | 'API Index Generator'
  | 'Markdown Preview'

export type SlugPrefix =
  | 'guides'
  | 'api-reference'
  | 'learn'
  | 'app-development'
  | 'storefront-development'
  | 'vtex-io-apps'
  | 'faststore'

export type ResourceTitle =
  | 'Community'
  | 'Learning Center'
  | 'GitHub'
  | 'Help Center'
  | 'Support'

export type ResourceTitleTroubleshooting =
  | 'Community'
  | 'Help Center'
  | 'Support'

export type MethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

export function isMethodType(value: string): value is MethodType {
  return ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'].includes(value as MethodType)
}
