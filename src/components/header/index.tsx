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

  const [searchValue, setSearchValue] = useState('')
  const modalOpen = useRef(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const headerElement = useRef<HTMLElement>()

  const messages = getMessages()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push({
      pathname: '/search',
      query: { keyword: 'SKU' },
    })
  }

  useEffect(() => {
    const body = document.body

    const observer = new MutationObserver(() => {
      modalOpen.current = !modalOpen.current
    })
    observer.observe(body, {
      attributeFilter: ['class'],
    })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowDropdown(false)
      if (headerElement.current && !modalOpen.current) {
        const headerHeight = headerElement.current.children[0].clientHeight
        if (
          window.scrollY > headerHeight &&
          window.scrollY > lastScroll.current
        ) {
          headerElement.current.style.top = `-${headerHeight}px`
        } else {
          headerElement.current.style.top = '0'
        }
        lastScroll.current = window.scrollY
      }
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [headerElement.current])

  useEffect(() => {
    const hideDropdown = () => {
      setShowDropdown(false)
    }

    router.events.on('routeChangeStart', hideDropdown)
    return () => router.events.off('routeChangeStart', hideDropdown)
  }, [])

  return (
    <Box ref={headerElement} sx={styles.headerContainer}>
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
                data-cy="search"
                onChange={(e) => setSearchValue(e.currentTarget.value)}
              />
            </form>
          </Flex>
        </Box>

        <HeaderBrand.RightLinks sx={styles.rightLinks}>
          <Flex
            sx={styles.dropdownContainer}
            onMouseOver={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Text
              sx={styles.dropdownButton(showDropdown)}
              data-cy="docs-dropdown"
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
