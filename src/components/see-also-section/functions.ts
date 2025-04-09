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
    case 'Troubleshooting':
      return 'Troubleshooting'
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
  const docType = getDoctype(doc.category)
  const Icon = getIcon(docType)
  if (!Icon) {
    // If no icon found for the docType, use Guides icon as fallback
    const GuidesIcon = getIcon('Guides')
    if (!GuidesIcon) {
      throw new Error('Could not find any valid icon')
    }
    return {
      title: getTitleFromUrl(doc.title),
      Icon: GuidesIcon,
      description: getTitleFromUrl(doc.category),
      link: doc.url,
    }
  }
  return {
    title: getTitleFromUrl(doc.title),
    Icon,
    description: getTitleFromUrl(doc.category),
    link: doc.url,
  }
}
