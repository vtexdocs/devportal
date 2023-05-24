import { useEffect, useRef, useState } from 'react'
import { connectHighlight } from 'react-instantsearch-dom'
import { HighlightProps } from 'react-instantsearch-core'
import { Flex, Text } from '@vtexdocs/brand-ui'
import styles from './styles'

interface HighLightPartsProps {
  index: number
  isBetween: boolean
  size: number
}

interface HitHighlightProps {
  value: string
  isHighlighted: boolean
}
interface CustomHighlightProps extends HighlightProps {
  searchPage?: boolean
}

const Highlight = ({
  highlight,
  attribute,
  hit,
  searchPage,
}: CustomHighlightProps) => {
  const [parsedHit, setParsedHit] = useState<HitHighlightProps[]>([])
  const textContainer = useRef<HTMLElement>(null)
  const hitHighlights: HitHighlightProps[] = highlight({
    highlightProperty: '_highlightResult',
    attribute: hit.type != 'content' ? `hierarchy.${hit.type}` : attribute,
    hit,
  })
  const maxDescriptionSize = 700
  const ellipsedContent: HitHighlightProps[] = []
  if (searchPage) {
    let charCount = 0
    hitHighlights.forEach((part) => {
      if (maxDescriptionSize - charCount <= 0) return
      if (part.value.length + charCount >= maxDescriptionSize) {
        part.value =
          part.value.slice(0, maxDescriptionSize - charCount - 3) + '...'
      }
      charCount += part.value.length
      ellipsedContent.push(part)
    })
  }

  useEffect(() => {
    if (searchPage) return
    const titleSize = textContainer.current
      ? textContainer.current.offsetWidth / 7.75
      : 40

    const highlightParts: HighLightPartsProps[] = []
    let highlightCount = 0,
      highlightLength = 0

    hitHighlights.forEach((match: HitHighlightProps, index: number) => {
      const isBetween =
        index > 0 && index < hitHighlights.length - 1 ? true : false
      if (match.isHighlighted) {
        if (isBetween) highlightCount++
        highlightCount++
        highlightLength += match.value.length
      } else {
        highlightParts.push({
          index,
          isBetween,
          size: match.value.length,
        })
      }
    })

    highlightParts.sort(
      (a: HighLightPartsProps, b: HighLightPartsProps) => a.size - b.size
    )

    let sizeRemaining = titleSize - highlightLength
    let size = sizeRemaining / (highlightCount || 1)

    highlightParts.forEach((match: HighLightPartsProps) => {
      const value = hitHighlights[match.index].value
      if (match.isBetween) {
        if (match.size >= size * 2) {
          const reticences = (size * 2 - 3) / 2
          hitHighlights[match.index].value =
            value.slice(0, reticences) +
            '...' +
            value.slice(value.length - reticences)
          sizeRemaining -= size * 2
        } else {
          sizeRemaining -= match.size
        }
        highlightCount -= 2
      } else {
        if (match.size >= size) {
          if (match.index === 0)
            hitHighlights[match.index].value =
              '...' + value.slice(value.length - (size - 3))
          else
            hitHighlights[match.index].value = value.slice(0, size - 3) + '...'
          sizeRemaining -= size
        } else {
          sizeRemaining -= match.size
        }
        highlightCount -= 1
      }
      size = sizeRemaining / highlightCount
      hitHighlights[match.index].value = hitHighlights[
        match.index
      ].value.replace(/\s+/g, '\u00A0')
    })
    setParsedHit(hitHighlights)
  }, [hit, textContainer.current])

  return (
    <Flex
      ref={textContainer}
      className="hit-content-title"
      sx={styles.hitContentContainer}
    >
      <Text sx={searchPage ? styles.hitContent : styles.hitContentSmall}>
        {(searchPage ? ellipsedContent : parsedHit).map(
          (part: HitHighlightProps, index: number) =>
            part.isHighlighted ? (
              <mark style={styles.hitContentHighlighted} key={index}>
                {part.value}
              </mark>
            ) : (
              part.value
            )
        )}
      </Text>
    </Flex>
  )
}

export default connectHighlight(Highlight)
