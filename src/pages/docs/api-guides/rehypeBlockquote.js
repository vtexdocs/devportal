import { u } from 'unist-builder'
import { visit, SKIP } from 'unist-util-visit'

const extendedNames = {
  info: /^ℹ️/,
  warning: /^\u26A0/,
  danger: /^\u2757/,
  success: /^\u2705/,
}
/**
 * Plugin to add extended blockquote formatting
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkBlockquote() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== 'blockquote') return

      const { children = [] } = node
      const [{ value, type }, ...siblings] = children[0].children

      const result = Object.entries(extendedNames).find(([, regex]) =>
        regex.test(value)
      )
      if (!result) return

      const newChild = {
        type,
        value: formatValues(value, result[1]),
      }

      const props = {
        data: {
          hProperties: {
            icon: result[0],
          },
        },
      }

      parent.children.splice(
        index,
        1,
        u('blockquote', props, [u('paragraph', [newChild, ...siblings])])
      )
      return [SKIP, index]
    })
  }
}

const formatValues = (value, regEx) => {
  if (value && value.includes('\n')) {
    return value
      .split('\n')
      .map((val) => {
        if (val.length === 2) return val.concat(' ').replace(regEx, '')
        return val.replace(regEx, '').trim()
      })
      .join('\n')
  } else return value.replace(regEx, '').trim()
}
