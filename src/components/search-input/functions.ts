import { Hit } from 'react-instantsearch-core'

export const breadcrumbs = (hit: Hit) => {
  const urlSplit = hit.url.split('/').slice(5)
  const endpointSplit = urlSplit.map((e) => e.split('#'))
  return endpointSplit.flat()
}
