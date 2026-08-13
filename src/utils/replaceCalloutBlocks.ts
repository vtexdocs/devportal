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

const calloutIconColorByType: Record<CalloutType, string> = {
  info: '#8C929D',
  warning: '#FFB100',
  danger: '#DC5A41',
  success: '#80BE80',
}

export function calloutIconSvg(calloutType: CalloutType) {
  const fill = calloutIconColorByType[calloutType]
  const glyph =
    calloutType === 'success'
      ? '<path d="M5.5 10.3L8.3 13L14.5 6.8" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
      : calloutType === 'info'
      ? '<rect x="9.1" y="5" width="1.8" height="1.8" rx="0.9" fill="white"/><rect x="9.1" y="8.2" width="1.8" height="6.8" rx="0.9" fill="white"/>'
      : '<rect x="9.1" y="5" width="1.8" height="7" rx="0.9" fill="white"/><rect x="9.1" y="13.5" width="1.8" height="1.8" rx="0.9" fill="white"/>'

  return `<svg class="overview-callout-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="${fill}"/>${glyph}</svg>`
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

      return `<blockquote class="overview-callout overview-callout--${calloutType}">${calloutIconSvg(
        calloutType
      )}${normalizedInnerContent}</blockquote>`
    }
  )
}
