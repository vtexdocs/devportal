import { capitalizeFirstLetter } from 'utils/string-utils'
import { getIcon } from 'utils/constants'

import { DocumentProps } from 'components/documentation-card'

const getDoctype = (url: string) => {
  const pathDoctype = url.split('/')[2]
  switch (pathDoctype) {
    case 'api-guides':
      return 'API Guides'
    case 'api-reference':
      return 'API Reference'
    case 'vtex-io':
      return 'VTEX IO'
    case 'fast-store':
      return 'FastStore'
    case 'store-framework-apps':
      return 'Store Framework Apps'
    default:
      return 'API Guides'
  }
}

const getTitleFromUrl = (url: string) => {
  const path = url.split('/')
  const words = path[path.length - 1].split('-')
  return `${words.map(capitalizeFirstLetter).join(' ')}`
}

export const createDocFromUrl = (url: string): DocumentProps => {
  const Icon = getIcon(getDoctype(url))!
  const title = getTitleFromUrl(url)

  return {
    title,
    Icon,
    description: '',
    link: url,
  }
}
