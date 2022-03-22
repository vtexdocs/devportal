import {
  Header as HeaderBrand,
  Link as VtexLink,
  Flex,
  Text,
  Box,
} from '@vtex/brand-ui'
import { useEffect, useRef, useState } from 'react'

import VTEXDevportalIcon from 'public/icons/vtex-devportal-icon'
import SearchIcon from 'public/icons/search-icon'
import { getFeedbackURL } from 'utils/get-url'

import styles from './styles'
import Link from 'next/link'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const lastScroll = useRef(0)

  const [headerElement, setHeaderElement] = useState<HTMLElement | null>()

  useEffect(() => {
    return setHeaderElement(document.getElementById('header'))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (headerElement) {
        const height = headerElement.children[0].clientHeight
        if (window.scrollY > height && window.scrollY > lastScroll.current) {
          headerElement.style.top = `-${height}px`
        } else {
          headerElement.style.top = '0'
        }
        lastScroll.current = window.scrollY
      }
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [headerElement])

  return (
    <Box id="header" sx={styles.headerContainer}>
      <HeaderBrand sx={styles.headerBrand}>
        <HeaderBrand.Brand>
          <Link href="/">
            <a>
              <VTEXDevportalIcon sx={styles.logoSize} />
            </a>
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
          <Text sx={styles.docsDropDown}>Docs</Text>
          <VtexLink
            sx={styles.rightLinksItem}
            href={getFeedbackURL()}
            target="_blank"
          >
            <Text>FeedBack</Text>
          </VtexLink>
        </HeaderBrand.RightLinks>
      </HeaderBrand>
    </Box>
  )
}

export default Header
