import { visit } from 'unist-util-visit'
import { getPlaiceholder } from 'plaiceholder'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformer(ast: any) {
  const promises: Promise<void>[] = []
  visit(ast, 'image', visitor)

  function visitor(node: { url: string | Buffer; alt: string }) {
    promises.push(
      getPlaiceholder(node.url).then((results) => {
        console.log(`Checking img:${node.url}`)
        node.alt = JSON.stringify({
          base64: results.base64,
          img: results.img,
          alt: node.alt,
        })
      })
    )
  }
  await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    promises.map((p: any) => p.catch((e: any) => console.log(e)))
  )
}

function links() {
  return transformer
}

export default links
