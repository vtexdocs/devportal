import { Box, Flex, Text } from '@vtex/brand-ui'
import Link from 'next/link'
import Image from 'next/image'

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

const NewsletterSection = () => {
  const messages = getMessages()

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
