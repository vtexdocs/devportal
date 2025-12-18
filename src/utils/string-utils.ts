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
