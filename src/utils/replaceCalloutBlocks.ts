/**
 * Parses Readme-style `[block:callout]` Magic Blocks into Markdown blockquotes
 * and decorates the resulting `<blockquote>` HTML with callout-type classes.
 *
 * Two-stage flow:
 *   1. `replaceCalloutBlocks` runs on the raw Markdown source before
 *      `marked.parse`, converting each `[block:callout]` into a `> …`
 *      blockquote prefixed with a type-specific emoji.
 *   2. `enhanceCalloutHtml` runs on the parsed HTML, adding
 *      `overview-callout overview-callout--<type>` classes so styles can target
 *      each callout variant.
 *
 * `src/utils/replaceMagicBlocks.ts` already handles the `callout` block type,
 * but it produces inline JSX intended for guide pages. The API reference
 * overview needs a Markdown-only path, so the parsing logic lives here.
 */

export type CalloutType = 'info' | 'warning' | 'danger' | 'success'

export const calloutIconByType: Record<CalloutType, string> = {
  info: '\u2139\uFE0F',
  warning: '\u26A0\uFE0F',
  danger: '\u2757',
  success: '\u2705',
}

export const calloutPatternByType: Record<CalloutType, RegExp> = {
  info: /^(?:<p>)?\s*(?:\u2139\uFE0F|\u2139)\s*/u,
  warning: /^(?:<p>)?\s*(?:\u26A0\uFE0F?|\u26A0)\s*/u,
  danger: /^(?:<p>)?\s*(?:\u2757\uFE0F?|\u2757)\s*/u,
  success: /^(?:<p>)?\s*(?:\u2705)\s*/u,
}

export function isCalloutType(value: unknown): value is CalloutType {
  return (
    value === 'info' ||
    value === 'warning' ||
    value === 'danger' ||
    value === 'success'
  )
}

export function getCalloutType(value: string): CalloutType | null {
  const matchingType = (
    Object.entries(calloutPatternByType) as [CalloutType, RegExp][]
  ).find(([, pattern]) => pattern.test(value))

  return matchingType ? matchingType[0] : null
}

export function replaceCalloutBlocks(markdown: string) {
  return markdown.replace(
    /\[block:callout\]\s*([\s\S]*?)\s*\[\/block\]/g,
    (match, blockContent: string) => {
      try {
        const parsedBlock = JSON.parse(blockContent) as {
          type?: unknown
          title?: unknown
          body?: unknown
        }
        const calloutType = isCalloutType(parsedBlock.type)
          ? parsedBlock.type
          : 'info'
        const title =
          typeof parsedBlock.title === 'string' ? parsedBlock.title.trim() : ''
        const body =
          typeof parsedBlock.body === 'string' ? parsedBlock.body.trim() : ''
        const calloutLines: string[] = []

        if (title) {
          calloutLines.push(`> ${calloutIconByType[calloutType]} **${title}**`)
        }

        if (body) {
          const bodyLines = body.split(/\r?\n/)

          if (title) {
            calloutLines.push('>')
          } else {
            const firstNonEmptyLineIndex = bodyLines.findIndex((line) =>
              line.trim()
            )

            if (firstNonEmptyLineIndex > -1) {
              bodyLines[firstNonEmptyLineIndex] = `${
                calloutIconByType[calloutType]
              } ${bodyLines[firstNonEmptyLineIndex].trimStart()}`
            }
          }

          bodyLines.forEach((line) => {
            calloutLines.push(line ? `> ${line}` : '>')
          })
        }

        if (!calloutLines.length) {
          return match
        }

        return `${calloutLines.join('\n')}\n`
      } catch {
        return match
      }
    }
  )
}

export function enhanceCalloutHtml(content: string) {
  return content.replace(
    /<blockquote>\s*([\s\S]*?)<\/blockquote>/g,
    (blockquote, innerContent: string) => {
      const trimmedInnerContent = innerContent.trim()
      const calloutType = getCalloutType(trimmedInnerContent)

      if (!calloutType) {
        return blockquote
      }

      const normalizedInnerContent = trimmedInnerContent.replace(
        calloutPatternByType[calloutType],
        '<p>'
      )

      return `<blockquote class="overview-callout overview-callout--${calloutType}">${normalizedInnerContent}</blockquote>`
    }
  )
}
