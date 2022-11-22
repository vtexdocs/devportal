const escapeCurlyBraces: (content: string) => string = (content) => {
  let newContent = ''
  let insideCodeBlock = false

  for (let i = 0; i < content.length; i++) {
    if (content.charAt(i) == '{' && !insideCodeBlock) newContent += '\\{'
    else if (content.charAt(i) == '}' && !insideCodeBlock) newContent += '\\}'
    else {
      newContent += content.charAt(i)
      if (content.charAt(i) == '`') {
        insideCodeBlock = !insideCodeBlock
      }
    }
  }

  return newContent
}

export default escapeCurlyBraces
