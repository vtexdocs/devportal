import React, { useState } from 'react'
import { Box, Text, Flex, Input, Link } from '@vtex/brand-ui'
import { getMessages } from 'utils/get-messages'
import { getSubscritionURL, getNewsletterURL } from 'utils/get-url'
import styles from './styles'

const messages = getMessages()

const SubscriptionList: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 3000)
  }

  const checkEmail = async (email: string): Promise<boolean> => {
    const apiKey = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
    if (!apiKey) {
      console.error('Newsletter API key is not defined')
      return false
    }

    const url = `https://mailcheck.p.rapidapi.com/?email=${encodeURIComponent(
      email
    )}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      })

      const data = await response.json()
      // Block if not valid, or if block/disposable is true
      return !data.block
    } catch (error) {
      return false
    }
  }

  const handleSubscribe = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessageType('error')
      setMessage('Invalid email address, please try another one.')
      clearMessageAfterTimeout()
      return
    }

    const isValid = await checkEmail(email)
    if (!isValid) {
      setMessageType('error')
      setMessage('Invalid email address, please try another one.')
      clearMessageAfterTimeout()
      return
    }

    const baseURL =
      'https://hooks.zapier.com/hooks/catch/11585741/2pahup2/?email='

    const locale = navigator.language || 'en-US'
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleString(locale, {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const urlEnd = `&locale=${locale}&date=${encodeURIComponent(formattedDate)}`
    const emailEncoded = encodeURIComponent(email)
    const url = baseURL + emailEncoded + urlEnd

    fetch(url, {
      method: 'POST',
    })
      .then((response) => response.blob())
      .then(() => {
        setMessageType('success')
        setMessage("You've successfully subscribed!")
        setEmail('')
        setTimeout(() => {
          setMessage('')
          setMessageType('')
        }, 3000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setMessageType('error')
        setMessage("Sorry, we couldn't subscribe you. Please try again later.")
        setTimeout(() => {
          setMessage('')
          setMessageType('')
        }, 3000)
      })
  }

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {messages['landing_page_subscription.title']}
      </Text>
      <Flex sx={styles.cardContainer}>
        <div sx={styles.container}>
          <Text sx={styles.description}>
            {
              messages['landing_page_subscription.description'].split(
                'newsletter'
              )[0]
            }
            <a
              href={getNewsletterURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              newsletter
            </a>
            {
              messages['landing_page_subscription.description'].split(
                'newsletter'
              )[1]
            }
          </Text>
          <Flex sx={styles.inputContainer}>
            <Input
              label="Email"
              size="regular"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={styles.inputContainer}
            />
            <Box as="button" onClick={handleSubscribe} sx={styles.button}>
              {messages['landing_page_newsletter.Button']}
            </Box>
          </Flex>
          <Text sx={styles.privacyText}>
            {
              messages['landing_page_subscription.textLink'].split(
                'Privacy Policy'
              )[0]
            }
            <Link
              href={getSubscritionURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </Text>
          {message && (
            <Box
              sx={{
                ...styles.popupCard,
                backgroundColor:
                  messageType === 'success' ? '#dff1e0' : '#f8e3e3',
              }}
            >
              <Text>{message}</Text>
            </Box>
          )}
        </div>
      </Flex>
    </Box>
  )
}

export default SubscriptionList
