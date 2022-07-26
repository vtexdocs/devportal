import { useState } from 'react'
import { Box, Flex, Grid, IconCaret, Text } from '@vtex/brand-ui'

import MenuIcon from 'components/icons/menu-icon'
import CloseIcon from 'components/icons/close-icon'

import Tooltip from 'components/tooltip'

import styles from './styles'
import TableOfContents from 'components/table-of-contents'

interface Props {
  contributors: string[]
}

const OnThisPage = ({ contributors }: Props) => {
  const [open, setOpen] = useState(false)
  const [showContributors, setShowContributors] = useState(false)

  return (
    <Flex sx={styles.container}>
      {open && (
        <Box sx={styles.contentContainer}>
          <Flex sx={styles.contributorsHeaderContainer}>
            <Flex sx={styles.contributorsTitleContainer}>
              <Text sx={styles.contributorsTitle}>
                {showContributors ? 'Hide contributors' : 'Show contributors'}
              </Text>
              <Text sx={styles.contributorsCount}>{contributors.length}</Text>
            </Flex>

            <IconCaret
              size={24}
              direction={showContributors ? 'up' : 'down'}
              sx={styles.contributorsCaret}
              onClick={() =>
                setShowContributors((showContributors) => !showContributors)
              }
            />
          </Flex>

          {showContributors && (
            <Grid sx={styles.photoGrid}>
              {contributors.map((contributor) => (
                <a key={contributor} href="#">
                  <Tooltip label={contributor}>
                    <Box sx={styles.photo} />
                  </Tooltip>
                </a>
              ))}
            </Grid>
          )}

          <Text sx={styles.onThisPageTitle}>On this page</Text>
          <Box sx={styles.tableOfContents}>
            <TableOfContents />
          </Box>
        </Box>
      )}

      <Flex
        sx={styles.buttonContainer}
        onClick={() => setOpen((open) => !open)}
      >
        <Box sx={styles.iconContainer}>
          {!open ? <MenuIcon size={32} /> : <CloseIcon size={32} />}
        </Box>
        {!open && (
          <Box sx={styles.titlesContainer}>
            <Text sx={styles.title}>On this page</Text>
            <Text sx={styles.title}>Contributors</Text>
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default OnThisPage
