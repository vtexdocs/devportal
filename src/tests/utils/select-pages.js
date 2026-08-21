/* eslint-disable @typescript-eslint/no-var-requires */
const navigation = require('../../../public/navigation.json')

const NAVIGATION_SOURCE = 'public/navigation.json'
const DEFAULT_SEED = `${Date.now()}`

const hashSeed = (seed) => {
  let hash = 1779033703 ^ seed.length

  for (let index = 0; index < seed.length; index++) {
    hash = Math.imul(hash ^ seed.charCodeAt(index), 3432918353)
    hash = (hash << 13) | (hash >>> 19)
  }

  hash = Math.imul(hash ^ (hash >>> 16), 2246822507)
  hash = Math.imul(hash ^ (hash >>> 13), 3266489909)

  return (hash ^ (hash >>> 16)) >>> 0
}

const mulberry32 = (seed) => {
  let state = seed >>> 0

  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = Math.imul(state ^ (state >>> 15), state | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

const resolveSeed = (seed) =>
  `${seed || process.env.SAMPLE_SEED || DEFAULT_SEED}`

const sample = (elements, size, random) => {
  const normalizedSize = Math.min(size, elements.length)
  if (normalizedSize <= 0) return []

  const chosenIndices = new Set()
  while (chosenIndices.size < normalizedSize) {
    let chosenIndex = Math.floor(random() * elements.length)
    while (chosenIndices.has(chosenIndex)) {
      chosenIndex = Math.floor(random() * elements.length)
    }

    chosenIndices.add(chosenIndex)
  }

  const chosenElements = []
  chosenIndices.forEach((index) => chosenElements.push(elements[index]))
  return chosenElements
}

const pickOpenApiEndpoint = (children, page, random) => {
  let currChildren = children

  while (currChildren.length > 0) {
    const childIndex = Math.floor(random() * currChildren.length)
    const currentChild = currChildren[childIndex]

    if (currentChild.method) {
      return `${page}#${currentChild.method.toLowerCase()}-${
        currentChild.endpoint
      }`
    }

    currChildren = currentChild.children || []
  }

  return undefined
}

const getPageSample = (options = {}) => {
  const seed = resolveSeed(options.seed)
  const random = mulberry32(hashSeed(seed))

  const getDocumentationPages = (slugPrefix, pages) => {
    const getPages = ({ slug, type, children }) => {
      const page = `${slugPrefix}/${slug}`
      if (type === 'markdown') pages.push(page)
      else if (type === 'openapi') pages.push({ overview: page })

      if (type !== 'openapi') children.forEach(getPages)
      else {
        const endpointPage = pickOpenApiEndpoint(children, page, random)
        if (endpointPage) pages[pages.length - 1].endpoint = endpointPage
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

    const selectedPages = sample(allPages, sampleSize, random)
    selectedPages.forEach((page) => {
      if (slugPrefix !== 'docs/api-reference') {
        allSelectedPages.push(page)
      } else {
        allSelectedPages.push(page.overview)
        if (page.endpoint) allSelectedPages.push(page.endpoint)
      }
    })
  })

  return {
    seed,
    seedLabel: seed.slice(0, 7),
    navigationSource: NAVIGATION_SOURCE,
    pages: allSelectedPages,
  }
}

const selectRandomPages = (options) => getPageSample(options).pages

module.exports = { NAVIGATION_SOURCE, getPageSample, selectRandomPages }
