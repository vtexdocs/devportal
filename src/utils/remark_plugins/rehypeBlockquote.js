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
      const [{ value }] =
        children.length > 0 ? children[0].children : [{ value: '' }]

      const result = Object.entries(extendedNames).find(([, regex]) =>
        regex.test(value)
      )
      if (!result) return
      const newNode = node.children
      if (node.children.length > 0)
        newNode[0].children[0].value = newNode[0].children[0].value.substring(2)

      const newChild = {
        type: 'paragraph',
        children: newNode,
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
        u('blockquote', props, [u('paragraph', [newChild])])
      )
      return [SKIP, index]
    })
  }
}
