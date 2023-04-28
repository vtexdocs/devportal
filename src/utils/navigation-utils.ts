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

export const getKeyByEndpoint = (
  object: { [x: string]: string },
  endpoint: string,
  slug: string,
  method?: string
) => {
  const slugPaths = Object.keys(object).filter((key) => object[key] === slug)
  let path = ''
  slugPaths?.map((el) => {
    if (
      method &&
      object[`${el.replace('.slug', '.method')}`] == method?.toUpperCase() &&
      object[`${el.replace('.slug', '.endpoint')}`] == endpoint
    ) {
      path = el
    } else if (hasChildren(object, el.replace('.slug', '.children'))) {
      path = el
    }
  })
  return path
}

function hasChildren(
  flattenedJson: { [x: string]: string },
  elementKey: string
): boolean {
  for (const key in flattenedJson) {
    if (key.startsWith(`${elementKey}.`)) {
      return true
    }
  }
  return false
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
