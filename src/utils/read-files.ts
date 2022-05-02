import fs from 'fs'
import path from 'path'

export const getSlugs = (dir: string, ext: string) => {
  const filenames = fs.readdirSync(path.join(process.cwd(), dir))
  return filenames.map((filename) => filename.replace(`.${ext}`, ''))
}

export const readFile = (dir: string, slug: string, ext: string) => {
  const fullPath = path.join(process.cwd(), dir, `${slug}.${ext}`)
  return fs.readFileSync(fullPath, 'utf8')
}
