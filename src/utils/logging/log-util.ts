import chalk from 'chalk'
import https from 'https'

function sendToZapier(msg: string) {
  const postData = JSON.stringify({
    msg,
  })

  const options = {
    hostname: 'hooks.zapier.com',
    path: process.env.ZAPIER_LOG_HOOK_PATH,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
  }

  const req = https.request(options)

  // Write data to request body
  req.write(postData)
  req.end()
}

chalk.level = 3

function Logger(level: string, name: string, msg: string) {
  const msgToSend = `${level} - ${name}\n${msg}`
  switch (level) {
    case 'INFO':
      console.log(chalk.bgGreenBright(msgToSend))
      break
    case 'ERROR':
      console.log(chalk.bgRed(msgToSend))
      if (process.env.ZAPIER_LOG_HOOK_PATH) {
        sendToZapier(msgToSend)
      }
      break
    case 'WARN':
      console.warn(chalk.bgYellow.black(msgToSend))
      break
    default:
      console.log(chalk.bgBlue(msgToSend))
      break
  }
}

export function getLogger(name: string) {
  return {
    error: (msg: string) => {
      Logger('ERROR', name, msg)
    },
    info: (msg: string) => {
      Logger('INFO', name, msg)
    },
    warn: (msg: string) => {
      Logger('WARN', name, msg)
    },
  }
}
