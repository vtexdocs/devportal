import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, IconCaret, Text } from '@vtex/brand-ui'

import Tooltip from 'components/tooltip'

import { getMessages } from 'utils/get-messages'

import styles from './styles'

interface Props {
  contributors: string[]
}

const Contributors = ({ contributors }: Props) => {
  const messages = getMessages()

  const [showAll, setShowAll] = useState(false)
  const [pageWidth, setPageWidth] = useState(0)
  const [photosPerRow, setPhotosPerRow] = useState(0)
  const photosContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePageWidth = () => {
      setPageWidth(window.innerWidth)
    }

    window.addEventListener('resize', updatePageWidth)
    return () => window.removeEventListener('resize', updatePageWidth)
  }, [])

  useLayoutEffect(() => {
    if (photosContainer.current) {
      const gridStyle = window.getComputedStyle(photosContainer.current)
      setPhotosPerRow(gridStyle.gridTemplateColumns.split(' ').length)
    }
  }, [pageWidth])

  return (
    <Box>
      <Flex>
        <Text sx={styles.title}>
          {messages['api_guide_documentation_page_contributors.title']}
        </Text>
        <Text sx={styles.count}>{contributors.length}</Text>
      </Flex>

      <Grid
        sx={styles.photosContainer(
          showAll
            ? Math.ceil(contributors.length / photosPerRow)
            : Math.min(Math.ceil(contributors.length / photosPerRow), 2)
        )}
        ref={photosContainer}
      >
        {contributors.map((contributor) => {
          return (
            <a key={contributor} href="#">
              <Tooltip label={contributor}>
                <Box sx={styles.photo} />
              </Tooltip>
            </a>
          )
        })}
      </Grid>

      {contributors.length > 2 * photosPerRow && (
        <Flex
          sx={styles.collapseButton}
          onClick={() => {
            setShowAll(!showAll)
          }}
        >
          <Text>
            {showAll
              ? messages['api_guide_documentation_page_contributors.toggleText']
              : `+ ${contributors.length - 2 * photosPerRow} contributors`}
          </Text>
          <IconCaret direction={showAll ? 'up' : 'down'} size={24} />
        </Flex>
      )}
    </Box>
  )
}

export default Contributors
