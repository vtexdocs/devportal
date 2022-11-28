import { toCamelCase } from './string-utils'

const HTMLBlockRegex = /<([a-z-]+)(.+?)style="([^"]+)"([^>]*)>(.*?)<\/\1>/g
const selfClosingHTMLTagRegex = /<([a-z-]+)(.+?)style="([^"]+)"(.*?)\/>/g

const getStyleObject: (styleValue: string) => string = (styleValue) => {
  const styleProps = styleValue.split(';')
  const styles = styleProps.map((styleProp: string) => {
    if (styleProp.trim() == '') return null
    const [attribute, value] = styleProp.split(':')
    return `${toCamelCase(attribute.trim())}: "${value.trim()}"`
  })

  return `{ ${styles.join(', ')} }`
}

const HTMLBlockReplacer: (
  _match: string,
  tag: string,
  stylePrefix: string,
  styleValue: string,
  styleSuffix: string,
  blockContent: string
) => string = (
  _match,
  tag,
  stylePrefix,
  styleValue,
  styleSuffix,
  blockContent
) => {
  const styleObject = getStyleObject(styleValue)
  return `<${tag}${stylePrefix}style={${styleObject}}${styleSuffix}>${blockContent}</${tag}>`
}

const selfClosingHTMLTagReplacer: (
  _match: string,
  tag: string,
  stylePrefix: string,
  styleValue: string,
  styleSuffix: string
) => string = (_match, tag, stylePrefix, styleValue, styleSuffix) => {
  const styleObject = getStyleObject(styleValue)
  return `<${tag}${stylePrefix}style={${styleObject}}${styleSuffix}/>`
}

const replaceHTMLBlocks: (content: string) => string = (content) => {
  return content
    .replace('<br>', '<br />')
    .replace(/<!--.*?-->/gs, '')
    .replace(HTMLBlockRegex, HTMLBlockReplacer)
    .replace(selfClosingHTMLTagRegex, selfClosingHTMLTagReplacer)
}

export default replaceHTMLBlocks
