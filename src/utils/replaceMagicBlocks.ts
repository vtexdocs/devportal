// const magicBlockRegex =
//   /\[block:(?<blockType>[^\]]*)\](?<blockContent>.*)\[\/block\]/gms
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
      break

    case 'image':
      const image = JSON.parse(blockContent).images[0].image
      return `![${image[1]}](${image[0]})`

    case 'api-header':
      const header = JSON.parse(blockContent).title
      return `## ${header}\n`
    default:
      return ''
    case 'callout':
      const type = JSON.parse(blockContent).type
      const body = JSON.parse(blockContent).body
      switch (type) {
        case 'info':
          return `> ![${type}](https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/info.svg) \n > \n > ${body}`
        case 'danger':
          return `> ![${type}](https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/danger.svg) \n > \n > ${body}`
        case 'warning':
          return `> ![${type}](https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/warning.svg) \n > \n > ${body}`
        case 'success':
          return `> ![${type}](https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/success.svg) \n > \n > ${body}`
        default:
          return `> ![info](https://vtex-dev-portal-navigation.fra1.digitaloceanspaces.com/info.svg) \n > \n > ${body}`
      }
  }
}

export default async function replaceMagicBlocks(markdown: string) {
  const replacedMarkdown = markdown.replace(magicBlockRegex, replacer)

  return replacedMarkdown
}
