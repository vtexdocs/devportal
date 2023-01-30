import { Hit } from 'react-instantsearch-core'

export const getBreadcrumbs = (hit: Hit) => {
  const breadcrumbs: string[] = []
  breadcrumbs.push(hit.docType)
  if (hit.docType === 'API Reference') breadcrumbs.push(hit.docCategory)
  breadcrumbs.push(hit.docTitle)
  // const urlSplit = hit.url.split('/').slice(5)
  // const endpointSplit = urlSplit.map((e) => e.split('#'))
  // return endpointSplit.flat()
  return breadcrumbs
}

export const getRelativeURL = (url: string) => {
  const relativeURL = url.replace(/^(?:\/\/|[^/]+)*\//, '')
  return '/' + relativeURL
}
