import en from '../messages/en.json'
import pt from '../messages/pt.json'
import es from '../messages/es.json'

interface Messages {
  [key: string]: {
    [key: string]: string
  }
}

const messages: Messages = {
  en,
  pt,
  es,
}

export const getMessages = (): Messages => {
  return messages
}
