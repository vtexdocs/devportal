import crypto from 'crypto'
import fs from 'fs'

const SECRETS_PATH = 'sheets-secrets'
let secrets: { [key: string]: string } | undefined = undefined

const getSecrets = () => {
  if (!secrets) {
    let data = fs.readFileSync(SECRETS_PATH, 'utf-8')
    data = decrypt(data)
    try {
      secrets = JSON.parse(data)
    } catch (err) {
      throw err
    }
  }
}

const getEncryptionKey = (): string => {
  const unvalidatedEnvironmentVariable = process.env.ENCRYPTION_KEY
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ENCRYPTION_KEY`)
  } else {
    return unvalidatedEnvironmentVariable
  }
}

function decrypt(text: string) {
  const textParts = text.split(':')
  const iv = Buffer.from(textParts.shift() ?? '', 'hex')
  const encryptedText = Buffer.from(textParts.join(':'), 'hex')
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(getEncryptionKey()),
    iv
  )
  let decrypted = decipher.update(encryptedText)

  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

export const getVariable = (environmentVariable: string): string => {
  getSecrets()
  const secret = secrets?.[environmentVariable]

  if (!secret) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    )
  }

  return secret
}
