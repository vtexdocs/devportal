/* eslint-disable @typescript-eslint/no-var-requires */
const navigation = require('../../../public/navigation.json')

const sample = (elements, size) => {
  const chosenIndices = new Set()
  while (chosenIndices.size < size) {
    let chosenIndex = Math.floor(Math.random() * elements.length)
    while (chosenIndices.has(chosenIndex)) {
      chosenIndex = Math.floor(Math.random() * elements.length)
    }

    chosenIndices.add(chosenIndex)
  }

  const chosenElements = []
  chosenIndices.forEach((index) => chosenElements.push(elements[index]))
  return chosenElements
}

const selectRandomPages = (options) => {
  const getDocumentationPages = (slugPrefix, pages) => {
    const getPages = ({ slug, type, children }) => {
      const page = `${slugPrefix}/${slug}`
      if (type === 'markdown') pages.push(page)
      else if (type === 'openapi') pages.push({ overview: page })

      if (type !== 'openapi') children.forEach(getPages)
      else {
        let childIndex = -1
        let foundEndpoint = false
        let currChildren = children

        while (!foundEndpoint && currChildren.length > 0) {
          childIndex = Math.floor(Math.random() * currChildren.length)
          if (currChildren[childIndex].method) foundEndpoint = true
          else currChildren = currChildren[childIndex].children
        }

        if (foundEndpoint) {
          const { method, endpoint } = currChildren[childIndex]
          const endpointPage = `${page}#${method.toLowerCase()}-${endpoint}`
          pages[pages.length - 1].endpoint = endpointPage
        }
      }
    }

    return getPages
  }

  const allSelectedPages = []
  navigation.navbar.forEach(({ slugPrefix, categories }) => {
    const fixedSlugPrefix = slugPrefix.endsWith('/')
      ? slugPrefix.slice(0, slugPrefix.length - 1)
      : slugPrefix

    const allPages = []
    categories.forEach(getDocumentationPages(fixedSlugPrefix, allPages))

    const sampleSize =
      options.sampleSize || Math.floor(allPages.length * options.prob)

    const selectedPages = sample(allPages, sampleSize)
    selectedPages.forEach((page) => {
      if (slugPrefix !== 'docs/api-reference') {
        allSelectedPages.push(page)
      } else {
        allSelectedPages.push(page.overview)
        if (page.endpoint) allSelectedPages.push(page.endpoint)
      }
    })
  })

  return allSelectedPages
}

module.exports = { selectRandomPages }
