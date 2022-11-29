const magicBlockRegex =
  /\[block:(?<Type>[^\]]*)\](?<Content>[^]+?)\[\/block\]/gms

function replacer(_match: string, blockType: string, blockContent: string) {
  switch (blockType) {
    case 'code':
      const code = JSON.parse(blockContent).codes[0]
      switch (code.language) {
        case 'jsonc':
          code.language = 'json'
          break
        case 'curl':
          code.language = 'curl'
          break
        default:
          break
      }

      return '\n```' + code.language + '\n' + code.code + '\n```\n'
    case 'html':
      const html = JSON.parse(blockContent)
        .html.replace(/"/g, '\\"')
        .replace(/\n/g, '')
      return `<div dangerouslySetInnerHTML={{ __html: "${html}" }} />`

    case 'image':
      const image = JSON.parse(blockContent).images[0].image
      return `![${image[1]}](${image[0]})`

    case 'api-header':
      const header = JSON.parse(blockContent).title
      return `## ${header}\n`

    default:
      return ''
  }
}

export default async function replaceMagicBlocks(markdown: string) {
  const replacedMarkdown = markdown.replace(magicBlockRegex, replacer)
  return replacedMarkdown
}
