/* eslint-disable @typescript-eslint/no-var-requires */
const navigation = require('../../../public/navigation.json')

const selectRandomPages = (prob) => {
  const pages = []
  const selectDocumentationPages = (slugPrefix) => {
    const selectPages = ({ slug, type, children }) => {
      const page = `${slugPrefix}/${slug}`
      const shouldSelectPage = Math.random() < prob

      if ((type === 'markdown' || type === 'openapi') && shouldSelectPage)
        pages.push(page)

      if (type !== 'openapi') children.forEach(selectPages)
      else if (shouldSelectPage) {
        let found = false
        let childIndex = -1
        let currChildren = children

        while (!found && currChildren.length > 0) {
          childIndex = Math.floor(Math.random() * currChildren.length)
          if (currChildren[childIndex].method) found = true
          else currChildren = currChildren[childIndex].children
        }

        if (found) {
          const { method, endpoint } = currChildren[childIndex]
          const endpointPage = `${page}#${method.toLowerCase()}-${endpoint}`
          pages.push(endpointPage)
        }
      }
    }

    return selectPages
  }

  navigation.navbar.forEach(({ slugPrefix, categories }) => {
    categories.forEach(
      selectDocumentationPages(
        slugPrefix.endsWith('/')
          ? slugPrefix.slice(0, slugPrefix.length - 1)
          : slugPrefix
      )
    )
  })

  return pages
}

module.exports = { selectRandomPages }
