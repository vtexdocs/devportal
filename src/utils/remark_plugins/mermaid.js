import { u } from 'unist-builder'
import { visit, SKIP } from 'unist-util-visit'

export default function remarkMermaid() {
  return (ast) => {
    visit(ast, { type: 'code', lang: 'mermaid' }, (node, index, parent) => {
      node.type = 'text'

      const props = {
        data: {
          hProperties: {
            className: ['mermaid'],
          },
          hName: 'pre',
        },
      }

      parent.children.splice(index, 1, u('pre', props, [node]))

      return [SKIP, index]
    })
  }
}
