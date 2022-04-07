import {
  Header as HeaderBrand,
  Link as VtexLink,
  Flex,
  Text,
  Box,
} from '@vtex/brand-ui'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import HamburgerMenu from './hamburger-menu'
import DropdownMenu from 'components/dropdown-menu'
import VTEXDevportalIcon from 'components/icons/vtex-devportal-icon'
import SearchIcon from 'components/icons/search-icon'
import { getFeedbackURL } from 'utils/get-url'
import { getMessages } from 'utils/get-messages'

import styles from './styles'

const Header = () => {
  const router = useRouter()
  const lastScroll = useRef(0)
  const dropdownMenu = useRef<HTMLDivElement>(null)

  const [searchValue, setSearchValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [headerElement, setHeaderElement] = useState<HTMLElement | null>()

  const messages = getMessages()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: '/search',
      query: { keyword: 'SKU' },
    })
  }
  useEffect(() => {
    return setHeaderElement(document.getElementById('header'))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (headerElement) {
        const headerHeight = headerElement.children[0].clientHeight
        if (
          window.scrollY > headerHeight &&
          window.scrollY > lastScroll.current
        ) {
          headerElement.style.top = `-${headerHeight}px`
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownMenu.current &&
        !dropdownMenu.current.contains(e.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownMenu])

  useEffect(() => {
    const hideDropdown = () => {
      setShowDropdown(false)
    }

    router.events.on('routeChangeStart', hideDropdown)
    return () => router.events.off('routeChangeStart', hideDropdown)
  }, [])

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

        <Box sx={styles.searchContainer}>
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <form onSubmit={onSubmit}>
              <input
                style={styles.searchInput}
                className="searchComponent"
                type="text"
                placeholder={
                  messages['landing_page_header_searchInput.message']
                }
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
              />
            </form>
          </Flex>
        </Box>

        <HeaderBrand.RightLinks sx={styles.rightLinks}>
          <Flex sx={styles.dropdownContainer} ref={dropdownMenu}>
            <Text
              sx={styles.dropdownButton(showDropdown)}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {messages['landing_page_header_docs.message']}
            </Text>

            {showDropdown && <DropdownMenu />}
          </Flex>

          <VtexLink
            sx={styles.rightLinksItem}
            href={getFeedbackURL()}
            target="_blank"
          >
            <Text>{messages['landing_page_header_feedback.message']}</Text>
          </VtexLink>
        </HeaderBrand.RightLinks>
        <HamburgerMenu />
      </HeaderBrand>
    </Box>
  )
}

export default Header
