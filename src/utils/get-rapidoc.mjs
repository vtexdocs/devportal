import fetch from 'node-fetch'
import * as fs from 'fs'
import * as path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkgJson = require('../../package.json')

const rapidoc_version = `${pkgJson.config.rapidoc.version}`
const rapidoc_dir = path.join('public', 'rapidoc')
const rapidoc_file = 'rapidoc-min.js'

const assertDirExists = (dir_path) => {
  if (!fs.existsSync(dir_path)) {
    fs.mkdirSync(dir_path)
  }
}

const getRapidocFile = async (version) => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/vtexdocs/RapiDoc/v${version}/dist/rapidoc-min.js`
    )
    if (!response.ok) {
      const err = new Error(`response status ${response.status}`)
      err.response = response
      throw err
    } else {
      assertDirExists(rapidoc_dir)
      const rapidoc_file_path = path.join(rapidoc_dir, rapidoc_file)
      const file_stream = fs.createWriteStream(rapidoc_file_path)
      await new Promise((resolve, reject) => {
        response.body.pipe(file_stream)
        response.body.on('error', reject)
        file_stream.on('finish', resolve)
      })
    }
  } catch (err) {
    console.log(`[Error] ${err.message}, ${rapidoc_file} could not be fetched.`)
  }
}

getRapidocFile(rapidoc_version)
