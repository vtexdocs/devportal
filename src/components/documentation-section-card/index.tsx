import Link from 'next/link'
import { Box, Flex, Text } from '@vtex/brand-ui'

import { getMessages } from 'utils/get-messages'
import type { DocDataElement } from 'utils/typings/types'
import { Tooltip } from '@vtexdocs/components'
import styles from './styles'
import { useEffect, useRef, useState } from 'react'

const DocumentationSectionCard = ({
  Icon,
  title,
  description,
  link,
}: DocDataElement) => {
  const messages = getMessages()
  const [tooltipState, setTooltipState] = useState(false)
  const [tooltipDescription, setTooltipDescription] = useState(description)
  const descriptionRef = useRef<HTMLElement>()

  useEffect(() => {
    const resizeObserver = new MutationObserver(function (entries) {
      const target = entries[0].target as HTMLElement
      if (target.offsetHeight < target.scrollHeight) setTooltipState(true)
      else setTooltipState(false)
      setTooltipDescription(target.innerText)
    })
    if (descriptionRef.current) {
      resizeObserver.observe(descriptionRef.current, {
        childList: true,
      })
    }
    return () => {
      resizeObserver.disconnect
    }
  }, [descriptionRef.current])

  return (
    <Box sx={{ height: '100%' }}>
      <Tooltip
        placement="top"
        label={tooltipDescription}
        isCard={tooltipState}
        wrapperSx={{
          height: '100%',
          '& > div:first-of-type': { height: '100%' },
        }}
      >
        <Link href={link} style={{ display: 'block', height: '100%' }}>
          <Flex sx={styles.cardContainer}>
            <Flex sx={styles.infoContainer}>
              <Flex sx={styles.iconWrapper}>
                <Icon sx={styles.icon} />
              </Flex>
              <Text className="title" sx={styles.title}>
                {title}
              </Text>
              <Text
                ref={descriptionRef}
                className="description"
                sx={styles.description}
              >
                {description}
              </Text>
            </Flex>
            <Flex
              className="quickStartedContainer"
              sx={styles.quickStartedContainer}
            >
              <Text className="learnMoreText" sx={styles.learnMoreText}>
                {
                  messages[
                    'landing_page_documentation_documentation_card.learnMoreText'
                  ]
                }
              </Text>
            </Flex>
          </Flex>
        </Link>
      </Tooltip>
    </Box>
  )
}

export default DocumentationSectionCard
