export const removeHTML = (str: string) => str.replace(/<\/?[^>]+>/g, '')

export const normalizeWhitespace = (str: string) =>
  str.replace(/\s+/g, ' ').trim()

// Like removeHTML, but replaces tags with a single space and collapses
// surrounding whitespace, so adjacent inline elements don't get glued together.
export const stripHTML = (str: string) =>
  normalizeWhitespace(str.replace(/<[^>]+>/g, ' '))

export const getFirstSentence = (str: string) => {
  const normalized = normalizeWhitespace(str)
  if (!normalized) return ''

  const match = normalized.match(/^.*?[.!?](?=\s|$)/)
  return match ? match[0].trim() : normalized
}

// Truncates `str` to at most `maxLength` characters, breaking on the last
// whole word when possible and appending an ellipsis when truncation occurs.
export const trimToLength = (str: string, maxLength: number) => {
  if (maxLength <= 0 || !str) return ''
  if (str.length <= maxLength) return str

  const truncated = str.slice(0, maxLength - 1)
  const lastSpaceIndex = truncated.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    return `${truncated.slice(0, lastSpaceIndex)}…`
  }

  return `${truncated}…`
}

// Strips a leading "Title", "Title:", "Title -", or "Title." prefix from `str`,
// case-insensitively, so a value like "Foo API: does X" becomes "does X".
export const removeTitlePrefix = (str: string, title: string) => {
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return str
    .replace(new RegExp(`^${escapedTitle}\\s*[:\\-.]?\\s*`, 'i'), '')
    .trim()
}

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

export const matrixToMarkdownTable: (matrix: string[][]) => string = (
  matrix
) => {
  const matrixRowToMarkdownTableRow = (matrixRow: string[]) =>
    `|${matrixRow
      .map((matrixElement) => ` ${matrixElement.replace(/\n/g, '<br />')} |`)
      .join('')}`

  let table = matrixRowToMarkdownTableRow(matrix[0]) + '\n|'
  for (let i = 0; i < matrix[0].length; i++) table += ' --- |'

  table += '\n'
  for (let i = 1; i < matrix.length; i++)
    table += matrixRowToMarkdownTableRow(matrix[i]) + '\n'

  return table
}
