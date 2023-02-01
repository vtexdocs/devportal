import { capitalizeFirstLetter } from 'utils/string-utils'
import { getIcon } from 'utils/constants'

import { DocumentProps } from 'components/documentation-card'

const getDoctype = (category: string) => {
  switch (category) {
    case 'API Guides':
      return 'Guides'
    case 'api-reference':
      return 'API Reference'
    case 'App Development':
      return 'App Development'
    case 'Storefront Development':
      return 'Storefront Development'
    case 'VTEX IO Apps':
      return 'VTEX IO Apps'
    default:
      return 'Guides'
  }
}

const getTitleFromUrl = (url: string) => {
  const words = url.split('#')[0].split('-')
  return `${words.map(capitalizeFirstLetter).join(' ').replace('Api', 'API')}`
}

export const createDocFromUrl = (doc: {
  url: string
  title: string
  category: string
}): DocumentProps => {
  const Icon = getIcon(getDoctype(doc.category))!
  const title = getTitleFromUrl(doc.title)

  return {
    title,
    Icon,
    description: getTitleFromUrl(doc.category),
    link: doc.url,
  }
}
