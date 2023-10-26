import fetch from 'node-fetch'
import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkgJson = require('../../package.json')

const components_version = `${pkgJson.config.components.version}`
const components_dir = path.join('public', 'components')
const components_files = [
  'index.css',
  'index.css.map',
  'index.d.mts',
  'index.mjs',
  'index.mjs.map',
]

const assertDirExists = (dir_path) => {
  if (!fs.existsSync(dir_path)) {
    fs.mkdirSync(dir_path)
  }
}

const getComponentLib = async (version) => {
  try {
    for (const file of components_files) {
      const response = await fetch(
        `https://raw.githubusercontent.com/vtexdocs/components/v${version}/dist/${file}`
      )

      if (!response.ok) {
        const err = new Error(`response status ${response.status}`)
        err.response = response
        throw err
      } else {
        assertDirExists(components_dir)
        const components_file_path = path.join(components_dir, file)
        const file_stream = fs.createWriteStream(components_file_path)
        await new Promise((resolve, reject) => {
          response.body.pipe(file_stream)
          response.body.on('error', reject)
          file_stream.on('finish', resolve)
        })
        console.log(`Fetched ${file} successfully.`)
      }
    }
  } catch (err) {
    console.error(`[Error] ${err.message}, files could not be fetched.`)
  }
}

getComponentLib(components_version)
