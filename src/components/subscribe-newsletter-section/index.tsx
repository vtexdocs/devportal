import { Flex, Text } from '@vtex/brand-ui'
import ArrowRightIcon from 'components/icons/arrow-right-icon'

import { getMessages } from 'utils/get-messages'

import styles from './styles'

const SubscribeNewsletterSection = () => {
  const messages = getMessages()
  return (
    <Flex sx={styles.subscribeNewsletterContainer}>
      <Flex sx={styles.textContainer}>
        <Text className="title" sx={styles.text}>
          {messages['subscribe_newsletter_section.title']}
        </Text>
        <Text className="subtitle" sx={styles.text}>
          {messages['subscribe_newsletter_section.subtitle']}
        </Text>
      </Flex>

      <Flex sx={styles.emailContainer}>
        <form sx={styles.emailForm}>
          <input
            type="email"
            name=""
            id="newsletter-mail"
            placeholder="E-mail"
            style={styles.emailInput}
          />
        </form>

        <div style={styles.divider}></div>

        <Flex sx={styles.iconContainer}>
          <ArrowRightIcon sx={styles.submitArrow} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SubscribeNewsletterSection
