import { Hit } from 'react-instantsearch-core'

export const getBreadcrumbs = (hit: Hit) => {
  const breadcrumbs: string[] = []
  breadcrumbs.push(hit.doctype)
  if (hit.doctype === 'API Reference' && hit.doccategory)
    breadcrumbs.push(hit.doccategory)
  breadcrumbs.push(hit.doctitle)
  return breadcrumbs
}

export const getRelativeURL = (url: string) => {
  const relativeURL = url.replace(/^(?:\/\/|[^/]+)*\//, '')
  return '/' + relativeURL
}
