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

      if (backtickCount === 3) {
        if (insideSingleLineCodeBlock) return false
        insideMultiLineCodeBlock = !insideMultiLineCodeBlock
      } else if (backtickCount === 1 && !insideMultiLineCodeBlock) {
        insideSingleLineCodeBlock = !insideSingleLineCodeBlock
      }
    }
  }

  return !insideMultiLineCodeBlock && !insideSingleLineCodeBlock
}

const escapeCurlyBraces: (content: string) => string = (content) => {
  if (!correctlyFormattedCodeBlocks(content))
    throw new Error('There are incorrectly formatted code blocks in this file')

  let idx = 0
  let newContent = ''
  let insideCodeBlock = false
  let insideMagicBlock = false

  if (content.startsWith('---')) {
    idx += 3
    while (content.substring(idx, idx + 3) !== '---') idx++
    idx += 3
  }
  newContent = content.substring(0, idx)
  while (idx < content.length) {
    if (content.charAt(idx) === '{' && !insideCodeBlock && !insideMagicBlock)
      newContent += '\\{'
    else if (
      content.charAt(idx) === '}' &&
      !insideCodeBlock &&
      !insideMagicBlock
    )
      newContent += '\\}'
    else {
      newContent += content.charAt(idx)
      if (content.charAt(idx) === '`') insideCodeBlock = !insideCodeBlock
      else if (content.charAt(idx) === '[') {
        if (content.substring(idx + 1, idx + 6) === 'block')
          insideMagicBlock = true
        else if (content.substring(idx + 1, idx + 7) === '/block')
          insideMagicBlock = false
      }
    }

    idx++
  }

  return newContent
}

export default escapeCurlyBraces
