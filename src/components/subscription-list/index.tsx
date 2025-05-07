import React, { useState } from 'react'
import { Box, Text, Flex, Input, Button } from '@vtex/brand-ui'
import { getMessages } from 'utils/get-messages'
import { getSubscritionURL, getNewsletterURL } from 'utils/get-url'

import styles from './styles'

const messages = getMessages()

const SubscriptionList: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Email address invalid, please try another one')
      return
    }

    const baseURL = 'https://hooks.zapier.com/hooks/catch/11585741/2pahup2/?email='
    const urlEnd = '&locale=pt-BR&date=May 05 2025 00:00:00'
    const emailEncoded = encodeURIComponent(email)
    const url = baseURL + emailEncoded + urlEnd
    
    fetch(url, 
      {
      method: 'POST'
      })
      .then(function (response) {
        return response.blob();
      })
      .then(function (myBlob) {
        setMessage("You've successfully subscribed")
        setEmail('')
      });
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
          <div sx={styles.inputContainer}>
            <Input
              label="Email Address"
              size="regular"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={styles.input} // Apply the input styles
            />           
            <Button size="regular" onClick={handleSubscribe} sx={styles.button}>
              {messages['landing_page_newsletter.Button']}
            </Button>

          </div>
          <Text sx={styles.privacyText}>
            {
              messages['landing_page_subscription.textLink'].split(
                'Privacy Policy'
              )[0]
            }
            <a
              href={getSubscritionURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </Text>
          {message && (
            <p sx={styles.message(message.includes('successfully'))}>
              {message}
            </p>
          )}
        </div>
      </Flex>
    </Box>
  )
}

export default SubscriptionList
