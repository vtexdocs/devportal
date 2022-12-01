import { visit } from 'unist-util-visit'
import { getPlaiceholder } from 'plaiceholder'
import probe from 'probe-image-size'

const maxIMGSize = 1500 //To handle memory problems in netlify build

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function transformer(ast: any) {
  const promises: Promise<void>[] = []
  visit(ast, 'image', visitor)

  function visitor(node: { url: string | Buffer; alt: string }) {
    promises.push(
      probe(node.url as string).then((results) => {
        console.log(`Checking img:${node.url}`)
        const img = results
        if (img.width < maxIMGSize && img.height < maxIMGSize) {
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
