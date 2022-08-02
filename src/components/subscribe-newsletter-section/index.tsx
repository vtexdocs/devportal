import { Flex, Text } from '@vtex/brand-ui'
import ArrowRightIcon from 'components/icons/arrow-right-icon'

import styles from './styles'

const SubscribeNewsletterSection = () => {
  return (
    <Flex sx={styles.subscribeNewsletterContainer}>
      <Flex sx={styles.textContainer}>
        <Text className="title" sx={styles.text}>
          Subscribe to our developer newsletter
        </Text>
        <Text className="subtitle" sx={styles.text}>
          And stay on top of the practices and technologies that are
          transforming commerce.
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
