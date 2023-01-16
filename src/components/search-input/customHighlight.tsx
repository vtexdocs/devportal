/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { connectHighlight } from 'react-instantsearch-dom'
import { Flex, Text } from '@vtex/brand-ui'
import styles from './styles'

const Highlight = ({ highlight, attribute, hit }: any) => {
  const [parsedHit, setParsedHit] = useState([])

  useEffect(() => {
    const titleSize = 40
    const highlightParts: any = []
    let highlightCount = 0,
      highlightLength = 0

    const hitHighlights = highlight({
      highlightProperty: '_highlightResult',
      attribute: hit.type != 'content' ? `hierarchy.${hit.type}` : attribute,
      hit,
    })

    hitHighlights.forEach((match: any, index: number) => {
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

    highlightParts.sort((a: any, b: any) => a.size - b.size)
    let sizeRemaining = titleSize - highlightLength
    let size = sizeRemaining / highlightCount
    highlightParts.forEach((match: any) => {
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
      hitHighlights[match.index]
    })
    setParsedHit(hitHighlights)
  }, [hit])

  return (
    <Flex className="hit-content-title">
      {parsedHit.map((part: any, index: any) =>
        part.isHighlighted ? (
          <Text sx={styles.hitContentHighlighted} key={index}>
            {part.value}
          </Text>
        ) : (
          <Text sx={styles.hitContent} key={index}>
            {part.value}
          </Text>
        )
      )}
    </Flex>
  )
}

export default connectHighlight(Highlight)
