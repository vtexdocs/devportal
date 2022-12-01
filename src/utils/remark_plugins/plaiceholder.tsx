import { visit } from 'unist-util-visit'
import { getPlaiceholder } from 'plaiceholder'
import probe from 'probe-image-size'

const maxIMGSizePx = 1500

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformer(ast: any) {
  const promises: Promise<void>[] = []
  visit(ast, 'image', visitor)

  function visitor(node: { url: string | Buffer; alt: string }) {
    console.log(`Checking img:${node.url}`)
    promises.push(
      probe(node.url as string).then((results) => {
        console.log(`Probed img:${node.url}`)
        const img = results
        if (img.width < maxIMGSizePx && img.height < maxIMGSizePx) {
          promises.push(
            getPlaiceholder(node.url).then((resultsPlaiceholder) => {
              console.log(`Plaiceholder done img:${node.url}`)
              node.alt = JSON.stringify({
                base64: resultsPlaiceholder.base64,
                img: resultsPlaiceholder.img,
              })
              console.log(node.alt)
            })
          )
        } else {
          node.alt = JSON.stringify({
            base64: '  ',
            img: img,
            alt: node.alt,
          })
        }
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
