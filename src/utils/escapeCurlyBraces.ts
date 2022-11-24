const correctlyFormattedCodeBlocks: (content: string) => boolean = (
  content
) => {
  let idx = 0
  let insideMultiLineCodeBlock = false
  let insideSingleLineCodeBlock = false

  while (idx < content.length) {
    if (content.charAt(idx) !== '`') {
      if (insideMultiLineCodeBlock || !insideSingleLineCodeBlock) idx++
      else if (!/\s/.test(content.charAt(idx))) idx++
      else {
        let newLineCount = 0
        while (idx < content.length && /\s/.test(content.charAt(idx))) {
          if (content.charAt(idx++) === '\n') newLineCount++
        }

        if (idx >= content.length || newLineCount > 1) return false
      }
    } else {
      let backtickCount = 0
      while (idx < content.length && content.charAt(idx) === '`') {
        idx++
        backtickCount++
      }

      if (backtickCount === 3)
        insideMultiLineCodeBlock = !insideMultiLineCodeBlock
      else if (backtickCount === 1)
        insideSingleLineCodeBlock = !insideSingleLineCodeBlock
    }
  }

  return !insideMultiLineCodeBlock && !insideSingleLineCodeBlock
}

const escapeCurlyBraces: (content: string) => string = (content) => {
  if (!correctlyFormattedCodeBlocks(content))
    throw new Error('There are incorrectly formatted code blocks in this file')

  let newContent = ''
  let insideCodeBlock = false

  for (let i = 0; i < content.length; i++) {
    if (content.charAt(i) === '{' && !insideCodeBlock) newContent += '\\{'
    else if (content.charAt(i) === '}' && !insideCodeBlock) newContent += '\\}'
    else {
      newContent += content.charAt(i)
      if (content.charAt(i) === '`') {
        insideCodeBlock = !insideCodeBlock
      }
    }
  }

  return newContent
}

export default escapeCurlyBraces
