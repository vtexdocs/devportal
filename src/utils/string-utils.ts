export const removeHTML = (str: string) => str.replace(/<\/?[^>]+>/g, '')

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const toCamelCase = (str: string) => {
  const [firstWord, ...otherWords] = str.split('-')
  return `${firstWord}${otherWords.map(capitalizeFirstLetter).join('')}`
}

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
}

type Child = string | { props: { children: Child[] } }

export const childrenToString: (children: Child[]) => string = (children) => {
  if (Array.isArray(children))
    return children
      .map((child) => {
        if (typeof child === 'string') return child
        return childrenToString(child.props.children)
      })
      .join('')
  else {
    if (typeof children === 'string') return children
    return childrenToString(children['props']['children'])
  }
}
