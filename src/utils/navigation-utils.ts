type BreadcrumbEntry = {
  name: string
  slug: string
  type: string
}

export const findBreadcrumbTrail = (
  items: DocEntry[],
  targetSlug: string
): BreadcrumbEntry[] | null => {
  for (const item of items) {
    // If the item is the target, return it as the base of the breadcrumb trail
    if (item.slug === targetSlug) {
      return [{ name: item.name, slug: item.slug, type: item.type }]
    }

    // Recursively search in children
    if (item.children && item.children.length > 0) {
      const trail = findBreadcrumbTrail(item.children, targetSlug)

      // If the target is found in children, add the current item to the breadcrumb trail
      if (trail) {
        return [{ name: item.name, slug: item.slug, type: item.type }, ...trail]
      }
    }
  }

  // Return null if the target is not found at this level
  return null
}

type MarkdownEntry = {
  name: string
  slug: string
}

type NavEntry = {
  documentation: string
  slugPrefix: string
  categories: DocEntry[]
  name: string
}

type DocEntry = {
  name: string
  slug: string
  origin?: string
  type: string
  children: DocEntry[]
}

export type NavEntryChild = {
  name: string
  slug: string
  type: string
  url: string
}

export type CategoryNavEntry = Omit<NavEntryChild, 'url'> & {
  sectionIndex: number
  children: NavEntryChild[]
}

export const buildNavUrl = (slugPrefix: string, slug: string) =>
  `/${slugPrefix}/${slug}`.replace(/\/+/g, '/')

export const findNavEntryBySlug = (
  navigation: NavEntry[],
  slug: string
): CategoryNavEntry | null => {
  const targetUrl = buildNavUrl('docs/guides', slug)

  const search = (items: DocEntry[], slugPrefix: string): DocEntry | null => {
    for (const item of items) {
      if (item.slug && buildNavUrl(slugPrefix, item.slug) === targetUrl) {
        return item
      }
      if (item.children && item.children.length > 0) {
        const found = search(item.children, slugPrefix)
        if (found) return found
      }
    }
    return null
  }

  for (let sectionIndex = 0; sectionIndex < navigation.length; sectionIndex++) {
    const section = navigation[sectionIndex]
    const entry = search(section.categories ?? [], section.slugPrefix ?? '')
    if (!entry) continue

    return {
      name: entry.name,
      slug: entry.slug,
      type: entry.type ?? '',
      sectionIndex,
      children: (entry.children ?? []).map((child) => ({
        name: child.name,
        slug: child.slug,
        type: child.type ?? '',
        url: buildNavUrl(section.slugPrefix ?? '', child.slug),
      })),
    }
  }

  return null
}

export const extractMarkdownEntries = (navItems: NavEntry): MarkdownEntry[] => {
  const basePath = navItems.slugPrefix
  const markdownEntries: MarkdownEntry[] = []
  const processChild = (item: DocEntry) => {
    // Recursively check children
    item.children.forEach((item) => {
      // If the item type is "markdown", add it to the list
      if (item.type === 'markdown' && item.name && item.slug) {
        const slug = `/${basePath}/${item.slug}`.replace('//', '/')
        markdownEntries.push({ name: item.name, slug })
      }
      if (item.children && item.children.length > 0) {
        processChild(item)
      }
    })
  }

  navItems.categories.forEach((item) => {
    // If the item type is "markdown", add it to the list
    if (item.type === 'markdown' && item.name && item.slug) {
      const slug = `/${basePath}/${item.slug}`.replace('//', '/')
      markdownEntries.push({ name: item.name, slug })
    }

    // Recursively check children
    if (item.children && item.children.length > 0) {
      processChild(item)
    }
  })

  return markdownEntries
}

export const flattenJSON = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any = {},
  extraKey = ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      res[extraKey + key] = obj[key]
    } else {
      flattenJSON(obj[key], res, `${extraKey}${key}.`)
    }
  }
  return res
}
export const getKeyByValue = (
  object: { [x: string]: string },
  value: string
) => {
  return Object.keys(object).find((key) => object[key] === value)
}

export const getParents = (
  path: string,
  data: string,
  flattenedSidebar: { [x: string]: string },
  parentsArray: string[],
  parent?: string
) => {
  const pathParts = path?.split('children')
  pathParts?.splice(-1)
  let prev = ''
  pathParts?.map((el) => {
    el = prev + el
    prev = el + 'children'

    if (!parent || flattenedSidebar[`${el}${data}`].includes(parent)) {
      parentsArray.push(flattenedSidebar[`${el}${data}`])
    }
  })
  return parentsArray
}
interface DocElement {
  name: string
  slug: string
  type: string
  method?: string
  origin?: string
  endpoint?: string
  children?: []
  route: string
}

export const flattenWithChildren = (data: DocElement[]) => {
  const flattened: DocElement[] = []

  function traverse(obj: DocElement) {
    const { children, ...rest } = obj
    flattened.push(rest)
    if (children && children.length > 0) {
      children.forEach((child) => {
        traverse(child)
      })
    }
  }

  data.forEach((obj) => {
    traverse(obj)
  })

  return flattened
}
