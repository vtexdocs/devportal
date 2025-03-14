import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, IconCaret, Text } from '@vtex/brand-ui'

import Tooltip from 'components/tooltip'

import { getMessages } from 'utils/get-messages'

import styles from './styles'
import { ContributorsType } from 'utils/getFileContributors'
import Image from 'next/image'

interface Props {
  contributors: ContributorsType[]
}

const Contributors = ({ contributors }: Props) => {
  const messages = getMessages()
  const [mounted, setMounted] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [pageWidth, setPageWidth] = useState(0)
  const [photosPerRow, setPhotosPerRow] = useState(6) // Default to 6 for SSR
  const [minRows, setMinRows] = useState(1) // Default to 1 for SSR
  const photosContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updatePageWidth = () => {
      setPageWidth(window.innerWidth)
    }

    window.addEventListener('resize', updatePageWidth)
    return () => window.removeEventListener('resize', updatePageWidth)
  }, [mounted])

  useEffect(() => {
    if (!mounted || !photosContainer.current) return

    const gridStyle = window.getComputedStyle(photosContainer.current)
    setPhotosPerRow(gridStyle.gridTemplateColumns.split(' ').length)
  }, [pageWidth, mounted])

  useEffect(() => {
    if (!mounted) return
    setMinRows(photosPerRow === 6 ? 1 : 2)
  }, [photosPerRow, mounted])

  const visibleContributors = mounted
    ? contributors
    : contributors.slice(0, photosPerRow * minRows)

  return (
    <Flex sx={styles.container}>
      <Flex sx={styles.titleContainer}>
        <Text sx={styles.title}>
          {messages['api_guide_documentation_page_contributors.title']}
        </Text>
        <Text sx={styles.count}>{contributors.length}</Text>
      </Flex>

      <Grid
        sx={styles.photosContainer(
          showAll
            ? Math.ceil(contributors.length / photosPerRow)
            : Math.min(Math.ceil(contributors.length / photosPerRow), minRows)
        )}
        ref={photosContainer}
        data-cy="contributors-container"
      >
        {visibleContributors.map((contributor) => (
          <Box sx={styles.photo} key={contributor.login}>
            <a href={contributor.userPage}>
              <Tooltip label={contributor.name}>
                <Image
                  src={contributor.avatar}
                  alt="Photo of the contributor"
                  width={32}
                  height={32}
                />
              </Tooltip>
            </a>
          </Box>
        ))}
      </Grid>

      {contributors.length > minRows * photosPerRow && mounted && (
        <Flex
          sx={styles.collapseButton}
          onClick={() => {
            setShowAll(!showAll)
          }}
        >
          <Text>
            {showAll
              ? messages['api_guide_documentation_page_contributors.toggleText']
              : `+ ${
                  contributors.length - minRows * photosPerRow
                } contributors`}
          </Text>
          <IconCaret direction={showAll ? 'up' : 'down'} size={24} />
        </Flex>
      )}
    </Flex>
  )
}

export default Contributors
