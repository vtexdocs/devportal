import path from 'path'
import imageDownloader from 'image-downloader'

interface Image {
  filepath: string
  url: string
}

const getExtension = (url: string) => {
  let dotIndex = url.length - 1
  while (dotIndex >= 0 && url[dotIndex] !== '.') {
    dotIndex--
  }

  if (dotIndex < 0) return 'png'
  return url.substring(dotIndex + 1)
}

export const updateImages: (
  slug: string,
  content: string
) => Promise<string> = async (slug, content) => {
  const images: Image[] = []
  const newContent = content.replace(
    /\!\[(.*)\]\((.*)\)/g,
    (_match, altText, url) => {
      const ext = getExtension(url)
      const filename = `${slug}-${images.length}.${ext}`
      const filepath = path.resolve('public', 'images', filename)

      images.push({ filepath, url })
      return `![${altText}](/images/${filename})`
    }
  )

  for (let i = 0; i < images.length; i++) {
    const { filepath, url } = images[i]
    await imageDownloader.image({ url, dest: filepath })
  }

  return newContent
}
