const assertCodeBlocksAreCorrectlyFormatted = (content: string) => {
  let idx = 0,
    row = 1,
    col = 1
  let insideMultiLineCodeBlock = false
  let insideSingleLineCodeBlock = false
  let lastRow = -1,
    lastCol = -1

  const error = (row: number, col: number) => {
    throw new Error(
      `There is an incorrectly formatted code block at line ${row} and column ${col} in this file`
    )
  }

  while (idx < content.length) {
    if (content.charAt(idx) !== '`') {
      if (
        insideMultiLineCodeBlock ||
        !insideSingleLineCodeBlock ||
        !/\s/.test(content.charAt(idx))
      ) {
        col++
        if (content.charAt(idx++) === '\n') {
          row++
          col = 1
        }
      } else {
        let newLineCount = 0
        while (idx < content.length && /\s/.test(content.charAt(idx))) {
          if (content.charAt(idx++) !== '\n') col++
          else newLineCount++, row++, (col = 1)
        }

        if (idx >= content.length || newLineCount > 1) error(lastRow, lastCol)
      }
    } else {
      let backtickCount = 0
      while (idx < content.length && content.charAt(idx) === '`') {
        idx++
        col++
        backtickCount++
      }

      if (backtickCount === 3) {
        if (insideSingleLineCodeBlock) error(lastRow, lastCol)
        insideMultiLineCodeBlock = !insideMultiLineCodeBlock
        lastRow = row
        lastCol = col
      } else if (backtickCount === 1 && !insideMultiLineCodeBlock) {
        insideSingleLineCodeBlock = !insideSingleLineCodeBlock
        lastRow = row
        lastCol = col
      }
    }
  }

  if (insideMultiLineCodeBlock || insideSingleLineCodeBlock)
    error(lastRow, lastCol)
}

const escapeCurlyBraces: (content: string) => string = (content) => {
  assertCodeBlocksAreCorrectlyFormatted(content)

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
