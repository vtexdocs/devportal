import { Box, Flex, Text, IconCaret } from '@vtex/brand-ui'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import heroImage from '../../../public/images/hero.png'
import styles from 'components/newsletter-section/styles'

import { getMessages } from 'utils/get-messages'

const shortcuts = [
  {
    href: '/docs/guides',
    labelKey: 'landing_page_newsletter.shortcut_guides' as const,
  },
  {
    href: '/docs/api-reference',
    labelKey: 'landing_page_newsletter.shortcut_api' as const,
  },
  {
    href: '/updates/release-notes',
    labelKey: 'landing_page_newsletter.shortcut_releases' as const,
  },
]

const moreShortcuts = [
  {
    href: '/docs/app-development',
    labelKey: 'landing_page_newsletter.shortcut_app_development' as const,
  },
  {
    href: '/docs/storefront-development',
    labelKey: 'landing_page_newsletter.shortcut_storefront' as const,
  },
  {
    href: '/docs/vtex-io-apps',
    labelKey: 'landing_page_newsletter.shortcut_vtex_io_apps' as const,
  },
  {
    href: '/docs/troubleshooting',
    labelKey: 'landing_page_newsletter.shortcut_troubleshooting' as const,
  },
]

const NewsletterSection = () => {
  const messages = getMessages()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.titleContent}>
          <Text sx={styles.newsletterTitle}>
            {messages['landing_page_newsletter.title']}{' '}
            <Text as="span" sx={styles.newsletterTitleAccent}>
              {messages['landing_page_newsletter.title_accent']}
            </Text>
          </Text>
          <Flex sx={styles.shortcuts}>
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.href}
                href={shortcut.href}
                style={{ textDecoration: 'none' }}
              >
                <Text sx={styles.shortcut}>{messages[shortcut.labelKey]}</Text>
              </Link>
            ))}
            <Box ref={menuRef} sx={styles.moreMenu}>
              <Box
                as="button"
                type="button"
                sx={styles.moreButton}
                onClick={() => setOpen((isOpen) => !isOpen)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="newsletter-more-menu"
              >
                <IconCaret direction={open ? 'up' : 'down'} size={16} />
              </Box>
              {open && (
                <Box id="newsletter-more-menu" sx={styles.dropdown} role="menu">
                  {moreShortcuts.map((shortcut) => (
                    <Link
                      key={shortcut.href}
                      href={shortcut.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      <Text sx={styles.dropdownItem}>
                        {messages[shortcut.labelKey]}
                      </Text>
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
        <Box sx={styles.imageContainer}>
          <Image
            src={heroImage}
            alt=""
            priority
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '118%',
              height: '118%',
              objectFit: 'cover',
              objectPosition: 'left top',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NewsletterSection
