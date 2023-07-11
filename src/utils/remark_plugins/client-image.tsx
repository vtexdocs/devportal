import { visit } from 'unist-util-visit'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformer(ast: any) {
  visit(ast, 'image', visitor)

  function visitor(node: { url: string | Buffer; alt: string }) {
    node.alt = '{}'
  }
}

function links() {
  return transformer
}

export default links
