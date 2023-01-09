import { capitalizeFirstLetter } from 'utils/string-utils'
import { getIcon } from 'utils/constants'

import { DocumentProps } from 'components/documentation-card'

const getDoctype = (url: string) => {
  const pathDoctype = url.split('/')[2]
  switch (pathDoctype) {
    case 'guides':
      return 'Guides'
    case 'api-reference':
      return 'API Reference'
    case 'app-development':
      return 'App Development'
    case 'vtex-io-apps':
      return 'VTEX IO Apps'
    default:
      return 'Guides'
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
