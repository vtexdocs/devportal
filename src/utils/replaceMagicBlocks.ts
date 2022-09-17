// const magicBlockRegex =
//   /\[block:(?<blockType>[^\]]*)\](?<blockContent>.*)\[\/block\]/gms
const magicBlockRegex =
  /\[block:(?<Type>[^\]]*)\](?<Content>[^]+?)\[\/block\]/gms

function replacer(match: string, p1: string, p2: string) {
  switch (p1) {
    case 'code':
      const code = JSON.parse(p2).codes[0]
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
      break

    case 'image':
      const image = JSON.parse(p2).images[0].image
      return `![${image[1]}](${image[0]})`

    case 'api-header':
      const header = JSON.parse(p2).title
      return `## ${header}\n`
    default:
      return match
      break
  }
}

export default async function replaceMagicBlocks(markdown: string) {
  const replacedMarkdown = markdown.replace(magicBlockRegex, replacer)

  return replacedMarkdown
}
