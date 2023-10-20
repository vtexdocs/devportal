import { capitalizeFirstLetter } from 'utils/string-utils'
import { getIcon } from 'utils/constants'

import { DocumentProps } from 'components/documentation-card'
import { useIntl } from 'react-intl'

const getDoctype = (category: string) => {
  switch (category) {
    case 'Tutorials & Solutions':
      return 'Tutorials & Solutions'
    case 'Start here':
      return 'Start here'
    case 'News':
      return 'News'
    default:
      return 'Tutorials & Solutions'
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
  const intl = useIntl()
  const Icon = getIcon(getDoctype(doc.category), intl)!
  const title = getTitleFromUrl(doc.title)

  return {
    title,
    Icon,
    description: getTitleFromUrl(doc.category),
    link: doc.url,
  }
}
