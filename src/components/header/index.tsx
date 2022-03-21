import { Header as HeaderBrand, Flex, Link, Text, Box } from '@vtex/brand-ui'
import { useEffect, useState } from 'react'

import { toggleHeader } from './functions'
import VTEXDevportalIcon from 'public/icons/vtex-devportal-icon'
import SearchIcon from 'public/icons/search-icon'
import { getFeedbackURL } from 'utils/get-url'

import styles from './styles'

export const rightLinks = [
  {
    to: () => '/docs',
    title: 'Docs',
    target: '_blank',
  },
  {
    to: () => getFeedbackURL(),
    title: 'Feedback',
    target: '_blank',
  },
]

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const [lastScroll, setLastScroll] = useState(0)

  const [headerElement, setHeaderElement] = useState<HTMLElement | null>()

  useEffect(() => {
    return setHeaderElement(document.getElementById('header'))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      toggleHeader(setLastScroll, lastScroll, headerElement)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        toggleHeader(setLastScroll, lastScroll, headerElement)
      })
    }
  })

  return (
    <Box id="header" sx={styles.headerContainer}>
      <HeaderBrand sx={styles.headerBrand}>
        <HeaderBrand.Brand>
          <Link href="./">
            <VTEXDevportalIcon sx={styles.logoSize} />
          </Link>
        </HeaderBrand.Brand>

        <Flex sx={styles.searchContainer}>
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <input
              style={styles.searchInput}
              className="searchComponent"
              type="text"
              placeholder="Search in Developers"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </Flex>
        </Flex>

        <HeaderBrand.RightLinks sx={styles.rightLinks}>
          {rightLinks.map((link, key) => (
            <Link
              sx={styles.rightLinksItem}
              key={key}
              href={link.to()}
              target={link.target}
            >
              <Text>{link.title}</Text>
            </Link>
          ))}
        </HeaderBrand.RightLinks>
      </HeaderBrand>
    </Box>
  )
}

export default Header
