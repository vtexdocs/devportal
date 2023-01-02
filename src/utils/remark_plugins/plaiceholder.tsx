import { visit } from 'unist-util-visit'
import { getPlaiceholder } from 'plaiceholder'
import probe from 'probe-image-size'

const maxIMGSizePx = 1500

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformer(ast: any) {
  const promises: Promise<void>[] = []
  visit(ast, 'image', visitor)

  function visitor(node: { url: string | Buffer; alt: string }) {
    promises.push(
      probe(node.url as string).then((results) => {
        const img = results
        node.alt = JSON.stringify({
          base64: '  ',
          img: img,
        })
        if (img.width < maxIMGSizePx && img.height < maxIMGSizePx) {
          promises.push(
            getPlaiceholder(node.url).then((resultsPlaiceholder) => {
              node.alt = JSON.stringify({
                base64: resultsPlaiceholder.base64,
                img: resultsPlaiceholder.img,
              })
            })
          )
        }
      })
    )
  }
  await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    promises.map((p: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      p.catch((e: any) => console.error(`\x1b[33m${e}\x1b[0m`))
    )
  )
}

function links() {
  return transformer
}

export default links
