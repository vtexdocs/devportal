export const removeHTML = (str: string) => str.replace(/<\/?[a-z]+>/g, '')

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\-+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
}

type Child = string | { props: { children: Child[] } }

export const childrenToString: (children: Child[]) => string = (children) => {
  return children
    .map((child) => {
      if (typeof child === 'string') return child
      return childrenToString(child.props.children)
    })
    .join('')
}
